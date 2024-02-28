import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import messageController from "../controllers/message.controller.js";
import catchAsync from "../utils/catchAsync.js";
const router = express.Router();

router.post(
  "/send/:id",
  protectRoute,
  catchAsync(messageController.sendMessage)
);

export default router;
