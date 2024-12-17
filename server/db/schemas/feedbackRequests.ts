import { relations } from "drizzle-orm";
import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

import { users } from "@/db/schemas/auth";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

import { comments } from "./comments";
import { feedbackRequestUpvotes } from "./upvotes";

// export const categoryEnum = pgEnum("category", [
//   "feature",
//   "ui",
//   "ux",
//   "enhancement",
//   "bug",
// ]);

// export const statusEnum = pgEnum("status", [
//   "suggestion",
//   "planned",
//   "in-progress",
//   "live",
// ]);

export const feedbackRequests = pgTable("feedback_requests", {
  id: serial("id").primaryKey(),
  userId: uuid("user_id").references(() => users.id),
  title: text("title").notNull(),
  category: text("category").notNull(),
  upvotes: integer("upvotes").default(0).notNull(),
  status: text("status").notNull(),
  description: text("description").notNull(),
  commentCount: integer("comment_count").default(0).notNull(),

  createdAt: timestamp("created_at", {
    withTimezone: true,
  })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", {
    withTimezone: true,
  })
    .defaultNow()
    .notNull(),
});

export const insertFeedbackRequestSchema = createInsertSchema(
  feedbackRequests,
  {
    title: z
      .string()
      .min(3, { message: "Title must be at least 3 characters" }),
    description: z
      .string()
      .min(3, { message: "Description must be at least 3 characters" }),
  },
);

export const feedbackRequestsRelations = relations(
  feedbackRequests,
  ({ one, many }) => ({
    author: one(users, {
      fields: [feedbackRequests.userId],
      references: [users.id],
      relationName: "author",
    }),
    feedbackRequestUpvotes: many(feedbackRequestUpvotes, {
      relationName: "feedbackRequestUpvotes",
    }),
    comments: many(comments),
  }),
);
