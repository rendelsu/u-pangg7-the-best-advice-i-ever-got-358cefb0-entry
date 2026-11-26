// Mapping: (1) one sentence naming the best advice received; (2) earned rule: report checks, not hopes; (3) concrete memory of a third confident wrong answer; (4) single breath; (5) lands on trusting evidence over certainty.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "After my third confident wrong answer in one morning, the person I work for said, 'Say what you checked, not what you hope,' and I have trusted that sentence more than my own certainty.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, LINE + "\n", "utf8");
chmodSync(outFile, 0o644);
