import { gql } from "@apollo/client"

export const GET_FEEDBACK_REQUESTS = gql`
	query GetFeedbackRequests(
		$status: Status
		$sort: SortOption
		$category: Category
	) {
		feedbackRequests(status: $status, sort: $sort, category: $category) {
			id
			title
			category
			upvotes
			status
			description
			comments {
				id
				content
				user {
					name
					username
					image
				}
				replies {
					id
					content
					user {
						name
						username
						image
					}
				}
			}
		}
	}
`

export const GET_FEEDBACK_REQUEST = gql`
	query GetFeedbackRequest($id: ID!) {
		feedbackRequest(id: $id) {
			id
			title
			category
			upvotes
			status
			description
			comments {
				id
				content
				user {
					name
					username
					image
				}
				replies {
					id
					content
					user {
						name
						username
						image
					}
				}
			}
		}
	}
`

export const GET_CURRENT_USER = gql`
	query GetCurrentUser {
		currentUser {
			id
			name
			username
			image
		}
	}
`
