import { NextApiRequest, NextApiResponse } from "next";
import { auth } from "@/auth/lucia";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await auth.invalidateSession(req.cookies.sessionId);
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({ error: "Logout failed" });
  }
}
