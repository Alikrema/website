import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { readFile } from "node:fs/promises";

const gitRef = process.argv[2];
const source = gitRef
  ? execFileSync("git", ["show", `${gitRef}:pages/index.html`], { encoding: "utf8" })
  : await readFile("pages/index.html", "utf8");

function cssBlock(selector) {
  const escapedSelector = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = source.match(new RegExp(`(?:^|\\n)\\s*${escapedSelector}\\s*\\{([\\s\\S]*?)\\n\\s*\\}`));

  assert(match, `Missing CSS block for ${selector}`);
  return match[1];
}

const body = cssBlock("body");
const pageShell = cssBlock(".page-shell");
const gameWindow = cssBlock(".game-window");
const mobileStyles = source.match(/@media\s*\(max-width:\s*860px\)\s*\{([\s\S]*?)\n\s*\}\n\n\s*@media/)?.[1];

assert.match(body, /overflow:\s*hidden/, "The desktop page must not create a viewport scrollbar");
assert.match(pageShell, /height:\s*100svh/, "The desktop shell must be bounded to one visible viewport");
assert.match(gameWindow, /height:\s*min\([^;]*calc\(100svh\s*-/, "The game window must fit inside the desktop viewport");
assert.match(gameWindow, /min-height:\s*0/, "Grid content must be allowed to shrink without growing the game window");
assert(mobileStyles, "The narrow layout needs an explicit responsive override");
assert.match(mobileStyles, /body\s*\{[\s\S]*?overflow-y:\s*auto/, "Long mobile content must remain scrollable");

console.log(`window viewport regression passed${gitRef ? ` for ${gitRef}` : ""}`);
