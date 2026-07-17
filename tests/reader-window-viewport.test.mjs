import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { readFile } from "node:fs/promises";

const gitRef = process.argv[2];
const source = gitRef
  ? execFileSync("git", ["show", `${gitRef}:public/retro-pages.css`], { encoding: "utf8" })
  : await readFile("public/retro-pages.css", "utf8");

function cssBlock(selector) {
  const escapedSelector = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = source.match(new RegExp(`(?:^|\\n)${escapedSelector}\\s*\\{([\\s\\S]*?)\\n\\}`));

  assert(match, `Missing CSS block for ${selector}`);
  return match[1];
}

const body = cssBlock("body");
const readerShell = cssBlock(".reader-shell");
const readerWindow = cssBlock(".reader-window");
const readerPanel = cssBlock(".reader-panel");

assert.match(body, /height:\s*100svh/, "Reader pages must be bounded to the visible viewport");
assert.match(body, /overflow:\s*hidden/, "Reader pages must not create an outer scrollbar");
assert.match(readerShell, /height:\s*100svh/, "The outer reader shell must stay within one viewport");
assert.match(readerWindow, /grid-template-rows:\s*auto\s+minmax\(0,\s*1fr\)\s+auto/, "The title and navigation bars must stay fixed around a shrinking content row");
assert.match(readerWindow, /overflow:\s*hidden/, "Overflow must stay within the retro file window");
assert.match(readerPanel, /min-height:\s*0/, "The reader panel must be allowed to shrink");
assert.match(readerPanel, /overflow-y:\s*auto/, "Long reader content must scroll inside the file window");

console.log(`reader window viewport regression passed${gitRef ? ` for ${gitRef}` : ""}`);
