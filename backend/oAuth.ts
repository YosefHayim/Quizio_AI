import { CONFIG } from './config'
import { google } from 'googleapis'

export const oauth2Client = new google.auth.OAuth2(
  CONFIG.client_id,
  CONFIG.client_secret,
  CONFIG.local_redirect_url
)

google.options({
  auth: oauth2Client
})
