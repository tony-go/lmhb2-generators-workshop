"use strict";

import fs from "fs/promises";
import path from 'path'

/*
 * Récupération du chemin absolu de chacun des fichiers contenue dans le dossier "directoryLocation".
 */

async function* solution(directoryLocation) {
    // gift: use fs.readdir or fs.opendir
}

// Récupération du dossier à scanner avec les arguments du script.
const [directoryLocation = process.cwd()] = process.argv.slice(2);

for await (const filePath of solution(directoryLocation)) {
    console.log(filePath);
}
