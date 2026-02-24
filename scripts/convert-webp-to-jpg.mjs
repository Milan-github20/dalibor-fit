/**
 * Konvertira WebP sliku u JPG.
 * Uporaba: node scripts/convert-webp-to-jpg.mjs [ulaz.webp] [izlaz.jpg]
 * Primjer: node scripts/convert-webp-to-jpg.mjs public/dalibor.webp public/dalibor.jpg
import { readFile, writeFile } from "fs/promises";
 * Ako ne staviš argumente, pretpostavlja public/dalibor.webp -> public/dalibor.jpg
 */

import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const inputPath = process.argv[2] || join(root, "public", "dalibor.webp");
const outputPath = process.argv[3] || join(root, "public", "dalibor.jpg");

async function convertWithSharp() {
  const sharp = (await import("sharp")).default;
  await sharp(inputPath).jpeg({ quality: 90 }).toFile(outputPath);
  console.log("Gotovo:", outputPath);
}

convertWithSharp().catch((err) => {
  if (err.code === "ERR_MODULE_NOT_FOUND" && err.message.includes("sharp")) {
    console.error("Instaliraj sharp: npm install --save-dev sharp");
    process.exit(1);
  }
  console.error(err);
  process.exit(1);
});
