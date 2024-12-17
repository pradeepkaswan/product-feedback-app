import { Hono } from "hono";

import { db } from "@/adapter";
import type { Context } from "@/context";
import { feedbackRequests } from "@/db/schemas/feedbackRequests";
import { loggedIn } from "@/middleware/loggedIn";
import { zValidator } from "@hono/zod-validator";

import {
  createFeedbackRequestSchema,
  type SuccessResponse,
} from "@/shared/types";

export const feedbackRequestRouter = new Hono<Context>().post(
  "/",
  loggedIn,
  zValidator("form", createFeedbackRequestSchema),
  async (c) => {
    const { title, description, status, category } = c.req.valid("form");
    const user = c.get("user")!;
    const [feedbackRequest] = await db
      .insert(feedbackRequests)
      .values({
        title,
        category,
        status,
        description,
        userId: user.id,
      })
      .returning({ id: feedbackRequests.id });
    return c.json<SuccessResponse<{ feedbackRequestId: number }>>(
      {
        success: true,
        message: "Feedback request created",
        data: { feedbackRequestId: feedbackRequest.id },
      },
      201,
    );
  },
);
