import { mkdir, readFile, rm, writeFile } from "node:fs/promises";

const page = await readFile("_site/index.html", "utf8");
const socialImage = (await readFile("_site/og.jpg")).toString("base64");
const worker = `
const page = ${JSON.stringify(page)};
const socialImageBase64 = ${JSON.stringify(socialImage)};
let socialImage;

function getSocialImage() {
  if (socialImage) return socialImage;

  const binary = atob(socialImageBase64);
  socialImage = new Uint8Array(binary.length);

  for (let index = 0; index < binary.length; index += 1) {
    socialImage[index] = binary.charCodeAt(index);
  }

  return socialImage;
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

    if (url.pathname === "/og.jpg") {
      return new Response(isHead ? null : getSocialImage(), {
        headers: {
          "cache-control": "public, max-age=604800, immutable",
          "content-type": "image/jpeg",
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
