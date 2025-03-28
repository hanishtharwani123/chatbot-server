// src/routes/instagramRoutes.ts
import express from "express";
import {
  connectInstagram,
  instagramCallback,
  getInstagramAccount,
  getInstagramPosts,
  saveCommentAutomation,
  getCommentAutomation,
  processWebhook,
} from "../controllers/instagramController";
import { config } from "../config";

const router = express.Router();

// Authentication routes
// @ts-ignore
router.get("/connect", connectInstagram);
// @ts-ignore
router.get("/callback", instagramCallback);

// Account and Post routes (pass userId as query parameter)
// @ts-ignore
router.get("/account", getInstagramAccount);
// @ts-ignore
router.get("/posts", getInstagramPosts);

// Automation routes (pass userId as query parameter)
// @ts-ignore
router.post("/automation", saveCommentAutomation);
// @ts-ignore
router.get("/automation", getCommentAutomation);

// Webhook endpoint
// @ts-ignore
router.get("/webhook", processWebhook);
// @ts-ignore
router.post("/webhook", processWebhook);

export default router;
