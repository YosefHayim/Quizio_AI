import fs from 'fs'
import pdf from 'pdf-parse'

const extractDataFromPdfByAi = async (filePath: string) => {
  const dataBuffer = fs.readFileSync(filePath)
  const pdfData = await pdf(dataBuffer)
  console.log(pdfData.text)
}

export default extractDataFromPdfByAi
