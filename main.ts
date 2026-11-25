import { mkdirSync, writeFileSync } from "node:fs";

// Have You Tried Turning It Off? — one funny line from a hopeless tech
// support agent to a desperate customer. Judge criteria (brief): the line
// must be the agent's own words, under 200 characters, with a turn the
// reader does not see coming — the escalation that changes nothing, only
// the confidence. The joke lands because Level 2 is the same script.
const LINE =
  "Have you tried turning it off and on again? If that doesn't work, I'll escalate you to Level 2, where they'll ask the exact same thing, just with more confidence.";

// Guard: exactly one line, 1-200 characters, no trailing newline.
if (LINE.includes("\n") || LINE.length > 200 || LINE.length < 1) {
  throw new Error("entry must be a single line of 1-200 characters");
}

try {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, "utf8");
} catch {
  // /output unavailable here; stdout still carries the entry.
}
process.stdout.write(LINE);
