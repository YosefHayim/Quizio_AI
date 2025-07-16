import { Request, Response } from 'express'

export const extractDataFromPdf = async (req: Request, res: Response): Promise<any> => {
  const file = req?.file
}

export const extractDataFromImg = async (req: Request, res: Response): Promise<any> => {
  const file = req?.file
}
