import dotenv from 'dotenv'
import fs from 'fs'
import { google } from 'googleapis'
import path from 'path'
dotenv.config()

const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.LOCAL_REDIRECT_URL
)

const CREDENTIALS_PATH = path.resolve(__dirname, './credentails.json')

if (fs.existsSync(CREDENTIALS_PATH)) {
  console.log('Credentails loaded')
  const tokens = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, 'utf8'))
  oauth2Client.setCredentials(tokens)
} else {
  console.warn('⚠️ Token file not found at', CREDENTIALS_PATH)
}

export { oauth2Client }
