import { Request, Response } from 'express'
import { getFileContentByAI, uploadFileToOpenAI } from '../api/ocr-parse-ai-file'

export const extractDataFromPdf = async (req: Request, res: Response): Promise<any> => {
  const file = req?.file
  if (!file)
    return res.status(404).json({
      status: 'Failed',
      message: 'Please provide pdf file within the request.'
    })

  const fileId = await uploadFileToOpenAI(file as unknown as File)
  const dataRecieved = await getFileContentByAI(fileId)
  res.status(204).json({
    status: 'success',
    message: 'Pdf data has been parsed successfully by AI',
    data: dataRecieved
  })
}

export const extractDataFromImg = async (req: Request, res: Response): Promise<any> => {
  const file = req?.file

  if (!file)
    return res.status(404).json({
      status: 'Failed',
      message: 'Please provide img file within the request.'
    })

  const fileId = await uploadFileToOpenAI(file as unknown as File)
  const dataRecieved = await getFileContentByAI(fileId)
  res.status(204).json({
    status: 'success',
    message: 'image data has been parsed successfully by AI',
    data: dataRecieved
  })
}
