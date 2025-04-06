import { NextApiRequest, NextApiResponse } from "next";
import { auth } from "@/auth/lucia";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { code } = req.query;
    const userInfo = await auth.getOAuthUserInfo("github", code as string);
    // Handle user creation or login logic here.
    res.status(200).json({ message: "OAuth successful", userInfo });
  } catch (error) {
    res.status(500).json({ error: "OAuth failed" });
  }
}
