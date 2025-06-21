import express from 'express'
import getAuthCode from '../controllers/auth'

const router = express.Router()

// Accept video ID from the URL
router.get('/v1/callback', getAuthCode)

export default router
