// Import Node.js core dependencies
import { createReadStream } from "fs";

// Import Internal dependencies
import { coroutine, pipeline } from "./utils.js";

// CONSTANTS
const kEndOfLine = "\n";

const solution = coroutine(function* splitByNewLine(lineCounter) {
});

/** DO NOT MODIFY START */
const lineCounter = coroutine(function* () {
    for (let lineCount = 0; ;lineCount++) {
        console.log(`${lineCount}: ${yield}`);
    }
});

const observer = solution(lineCounter());
await pipeline(createReadStream("./workshop_input.txt"), observer);
/** DO NOT MODIFY END */