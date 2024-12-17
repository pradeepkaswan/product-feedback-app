import { adapter } from "@/adapter";
import { Lucia } from "lucia";

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    attributes: {
      secure: process.env.NODE_ENV === "production",
    },
  },
  getUserAttributes: (att) => {
    return { name: att.name, username: att.username, image: att.image };
  },
});

declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
    DatabaseUserAttributes: {
      name: string;
      username: string;
      image: string;
    };
  }
}
