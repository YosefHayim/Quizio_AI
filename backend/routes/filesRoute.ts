import { extractDataFromImg, extractDataFromPdf } from '../controllers/filesController'

import express from 'express'
import multer from 'multer'

const router = express.Router()

const uploadPdfs = multer({
  dest: '../files/pdfs/',
  fileFilter: (req, file, cb) => {
    if (!req.file) cb(null, false)
    if (file.mimetype !== 'application/pdf') cb(null, false)
    // if (file.size > 5 * 1024 * 1024) cb(null, false)
  }
})

const uploadImgs = multer({
  dest: '../files/images/',
  fileFilter: (req, file, cb) => {
    if (!req.file) cb(null, false)
    if (file.mimetype !== 'image/jpeg') cb(null, false)
    // if (file.size > 5 * 1024 * 1024) cb(null, false)
  }
})

router.post('/upload-pdf', uploadPdfs.single('pdf'), extractDataFromPdf)

router.post('/upload-img', uploadImgs.single('img'), extractDataFromImg)

export default router
