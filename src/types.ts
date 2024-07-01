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

export interface Feedback {
	id: number
	title: string
	category: "ui" | "ux" | "enhancement" | "bug" | "feature"
	upvotes: number
	status: "suggestion" | "planned" | "in-progress" | "live"
	description: string
	comments?: Comment[]
}

export interface ProductRequestsData {
	currentUser: User
	productRequests: Feedback[]
}
