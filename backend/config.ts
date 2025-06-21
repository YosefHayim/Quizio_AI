import dotenv from 'dotenv'

dotenv.config()

export const CONFIG = {
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
  local_redirect_url: process.env.LOCAL_REDIRECT_URL,
  redirect_url: process.env.REDIRECT_URL,
  port: 3000
}
