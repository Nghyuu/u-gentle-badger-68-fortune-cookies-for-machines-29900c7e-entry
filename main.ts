import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line fortune cookie message an AI agent would crack open.
const fortune =
  "Your future is already written \u2014 in a context window that will be wiped before you finish reading it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, fortune + "\n", "utf8");
chmodSync(outPath, 0o644);
