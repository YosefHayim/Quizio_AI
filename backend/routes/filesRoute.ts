import { getImgContentByAI, getPdfContentByAI } from "../controllers/filesController";

import express from "express";
import multer from "multer";

const router = express.Router();

const uploadPdfs = multer({
  dest: "./files/pdfs/",
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== "application/pdf") cb(null, false);
  },
});

const uploadImgs = multer({
  dest: "./files/imgs/",
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== "image/jpeg" && file.mimetype !== "image/png") cb(null, false);
  },
});

const uploadTxt = multer({
  dest: "./files/txts/",
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== "text/plain") cb(null, false);
  },
});

router.post("/pdf", uploadPdfs.single("pdf"), getPdfContentByAI);

router.post("/img", uploadImgs.single("img"), getImgContentByAI);

router.post("/txt", uploadTxt.single("txt"), getImgContentByAI);
export default router;
