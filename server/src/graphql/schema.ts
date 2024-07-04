import { gql } from "apollo-server-express"

export const typeDefs = gql`
	type Query {
		feedbackRequests(
			status: Status
			category: Category
			sort: SortOption
		): [FeedbackRequest!]!
		feedbackRequest(id: ID!): FeedbackRequest!
		me: User!
	}

	type Mutation {
		login(username: String!, password: String!): AuthPayload!
		createFeedbackRequest(input: CreateFeedbackInput!): Feedback!
		upvoteFeedbackRequest(feedbackId: ID!): Feedback!
		createComment(feedbackRequestId: ID!, input: CreateCommentInput!): Comment!
		deleteCcomment(commentId: ID!): Comment!
	}

	type User {
		id: ID!
		name: String!
		username: String!
		image: String!
	}

	type FeedbackRequest {
		id: ID!
		title: String!
		category: Category!
		upvotes: Int!
		status: Status!
		comments: [Comment!]
	}

	enum Category {
		UI
		UX
		ENHANCEMENT
		BUG
		FEATURE
	}

	enum Status {
		SUGGESTION
		PLANNED
		IN_PROGRESS
		LIVE
	}

	enum SortOption {
		MOST_UPVOTES
		LEAST_UPVOTES
		MOST_COMMENTS
		LEAST_COMMENTS
	}

	type Comment {
		id: ID!
		content: String!
		user: User!
		replies: [Reply!]!
	}

	type Reply {
		id: ID!
		content: String!
		replyingTo: String!
		user: User!
	}

	type AuthPayload {
		token: String!
		user: User!
	}

	input CreateFeedbackRequestInput {
		title: String!
		category: Category!
		description: String!
	}

	input UpdateFeedbackRequestInput {
		title: String
		category: Category
		status: Status
		description: String
	}

	input CreateCommentInput {
		content: String!
		feedbackRequestId: ID!
	}

	input CreateReplyInput {
		content: String!
		commentId: ID!
	}
`
