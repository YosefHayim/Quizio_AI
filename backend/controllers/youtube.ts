import { Request, Response } from 'express'

const getCaptionsByVideoID = (req: Request, res: Response) => {
  const { videoId } = req.params

  // url https://youtube.googleapis.com/youtube/v3/captions/YOUR_CAPTION_TRACK_ID?key=[YOUR_API_KEY]

  if (!videoId)
    res.json({ status: 'Error', message: 'Missing VideoId in order to extract captions' })
}

export default getCaptionsByVideoID
