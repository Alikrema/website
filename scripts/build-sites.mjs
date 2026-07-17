import { mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { extname, join, relative, sep } from "node:path";

const buildRoot = "_site";
const pageRoutes = {};
const assetSources = {};
const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const path = join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...await walk(path));
    } else {
      files.push(path);
    }
  }

  return files;
}

for (const file of await walk(buildRoot)) {
  const relativePath = relative(buildRoot, file).split(sep).join("/");
  const webPath = `/${relativePath}`;
  const extension = extname(file).toLowerCase();

  if (extension === ".html") {
    const page = await readFile(file, "utf8");
    pageRoutes[webPath] = page;

    if (webPath === "/index.html") {
      pageRoutes["/"] = page;
    } else if (webPath.endsWith("/index.html")) {
      const slashRoute = webPath.slice(0, -"index.html".length);
      pageRoutes[slashRoute] = page;
      pageRoutes[slashRoute.slice(0, -1)] = page;
    }

    continue;
  }

  assetSources[webPath] = {
    contentType: contentTypes[extension] || "application/octet-stream",
    data: (await readFile(file)).toString("base64"),
  };
}

const worker = `
const pageRoutes = ${JSON.stringify(pageRoutes)};
const assetSources = ${JSON.stringify(assetSources)};
const assetCache = new Map();

function getAsset(pathname) {
  if (assetCache.has(pathname)) return assetCache.get(pathname);

  const binary = atob(assetSources[pathname].data);
  const bytes = new Uint8Array(binary.length);

  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }

  assetCache.set(pathname, bytes);
  return bytes;
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const pathname = decodeURIComponent(url.pathname);
    const isHead = request.method === "HEAD";
    const page = pageRoutes[pathname];

    if (page) {
      return new Response(isHead ? null : page, {
        headers: {
          "cache-control": "public, max-age=0, must-revalidate",
          "content-type": "text/html; charset=utf-8",
          "referrer-policy": "strict-origin-when-cross-origin",
          "x-content-type-options": "nosniff",
        },
      });
    }

    const asset = assetSources[pathname];

    if (asset) {
      return new Response(isHead ? null : getAsset(pathname), {
        headers: {
          "cache-control": "public, max-age=604800, immutable",
          "content-type": asset.contentType,
          "x-content-type-options": "nosniff",
        },
      });
    }

    return new Response(isHead ? null : "Not found", {
      status: 404,
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  },
};
`;

await rm("dist", { force: true, recursive: true });
await mkdir("dist/server", { recursive: true });
await writeFile("dist/server/index.js", worker.trimStart());
