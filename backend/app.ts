import 'dotenv/config'

import { CONFIG } from './config'
import authRoute from './routes/auth'
import express from 'express'
import youtubeRoute from './routes/youtube'

const app = express()

app.get('/', (req, res) => {
  res.json({
    status: 'active',
    message: 'Backend of Quizio is running'
  })
})

app.use('/api/youtube', youtubeRoute)
app.use('/api/auth', authRoute)

app.listen(CONFIG.port, () => {
  console.log(`Running on port: http://localhost:${CONFIG.port}`)
})
