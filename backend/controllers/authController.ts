import { Request, Response } from 'express'

import crypto from 'crypto'
import fs from 'fs'
import { oauth2Client } from '../oAuth'
import path from 'path'

const FILEPATH = path.join(__dirname, './credentails.json')

export const getAccessToken = async (req: Request, res: Response): Promise<any> => {
  try {
    const { code } = req.query

    if (!code || typeof code !== 'string')
      return res.status(400).json({ error: 'Invalid or missing code' })

    const { tokens } = await oauth2Client.getToken(code)

    if (!tokens) return res.status(400).json({ error: 'Invalid or missing tokens' })

    oauth2Client.setCredentials(tokens)

    fs.writeFile(FILEPATH, JSON.stringify(tokens), (err) => {
      console.error(err)
    })

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

    if (!url) res.status(404).send(`Invalid, url is empty: ${url}`)

    res.send(`<button><a href=${url}>Redirect to get access</a></button>`)
  } catch (error) {
    console.error('getAuthUrl fn: ', error)
    res.status(500).json({ error })
  }
}
