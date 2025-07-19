import { getAccessToken, getAuthUrl } from "../controllers/authController";

import express from "express";

const router = express.Router();

router.get("/v1/generate-url", getAuthUrl);
router.get("/v1/callback", getAccessToken);

export default router;
