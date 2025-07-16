import {
  extractDataFromImg,
  extractDataFromPdf,
  getFileContentById
} from '../controllers/filesController'

import express from 'express'
import multer from 'multer'

const router = express.Router()

const uploadPdfs = multer({
  dest: './files/pdfs/'
})

const uploadImgs = multer({
  dest: './files/images/'
})

router.get('/:fileId', getFileContentById)

router.post('/upload-pdf', uploadPdfs.single('pdf'), extractDataFromPdf)

router.post('/upload-img', uploadImgs.single('img'), extractDataFromImg)

export default router
