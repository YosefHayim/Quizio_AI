import { CONFIG } from './config'
import authRoute from './routes/authRoute'
import errorHandler from 'errorhandler'
import express from 'express'
import fileRoute from './routes/filesRoute'
import morgan from 'morgan'
import userRoute from './routes/userRoute'
import youtubeRoute from './routes/youtubeRoute'

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'Backend of Quizio is running'
  })
})

app.use('/api/youtube', youtubeRoute)
app.use('/api/auth', authRoute)
app.use('/api/files', fileRoute)
app.use('/api/users', userRoute)

if (process.env.NODE_ENV === 'development') {
  app.use(errorHandler({ log: true }))
}

app.listen(CONFIG.port, () => {
  console.log(`Running on port: http://localhost:${CONFIG.port}`)
})
