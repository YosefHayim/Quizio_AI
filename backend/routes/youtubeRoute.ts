// routes/youtube.ts
import express from 'express';
import getCaptionsByVideoID, {
  unAuthorizedCaptionsParserByVideoId,
} from '../controllers/youtubeController';

const router = express.Router();

router.get('/:videoId', unAuthorizedCaptionsParserByVideoId);

export default router;
