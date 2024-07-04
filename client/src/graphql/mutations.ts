import { gql } from "@apollo/client"

export const CREATE_FEEDBACK_REQUEST = gql`
	mutation CreateFeedbackRequest($input: CreateFeedbackRequestInput!) {
		createFeedbackRequest(input: $input) {
			id
			title
			category
			upvotes
			status
			description
		}
	}
`

export const UPDATE_FEEDBACK_REQUEST = gql`
	mutation UpdateFeedbackREQUEST(
		$id: ID!
		$input: UpdateFeedbackRequestInput!
	) {
		updateFeedbackRequest(id: $id, input: $input) {
			id
			title
			category
			upvotes
			status
			description
		}
	}
`

export const DELETE_FEEDBACK_REQUEST = gql`
	mutation DeleteFeedbackRequest($id: ID!) {
		deleteFeedbackRequest(id: $id)
	}
`

export const ADD_COMMENT = gql`
	mutation AddComment($feedbackRequestId: ID!, $content: String!) {
		addComment(feedbackRequestId: $feedbackRequestId, content: $content) {
			id
			content
			user {
				name
				username
				image
			}
		}
	}
`

export const ADD_REPLY = gql`
	mutation AddReply($commentId: ID!, $content: String!) {
		addReply(commentId: $commentId, content: $content) {
			id
			content
			user {
				name
				username
				image
			}
		}
	}
`

export const DELETE_COMMENT = gql`
	mutation DeleteComment($id: ID!) {
		deleteComment(id: $id)
	}
`

export const UPVOTE_FEEDBACK_REQUEST = gql`
	mutation UpvoteFeedbackRequest($id: ID!) {
		upvoteFeedbackRequest(id: $id) {
			id
			upvotes
		}
	}
`
