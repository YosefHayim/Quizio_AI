import { Request, Response } from 'express'

import crypto from 'crypto'
import { oauth2Client } from '../oAuth'

export const getAccessToken = async (req: Request, res: Response): Promise<any> => {
  try {
    const { code } = req.query
    console.log('code received: ', code)

    if (!code || typeof code !== 'string') {
      return res.status(400).json({ error: 'Invalid or missing code' })
    }

    const { tokens } = await oauth2Client.getToken(code)

    if (!tokens) {
      return res.status(400).json({ error: 'Invalid or missing tokens' })
    }

    oauth2Client.setCredentials(tokens)

    return res.status(200).json({ message: 'Access token received', tokens })
  } catch (error) {
    console.error('Error durning getAccessToken fn: ', error)
    res.status(500).json({ error })
  }
}

export const getAuthUrl = (req: Request, res: Response): void => {
  try {
    const url = oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: [
        'https://www.googleapis.com/auth/youtube.readonly',
        'https://www.googleapis.com/auth/youtube.upload',
        'https://www.googleapis.com/auth/youtubepartner'
      ],
      include_granted_scopes: true,
      state: crypto.randomBytes(32).toString('hex')
    })

    if (!url) res.send(`Invalid, url is empty: ${url}`)

    res.send(`<button><a href=${url}>Redirect to get access</a></button>`)
  } catch (error) {
    console.error('getAuthUrl fn: ', error)
    res.status(500).json({ error })
  }
}
