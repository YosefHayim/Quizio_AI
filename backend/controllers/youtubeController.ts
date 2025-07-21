import type { Request, Response } from "express";

import { spawn } from "child_process";

export const fetchCaptionsWithoutAuth = async (req: Request, res: Response): Promise<any> => {
  const videoId = req.params.videoId;
  if (!videoId) {
    return res.status(400).json({ error: "Missing videoId parameter" });
  }

  try {
    const pythonProcess = spawn(
      "/Library/Frameworks/Python.framework/Versions/3.13/bin/python3",
      ["./scraper.py", videoId]
    );
    
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
