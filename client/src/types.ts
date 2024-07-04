export interface User {
	image: string
	name: string
	username: string
}

export interface Reply {
	content: string
	replyingTo: string
	user: User
}

export interface Comment {
	id: number
	content: string
	user: User
	replies?: Reply[]
}

export type Category = "ui" | "ux" | "enhancement" | "bug" | "feature"

export type Status = "suggestion" | "planned" | "in-progress" | "live"

export interface Feedback {
	id: number
	title: string
	category: Category
	upvotes: number
	status: Status
	description: string
	comments?: Comment[]
}

export interface ProductRequestsData {
	currentUser: User
	productRequests: Feedback[]
}
