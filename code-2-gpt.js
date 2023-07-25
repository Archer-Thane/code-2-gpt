#!/usr/bin/env node
import fs from "fs/promises";
import path from "path";

const MAX_SIZE = 27500; // Maximum characters in each file

async function getFiles(dir, ext) {
  const dirents = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    dirents.map((dirent) => {
      const res = path.resolve(dir, dirent.name);
      if (
        dirent.isDirectory() &&
        dirent.name !== "node_modules" &&
        dirent.name !== ".git" &&
        dirent.name !== ".DS_Store"
      ) {
        return getFiles(res, ext);
      } else if (
        dirent.isFile() &&
        dirent.name !== "pnpm-lock.yaml" &&
        (ext === undefined || path.extname(dirent.name) === `.${ext}`)
      ) {
        return res;
      } else {
        return null;
      }
    })
  );

  return files.flat().filter(Boolean);
}

async function concatenateFiles(dir, outputPrefix, ext) {
  try {
    const fileNames = await getFiles(dir, ext);
    let result = "";
    let fileCount = 1;

    for (const file of fileNames) {
      const content = await fs.readFile(file, "utf8");
      const newContent = `# ${file}:\n${content}\n\n`;

      if (result.length + newContent.length > MAX_SIZE) {
        // Write the content to a new file and reset the result variable
        const outputFile = `${outputPrefix}-${String(fileCount).padStart(
          3,
          "0"
        )}.txt`;
        await fs.writeFile(outputFile, result, "utf8");
        console.log(`Contents written to ${outputFile}`);
        result = newContent;
        fileCount += 1;
      } else {
        result += newContent;
      }
    }

    // Don't forget to write the last chunk of data
    if (result.length > 0) {
      const outputFile = `${outputPrefix}-${String(fileCount).padStart(
        3,
        "0"
      )}.txt`;
      await fs.writeFile(outputFile, result, "utf8");
      console.log(`Contents written to ${outputFile}`);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

// Directory path you want to scan
const directory = "./";

// Get the extension from the command line arguments
let extension;
if (process.argv.length > 2) {
  const arg = process.argv[2];
  const [key, value] = arg.split("=");
  if (key === "--ext") {
    extension = value;
  }
}

concatenateFiles(directory, "results", extension);
