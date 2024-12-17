import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { eq } from "drizzle-orm";

import { db } from "@/adapter";
import type { Context } from "@/context";
import { users } from "@/db/schemas/auth";
import { lucia } from "@/lucia";
import { loggedIn } from "@/middleware/loggedIn";
import { zValidator } from "@hono/zod-validator";
import postgres from "postgres";

import {
  loginSchema,
  signupSchema,
  type SuccessResponse,
} from "@/shared/types";

export const authRouter = new Hono<Context>()
  .post("/signup", zValidator("form", signupSchema), async (c) => {
    const { name, username, password, image } = c.req.valid("form");
    const passwordHash = await Bun.password.hash(password);
    const userId = crypto.randomUUID();

    try {
      await db.insert(users).values({
        id: userId,
        name,
        username,
        passwordHash,
        image,
      });

      const session = await lucia.createSession(userId, { username });
      const sessionCookie = lucia.createSessionCookie(session.id).serialize();

      c.header("Set-Cookie", sessionCookie, { append: true });

      return c.json<SuccessResponse>(
        {
          success: true,
          message: "User created",
        },
        201,
      );
    } catch (error) {
      if (error instanceof postgres.PostgresError && error.code === "23505") {
        throw new HTTPException(409, { message: "Username already taken" });
      }
      throw new HTTPException(500, { message: "Failed to create user" });
    }
  })
  .post("/login", zValidator("form", loginSchema), async (c) => {
    const { username, password } = c.req.valid("form");

    const [existingUser] = await db
      .select()
      .from(users)
      .where(eq(users.username, username))
      .limit(1);

    if (!existingUser) {
      throw new HTTPException(401, { message: "Incorrect username" });
    }

    const validPassword = await Bun.password.verify(
      password,
      existingUser.passwordHash,
    );

    if (!validPassword) {
      throw new HTTPException(401, { message: "Incorrect password" });
    }

    const session = await lucia.createSession(existingUser.id, { username });
    const sessionCookie = lucia.createSessionCookie(session.id).serialize();

    c.header("Set-Cookie", sessionCookie, { append: true });

    return c.json<SuccessResponse>(
      {
        success: true,
        message: "User logged in",
      },
      200,
    );
  })
  .get("/logout", async (c) => {
    const session = c.get("session");
    if (!session) {
      return c.redirect("/login");
    }

    await lucia.invalidateSession(session.id);
    c.header("Set-Cookie", lucia.createBlankSessionCookie().serialize());
    return c.redirect("/login");
  })
  .get("/profile", loggedIn, async (c) => {
    const user = c.get("user")!;
    return c.json<
      SuccessResponse<{ name: string; username: string; image: string }>
    >({
      success: true,
      message: "User fetched",
      data: { name: user.name, username: user.username, image: user.image },
    });
  });
