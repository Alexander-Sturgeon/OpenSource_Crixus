import { Router, Request, Response } from "express";

const router = Router();

router.post("/", (req: Request, res: Response) => {
    res.clearCookie("token", {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
    });
    res.status(200).json({ message: "Logged out successfully" });
});

export default router;
