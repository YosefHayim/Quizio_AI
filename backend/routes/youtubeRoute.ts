import getCaptionsByVideoID, { unAuthorizedCaptionsParserByVideoId } from "../controllers/youtubeController";

// routes/youtube.ts
import express from "express";

const router = express.Router();

router.get("/:videoId", unAuthorizedCaptionsParserByVideoId);

export default router;
