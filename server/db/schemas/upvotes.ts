import { relations } from "drizzle-orm";
import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

import { users } from "./auth";
import { feedbackRequests } from "./feedbackRequests";

export const feedbackRequestUpvotes = pgTable("feedback_request_upvotes", {
  id: serial("id").primaryKey(),
  feedbackRequestId: integer("post_id").notNull(),
  userId: text("user_id").notNull(),

  createdAt: timestamp("created_at", {
    withTimezone: true,
  })
    .defaultNow()
    .notNull(),
});

export const feedbackRequestUpvotesRelations = relations(
  feedbackRequestUpvotes,
  ({ one }) => ({
    feedbackRequest: one(feedbackRequests, {
      fields: [feedbackRequestUpvotes.feedbackRequestId],
      references: [feedbackRequests.id],
      relationName: "feedbackRequestUpvotes",
    }),
    user: one(users, {
      fields: [feedbackRequestUpvotes.userId],
      references: [users.id],
      relationName: "user",
    }),
  }),
);
