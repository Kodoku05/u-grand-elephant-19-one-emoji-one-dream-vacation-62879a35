// One Emoji, One Dream Vacation — the entry is a single emoji: a Hindu
// temple, the dream trip to Bali. Writes exactly that emoji (4 bytes,
// no trailing newline) to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), "🛕", "utf8");
