import { eq } from "drizzle-orm"
import { feedbackRequests } from "../../db/schema"

export const feedbackRequestResolvers = {
	Query: {
		feedbackRequests: async (_, { status, sort, category }, { db }) => {
			let query = db.select().from(feedbackRequests)

			if (status) {
				query = query.where(eq(feedbackRequests.status, status))
			}

			if (category) {
				query = query.where(eq(feedbackRequests.category, category))
			}

			return await query
		},
		feedbackRequest: async (_, { id }, { db }) => {
			const results = await db
				.select()
				.from(feedbackRequests)
				.where(eq(feedbackRequests.id, id))
				.limit(1)
			return results[0]
		},
	},
	Mutation: {
		createFeedbackRequest: async (_, { input }, { db, user }) => {
			const [newFeedbackRequest] = await db
				.insert(feedbackRequests)
				.values({
					...input,
					userId: user.id,
				})
				.returning()
			return newFeedbackRequest
		},
		updateFeedbackRequest: async (_, { id, input }, { db }) => {
			const [updatedFeedbackRequest] = await db
				.update(feedbackRequests)
				.set(input)
				.where(eq(feedbackRequests.id, id))
				.returning()
			return updatedFeedbackRequest
		},
		deleteFeedbackRequest: async (_, { id }, { db }) => {
			const [deletedFeedbackRequest] = await db
				.delete(feedbackRequests)
				.where(eq(feedbackRequests.id, id))
				.returning()
			return deletedFeedbackRequest
		},
	},
}
