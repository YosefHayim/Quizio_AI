import type { Request, Response } from "express";

import axios from "axios";
import { google } from "googleapis";
import { oauth2Client } from "../config";

const getCaptionsByVideoID = async (req: Request, res: Response): Promise<void> => {
  try {
    const videoId = req.params.videoId;

    const service = google.youtube({
      version: "v3",
      auth: oauth2Client,
    });

    const result = await service.captions.list({
      videoId,
      part: ["snippet"],
    });
    console.log("Result: ", result);

    res.status(200).json(result.data);
  } catch (error) {
    console.error("getCaptionsByVideoID fn:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default getCaptionsByVideoID;

export const unAuthorizedCaptionsParserByVideoId = async (req: Request, res: Response): Promise<any> => {
  try {
    const videoId = req.params.videoId;
    if (!videoId) return res.status(400).json({ error: "Missing videoId parameter" });

    const videoHeadersR = await axios.get(`https://www.youtube.com/watch?v=${videoId}`);
    res.status(200).send(videoHeadersR.headers);
  } catch (error: any) {
    console.error("Error while fetching transcript:", error.message);
    return res.status(500).json({ error: "Failed to retrieve transcript" });
  }
};
