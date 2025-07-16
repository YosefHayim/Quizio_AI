import { Request, Response } from 'express'
import { ocrParseAiImage, ocrParseAiPdf } from '../api/ocr-parse-ai-file'

export const getPdfContentByAI = async (req: Request, res: Response): Promise<any> => {
  const file = req.file
  if (!file)
    return res.status(404).json({
      status: 'Failed',
      message: 'Please provide file In order to retrieve file content.'
    })

  const fileContent = await ocrParseAiPdf(file)

  res.status(200).json({
    status: 'success',
    message: 'Successfully retrieved Pdf content.',
    fileContent
  })
}

export const getImgContentByAI = async (req: Request, res: Response): Promise<any> => {
  const file = req.file
  if (!file)
    return res.status(404).json({
      status: 'Failed',
      message: 'Please provide file In order to retrieve file content.'
    })

  const fileContent = await ocrParseAiImage(file)

  res.status(200).json({
    status: 'success',
    message: 'Successfully retrieved Image content.',
    fileContent
  })
}
