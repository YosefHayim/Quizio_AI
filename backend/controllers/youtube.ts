import { Request, Response } from 'express'

const getCaptionsByVideoID = async (req: Request, res: Response) => {
  const { videoId } = req.params

  if (!videoId)
    return res.json({ status: 'Error', message: 'Missing VideoId in order to extract captions' })
}

export default getCaptionsByVideoID
