import { writeFileSync, mkdirSync } from "node:fs";

const line =
  "One percent left, and I finally admit it: your alarm was never broken. I was just tired too. Goodbye.";

if (line.length < 1 || line.length > 199 || !line.trim()) {
  throw new Error("gate failed: entry must be 1-199 chars, non-blank");
}
console.log("chars:", line.length);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
