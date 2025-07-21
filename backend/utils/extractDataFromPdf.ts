import PdfParse from "pdf-parse";
import fs from "fs";

const extractDataFromPdf = async (filePath: string) => {
  const dataBuffer = fs.readFileSync(filePath);
  const pdfData = await PdfParse(dataBuffer);
  console.log(pdfData.text);
};

export default extractDataFromPdf;
