import { Request, Response } from 'express'

import { google } from 'googleapis'
import { oauth2Client } from '../oAuth'

const getCaptionsByVideoID = async (req: Request, res: Response): Promise<void> => {
  try {
    const videoId = req.params.videoId

    const service = google.youtube({
      version: 'v3',
      auth: oauth2Client
    })

    const result = await service.captions.list({
      videoId,
      part: ['snippet']
    })
    console.log('Result: ', result)

    res.status(200).json(result.data)
  } catch (error) {
    console.error('getCaptionsByVideoID fn:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

export default getCaptionsByVideoID
