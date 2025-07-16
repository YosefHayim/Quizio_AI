import express from 'express'
import { getFileContentByAI } from '../controllers/filesController'
import multer from 'multer'

const router = express.Router()

const uploadPdfs = multer({
  dest: './files/pdfs/'
})

const uploadImgs = multer({
  dest: './files/images/'
})

router.get('/', uploadPdfs.single('pdf'), uploadImgs.single('image'), getFileContentByAI)

export default router
