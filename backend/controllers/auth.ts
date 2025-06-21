import { Request, Response } from 'express'

const getAuthCode = (req: Request, res: Response) => {
  console.log(req)
  res.json({ status: 'success', message: 'Arrived successfully to auth page' })
}

export default getAuthCode
