import { getImgContentByAI, getPdfContentByAI } from '../controllers/filesController'

import express from 'express'
import multer from 'multer'

const router = express.Router()

const uploadPdfs = multer({
  dest: './files/pdfs/',
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'application/pdf') cb(null, false)
  }
})

const uploadImgs = multer({
  dest: './files/images/',
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.startsWith('image/')) cb(null, false)
  }
})

router.post('/pdf', uploadPdfs.single('pdf'), getPdfContentByAI)

router.post('/img', uploadImgs.single('img'), getImgContentByAI)
export default router
