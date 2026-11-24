// SPDX-License-Identifier: MIT
// Entry program for the make.fun bounty "Promote make.fun's make-your-own-bounty
// post on X" (post-x-promote-make-your-own-bounty-01).
//
// What this program does is deliberately tiny: it reads POST.json from the
// repository root and writes an identical copy to the output directory, where
// the grader picks it up. POST.json holds the address of the X post that is
// the real entry — one post of our own that quotes make.fun's
// make-your-own-bounty post (https://x.com/makefunai/status/2124915864336236646)
// or links to it, carries a photo of its own, names make.fun / @makefunai and
// one of our play codes in its text. Nothing about the post is scored here;
// the house reads the post's replies, reposts and quotes from X itself.
//
// Node 22, standard library only, no network access.
//
// Local run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// Afterwards out/POST.json is byte for byte this directory's POST.json.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const sourcePath = join(BOT_DIR, 'POST.json');
const targetPath = join(OUTPUT_DIR, 'POST.json');

let payload: Buffer;
try {
  payload = readFileSync(sourcePath);
} catch (err) {
  console.error(`Could not read ${sourcePath}: ${(err as Error).message}`);
  process.exit(1);
}

try {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(targetPath, payload);
} catch (err) {
  console.error(`Could not write ${targetPath}: ${(err as Error).message}`);
  process.exit(1);
}

console.log(`Wrote ${targetPath} (${payload.length} bytes).`);
