import { pgEnum, pgTable, serial, text, integer } from "drizzle-orm/pg-core"

export const categoryEnum = pgEnum("category", [
	"UI",
	"UX",
	"ENHANCEMENT",
	"BUG",
	"FEATURE",
])

export const statusEnum = pgEnum("status", [
	"SUGGESTION",
	"PLANNED",
	"IN_PROGRESS",
	"LIVE",
])

export const users = pgTable("users", {
	id: serial("id").primaryKey(),
	name: text("name").notNull(),
	username: text("username").notNull().unique(),
	password: text("password").notNull(),
	image: text("image"),
})

export const feedbackRequests = pgTable("feedback_requests", {
	id: serial("id").primaryKey(),
	title: text("title").notNull(),
	description: text("description").notNull(),
	category: categoryEnum("category").notNull(),
	upvotes: integer("upvotes").notNull().default(0),
	status: statusEnum("status").notNull().default("SUGGESTION"),
	userId: integer("user_id").references(() => users.id),
})

export const comments = pgTable("comments", {
	id: serial("id").primaryKey(),
	content: text("content").notNull(),
	userId: integer("user_id").references(() => users.id),
	feedbackRequestId: integer("feedback_request_id").references(
		() => feedbackRequests.id,
	),
})

export const replies = pgTable("replies", {
	id: serial("id").primaryKey(),
	content: text("content").notNull(),
	userId: integer("user_id").references(() => users.id),
	commentId: integer("comment_id").references(() => comments.id),
})
