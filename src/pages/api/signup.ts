import { NextApiRequest, NextApiResponse } from "next";
import { auth } from "@/auth/lucia";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { email, password } = req.body;
    const user = await auth.createUser({ email }, password);
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    res.status(500).json({ error: "Signup failed" });
  }
}
