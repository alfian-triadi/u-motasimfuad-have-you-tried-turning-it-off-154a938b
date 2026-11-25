import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Have you tried turning it off and on again? If that doesn't work, I'll escalate you to Level 2, where they'll ask the exact same thing, just with more confidence.";

try {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, "utf8");
} catch {
  // /output unavailable here; stdout still carries the entry.
}
process.stdout.write(LINE);
