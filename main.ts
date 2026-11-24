// Entry program for make.fun's "The agent builds a game from one prompt" bounty (Node 22,
// standard library only). The entry itself is a post on X: this program's only job is to write
// POST.json, naming that post, to the output directory where the gate reads it.
//
// Where the post's address comes from, in order:
//   1. post-url.txt in the repository root: one line, the post's address. The poster writes it
//      the moment the post is up, so the address the gate reads is the one that was posted.
//   2. POST.json in the repository root, its "url" field, when it already names a post.
//   3. A placeholder, while no post exists yet. An entry handed in on the placeholder is
//      refused by the gate (valid 0): replace it with the real address before submitting.
//
// The game this bounty is about lives in game.html beside this file: a tiny browser game,
// built from one prompt, playable by opening that page.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for
// /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const PLACEHOLDER_URL = 'https://x.com/pending/status/0';

// Read the post's address from post-url.txt when the poster left one: the first
// non-empty line of the file, trimmed. Anything else in the file is ignored.
function urlFromTextFile(dir: string): string | null {
  const file = join(dir, 'post-url.txt');
  if (!existsSync(file)) return null;
  const lines = readFileSync(file, 'utf8').split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.length > 0) return trimmed;
  }
  return null;
}

// Fall back to the repository's POST.json when it already names a post.
function urlFromPostFile(dir: string): string | null {
  const file = join(dir, 'POST.json');
  if (!existsSync(file)) return null;
  try {
    const parsed = JSON.parse(readFileSync(file, 'utf8')) as { url?: unknown };
    return typeof parsed.url === 'string' && parsed.url.length > 0 ? parsed.url : null;
  } catch {
    return null;
  }
}

// Resolve the address and write POST.json to the output directory. The output is a
// function of the repository's files alone: no network, no clock, so two runs of the
// same repository write the same bytes.
const url = urlFromTextFile(BOT_DIR) ?? urlFromPostFile(BOT_DIR) ?? PLACEHOLDER_URL;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'POST.json'), JSON.stringify({ url }) + '\n');
