// Import Node.js core dependencies
import { createReadStream } from "fs";

// Import Internal dependencies
import { coroutine, pipeline } from "./utils.js";

// CONSTANTS
const kEndOfLine = "\n";

const solution = coroutine(function* splitByNewLine(lineCounter) {
    let previous = "";
    try {
        while (true) {
            previous += yield;

            let eolIndex;
            while ((eolIndex = previous.indexOf(kEndOfLine)) >= 0) {
                lineCounter.next(previous.slice(0, eolIndex));
                previous = previous.slice(eolIndex + 1);
            }
        }
    }
    finally {
        if (previous.length > 0) {
            lineCounter.next(previous);
        }
        lineCounter.return();
    }
});

/** DO NOT MODIFY START */
const lineCounter = coroutine(function* () {
    for (let lineCount = 0; ;lineCount++) {
        console.log(`${lineCount}: ${yield}`);
    }
});

const observer = solution(lineCounter());
await pipeline(createReadStream("workshop_input.txt"), observer);
/** DO NOT MODIFY END */
