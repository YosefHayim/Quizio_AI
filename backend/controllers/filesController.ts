import { Request, Response } from 'express'

import { ocrParseAiFile } from '../api/ocr-parse-ai-file'

export const getFileContentByAI = async (req: Request, res: Response): Promise<any> => {
  const file = req.file
  if (!file)
    return res.status(404).json({
      status: 'Failed',
      message: 'Please provide file In order to retrieve file content.'
    })

  const fileContent = await ocrParseAiFile(file)

  res.status(200).json({
    status: 'success',
    message: 'Successfully retrieved file content.',
    fileContent
  })
}
