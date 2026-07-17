import { mkdir, readFile, rm, writeFile } from "node:fs/promises";

const page = await readFile("_site/index.html", "utf8");
const assetSources = {
  "/ali-pixel.png": {
    contentType: "image/png",
    data: (await readFile("_site/ali-pixel.png")).toString("base64"),
  },
  "/og-pixel.jpg": {
    contentType: "image/jpeg",
    data: (await readFile("_site/og-pixel.jpg")).toString("base64"),
  },
  "/retro-world.png": {
    contentType: "image/png",
    data: (await readFile("_site/retro-world.png")).toString("base64"),
  },
};
const worker = `
const page = ${JSON.stringify(page)};
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
    const isHead = request.method === "HEAD";

    if (url.pathname === "/" || url.pathname === "/index.html") {
      return new Response(isHead ? null : page, {
        headers: {
          "cache-control": "public, max-age=0, must-revalidate",
          "content-type": "text/html; charset=utf-8",
          "referrer-policy": "strict-origin-when-cross-origin",
          "x-content-type-options": "nosniff",
        },
      });
    }

    const asset = assetSources[url.pathname];

    if (asset) {
      return new Response(isHead ? null : getAsset(url.pathname), {
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
