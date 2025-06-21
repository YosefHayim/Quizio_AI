import { Request, Response } from 'express'

const getAuthCode = (req: Request, res: Response) => {
  const { code } = req.query
  console.log(code)
  res.json({ status: 'success', message: 'Arrived successfully to auth page' })
}

export default getAuthCode
