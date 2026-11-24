// Real-Life Patch Notes: The Comedy Changelog
// Entry program for make.fun competition
// u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d
//
// The program writes exactly one line — a software patch note for a bug
// in real life — to /output/entry.txt. The gate requires UTF-8 text of
// 1 to 160 characters, not only white space.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// Final pick: back to the doorway-amnesia bug — the most universal,
// instantly landing one of the candidates — tightened so every word
// works (criterion 5: "entering a room wiped the reason you came in"
// drops the redundant "went in there" of the first draft).
const ENTRY =
  "v3.2.1: Fixed a bug where entering a room wiped the reason you came in.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
console.log(`wrote ${ENTRY.length} chars to ${join(outDir, "entry.txt")}`);
