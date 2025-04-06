import { NextApiRequest, NextApiResponse } from "next";
import { auth } from "@/auth/lucia";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const url = auth.getOAuthUrl("github");
  res.redirect(url);
}
