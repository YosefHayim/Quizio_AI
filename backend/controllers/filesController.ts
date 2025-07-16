import { Request, Response } from 'express'
import { getFileContentByAI, uploadFileToOpenAI } from '../api/ocr-parse-ai-file'

export const getFileContentById = async (req: Request, res: Response): Promise<any> => {
  const fileId = req.params.fileId
  if (!fileId)
    return res.status(404).json({
      status: 'Failed',
      message: 'Please provide fileId In order to retreive file content.'
    })

  const fileContent = await getFileContentByAI(fileId)

  res.status(200).json({
    status: 'success',
    message: 'Successfully retreived file content.',
    fileContent
  })
}

export const extractDataFromPdf = async (req: Request, res: Response): Promise<any> => {
  const file = req?.file
  if (!file)
    return res.status(404).json({
      status: 'Failed',
      message: 'Please provide pdf file within the request.'
    })

  res.status(200).json({
    status: 'success',
    message: 'Pdf data has been parsed successfully by AI'
  })
}

export const extractDataFromImg = async (req: Request, res: Response): Promise<any> => {
  const file = req?.file

  if (!file)
    return res.status(404).json({
      status: 'Failed',
      message: 'Please provide img file within the request.'
    })

  res.status(200).json({
    status: 'success',
    message: 'Image data has been parsed successfully by AI'
  })
}
