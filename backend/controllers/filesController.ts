import type { Request, Response } from "express";
import { ocrParseAiImage, ocrParseAiPdf } from "../api/ocr-parse-ai-file";

export const getPdfContentByAI = async (req: Request, res: Response): Promise<any> => {
  try {
    const file = req.file;
    if (!file)
      return res.status(404).json({
        status: "Failed",
        message: "Please provide file In order to retrieve file content.",
      });

    const fileContent = await ocrParseAiPdf(file);

    res.status(200).json({
      status: "success",
      message: "Successfully retrieved Pdf content.",
      fileContent,
    });
  } catch (error) {
    console.log("Error occurred while retrieving pdf content: ", error);
    res.status(500).json({
      status: "Failed",
      message: "Error occurred while retrieving pdf content.",
    });
  }
};

export const getImgContentByAI = async (req: Request, res: Response): Promise<any> => {
  try {
    const file = req.file;
    if (!file)
      return res.status(404).json({
        status: "Failed",
        message: "Please provide file In order to retrieve file content.",
      });

    const fileContent = await ocrParseAiImage(file);

    res.status(200).json({
      status: "success",
      message: "Successfully retrieved Image content.",
      fileContent,
    });
  } catch (error) {
    console.log("Error occurred while retrieving image content: ", error);
    res.status(500).json({
      status: "Failed",
      message: "Error occurred while retrieving image content.",
    });
  }
};
