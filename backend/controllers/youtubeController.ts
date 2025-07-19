import type { Request, Response } from "express";

import { google } from "googleapis";
import { oauth2Client } from "../config";
import { spawn } from "child_process";

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

export const fetchCaptionsWithoutAuth = async (req: Request, res: Response): Promise<any> => {
  const videoId = req.params.videoId;
  if (!videoId) {
    return res.status(400).json({ error: "Missing videoId parameter" });
  }

  try {
    const pythonProcess = spawn("python", ["./scraper.py", videoId]);

    let output = "";
    let errorOutput = "";

    pythonProcess.stdout.on("data", (data) => {
      output += data.toString();
    });

    pythonProcess.stderr.on("data", (data) => {
      errorOutput += data.toString();
    });

    pythonProcess.on("close", (code) => {
      if (code !== 0) {
        console.error(`Python error: ${errorOutput}`);
        return res.status(500).json({ error: "Python script failed", details: errorOutput });
      }

      try {
        const result = JSON.parse(output);
        return res.json(result);
      } catch (parseError) {
        return res.status(500).json({ error: "Invalid JSON from Python", raw: output });
      }
    });
  } catch (error: any) {
    console.error("Node error:", error.message);
    return res.status(500).json({ error: "Failed to execute Python script" });
  }
};
