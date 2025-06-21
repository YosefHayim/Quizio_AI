import 'dotenv/config'

import authRoute from './routes/auth'
import express from 'express'
import youtubeRoute from './routes/youtube'

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.json({
    status: 'active',
    message: 'Backend of Quizio is running'
  })
})

app.use('/api/youtube', youtubeRoute)
app.use('/api/auth', authRoute)

app.listen(PORT, () => {
  console.log(`Running on port: http://localhost:${PORT}`)
})
