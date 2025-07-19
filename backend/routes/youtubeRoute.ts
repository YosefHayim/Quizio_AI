import express from "express";
import { fetchCaptionsWithoutAuth } from "../controllers/youtubeController";

const router = express.Router();

router.get("/:videoId", fetchCaptionsWithoutAuth);

export default router;
