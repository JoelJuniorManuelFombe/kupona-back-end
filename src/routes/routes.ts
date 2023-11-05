import express from "express";
import { newUser, getUserByEmail } from "../controllers/user";


export const router = express.Router();

// server front
router.get("/", (req, res) => {
    res.send("Server On");
    console.log("Server On");
});




router.post("/api/auth/signin", newUser)
router.post("/api/auth/login/", getUserByEmail)