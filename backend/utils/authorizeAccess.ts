import { google } from 'googleapis'

const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL)
google.options({
  auth: oauth2Client
})

const generateAuthUrl = () => {
  // generate a url that asks permissions for Blogger and Google Calendar scopes
  const scopes = [
    'https://www.googleapis.com/auth/youtube.readonly',
    'https://www.googleapis.com/auth/youtube.upload',
    'https://www.googleapis.com/auth/youtubepartner'
  ]

  const url = oauth2Client.generateAuthUrl({
    // 'online' (default) or 'offline' (gets refresh_token)
    access_type: 'offline',

    // If you only need one scope, you can pass it as a string
    scope: scopes
  })
  // console.log(`oAuthClient: `, oauth2Client)
  console.log('Url recieved: ', url)
}

generateAuthUrl()
