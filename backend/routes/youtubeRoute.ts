// routes/youtube.ts
import express from 'express'
import getCaptionsByVideoID from '../controllers/youtubeController'

const router = express.Router()

// Accept video ID from th e URL
router.get('/:videoId', getCaptionsByVideoID)

export default router
