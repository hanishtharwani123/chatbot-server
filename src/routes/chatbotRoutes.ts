import express from "express";
import {
  generateChatbot,
  saveChatbot,
  previewResponse,
  saveChatbotAutomation,
  getChatbotAutomation,
  getInstagramAccount,
  getChatbotInstagramPosts,
  processChatbotWebhook,
} from "../controllers/chatbotController";

const router = express.Router();
// @ts-ignore
router.post("/generate", generateChatbot);
// @ts-ignore
router.post("/preview-response", previewResponse);
// @ts-ignore
router.post("/automation", saveChatbotAutomation);
// @ts-ignore
router.get("/automation", getChatbotAutomation);
// @ts-ignore
router.get("/account", getInstagramAccount);
// @ts-ignore
router.get("/posts", getChatbotInstagramPosts);
// @ts-ignore
router.all("/webhook", processChatbotWebhook);
export default router;
