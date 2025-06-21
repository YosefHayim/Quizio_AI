import { Request, Response } from 'express'

import { google } from 'googleapis'

const getCaptionsByVideoID = async (req: Request, res: Response) => {
  try {
    const service = google.youtube('v3')
    const result = await service.captions.list({ videoId: '' })
    console.log(result)
    res.status(200).send(result)
  } catch (error) {
    console.error('getCaptionsByVideoID fn: ', error)
  }
}

export default getCaptionsByVideoID
