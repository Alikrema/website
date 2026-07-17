import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { access, readFile } from "node:fs/promises";

const gitRef = process.argv[2];

async function source(path) {
  if (gitRef) {
    return execFileSync("git", ["show", `${gitRef}:${path}`], { encoding: "utf8" });
  }

  return readFile(path, "utf8");
}

const [homepage, readerLayout] = await Promise.all([
  source("pages/index.html"),
  source("pages/_includes/retro-page.njk"),
]);

const faviconLink = /<link\s+rel="icon"\s+type="image\/png"\s+href="\/favicon\.png"\s*\/?>/;

assert.match(homepage, faviconLink, "The homepage must declare the pixel favicon");
assert.match(readerLayout, faviconLink, "Reader pages must declare the pixel favicon");

if (gitRef) {
  execFileSync("git", ["cat-file", "-e", `${gitRef}:public/favicon.png`]);
} else {
  await access("public/favicon.png");
}

console.log(`site metadata regression passed${gitRef ? ` for ${gitRef}` : ""}`);
