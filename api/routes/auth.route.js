// /api/auth/ is the base path for all the routes in the auth.route.js file.
import express from "express";
import authController from "../controllers/auth.controller.js";
const router = express.Router();
router.post("/signup", authController.signUp);

router.post("/signin", authController.signIn);

// According to RESTful principles, POST requests are often used for operations that have side effects, such as changing the state on the server.
router.post("/signout", authController.signOut);

export default router;
