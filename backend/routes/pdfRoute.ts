import express from 'express'
import { extractDataFromPdf } from '../controllers/pdfRoute'
import multer from 'multer'

const router = express.Router()

const upload = multer({
  dest: '../upload-pdfs',
  fileFilter: (req, file, cb) => {
    if (!req.file) cb(null, false)
    if (file.mimetype !== 'application/pdf') cb(null, false)
    if (file.size > 5 * 1024 * 1024) cb(null, false)
  }
})

router.post('/', upload.single('pdf-file'), extractDataFromPdf)
