"use strict";

import fs from "fs/promises";
import path from "path";

async function* solution(directoryLocation) {
    // or use fs.readdir withFileTypes: true
    const dirents = await fs.opendir(directoryLocation);

    for await (const dirent of dirents) {
        const fullDirentPath = path.join(directoryLocation, dirent.name);
        yield fullDirentPath;

        if (dirent.isDirectory()) {
            yield* fetchFiles(fullDirentPath);
        }
    }
}

// Récupération du dossier à scanner avec les arguments du script.
const [directoryLocation = process.cwd()] = process.argv.slice(2);

// https://2ality.com/2017/12/for-await-of-sync-iterables.html
for await (const filePath of solution(directoryLocation)) {
    console.log(filePath);
}
