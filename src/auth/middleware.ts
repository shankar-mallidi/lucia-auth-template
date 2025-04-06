import { NextApiRequest, NextApiResponse } from "next";
import { auth } from "./lucia";

export const requireAuth = async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: Function
) => {
  try {
    const session = await auth.validateRequest(req);
    if (!session) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    next();
  } catch (error) {
    res.status(401).json({ error: "Unauthorized" });
  }
};
