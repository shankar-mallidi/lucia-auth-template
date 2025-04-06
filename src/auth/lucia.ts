import { lucia } from "lucia";
import { mongoose } from "@lucia-auth/adapter-mongoose";
import connectDB from "@/lib/db";

connectDB();

export const auth = lucia({
  env: process.env.NODE_ENV === "development" ? "DEV" : "PROD",
  adapter: mongoose({
    User: require("@/models/User"),
    Key: require("@/models/Key"),
    Session: require("@/models/Session"),
  }),
  sessionCookie: {
    expires: false,
  },
});

export type Auth = typeof auth;
