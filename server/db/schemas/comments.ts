import { relations } from "drizzle-orm";
import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

import { users } from "./auth";
import { feedbackRequests } from "./feedbackRequests";

export const comments = pgTable("comments", {
  id: serial("id").primaryKey(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id),
  feedbackRequestId: integer("feedback_request_id")
    .notNull()
    .references(() => feedbackRequests.id),
  parentCommentId: integer("parent_comment_id"),
  content: text("content").notNull(),
  depth: integer("depth").default(0).notNull(),
  commentCount: integer("comment_count").default(0).notNull(),

  createdAt: timestamp("created_at", {
    withTimezone: true,
  })
    .defaultNow()
    .notNull(),
});

export const commentsRelations = relations(comments, ({ one, many }) => ({
  author: one(users, {
    fields: [comments.userId],
    references: [users.id],
    relationName: "author",
  }),
  parentComment: one(comments, {
    fields: [comments.parentCommentId],
    references: [comments.id],
    relationName: "childComments",
  }),
  childComments: many(comments, {
    relationName: "childComments",
  }),
  feedbackRequest: one(feedbackRequests, {
    fields: [comments.feedbackRequestId],
    references: [feedbackRequests.id],
  }),
}));
