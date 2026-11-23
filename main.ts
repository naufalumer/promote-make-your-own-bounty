// Entry for post-x-promote-make-your-own-bounty-01 (Node 22, standard library only).
//
// The entry is the X post itself: one quote of make.fun's make-your-own-bounty
// post (https://x.com/makefunai/status/2124915864336236646) from a public
// account, with a photo of its own attached and the play code in its text.
// This program only hands the post's address to the gate: it reads POST.json
// from the repository root, checks it names a real X post address, and writes
// it to /output/POST.json, where the gate reads it. The house reads the post's
// replies, reposts and quotes itself; nothing this program writes is scored.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const POST_ADDRESS =
  /^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/([^/]+\/status\/\d+|i\/web\/status\/\d+)$/;

function loadPostAddress(): string {
  let parsed: unknown;
  try {
    parsed = JSON.parse(readFileSync(join(BOT_DIR, 'POST.json'), 'utf8'));
  } catch (err) {
    console.error(`POST.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
    process.exit(1);
  }
  const url = (parsed as { url?: unknown } | null)?.url;
  if (typeof url !== 'string' || !POST_ADDRESS.test(url)) {
    console.error('POST.json does not name an X post address (https://x.com/<handle>/status/<id>).');
    process.exit(1);
  }
  return url;
}

const url = loadPostAddress();
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'POST.json'), JSON.stringify({ url }) + '\n', 'utf8');
