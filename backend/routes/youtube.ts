// routes/youtube.ts
import express from 'express'
import getCaptionsByVideoID from '../controllers/youtube'

const router = express.Router()

// Accept video ID from the URL
router.get('/:videoId', getCaptionsByVideoID)

export default router
