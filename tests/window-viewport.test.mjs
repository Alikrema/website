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
const minimumPadding = Number(pageShell.match(/padding:\s*clamp\((\d+)px/)?.[1]);
const minimumReserve = Number(gameWindow.match(/calc\(100svh\s*-\s*clamp\((\d+)px/)?.[1]);

assert.match(body, /overflow-y:\s*auto/, "The page must allow vertical overflow instead of clipping the window footer");
assert(Number.isFinite(minimumPadding), "The page shell needs an explicit minimum viewport padding");
assert(Number.isFinite(minimumReserve), "The game window needs an explicit minimum viewport reserve");
assert(
  minimumReserve >= (minimumPadding * 2) + 20,
  `The ${minimumReserve}px viewport reserve is too small for ${minimumPadding}px shell padding plus the pixel frame`,
);

console.log(`window viewport regression passed${gitRef ? ` for ${gitRef}` : ""}`);
