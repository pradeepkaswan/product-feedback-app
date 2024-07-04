import dotenv from "dotenv"

dotenv.config()

export const config = {
	server: {
		port: process.env.PORT || 4000,
	},
	database: {
		host: process.env.DB_HOST || "localhost",
		port: parseInt(process.env.DB_PORT || "5432", 10),
		user: process.env.DB_USER || "postgres",
		password: process.env.DB_PASSWORD || "postgres",
		name: process.env.DB_NAME || "product_feedback_app",
	},
	auth: {
		jwtSecret: process.env.JWT_SECRET || "secret",
	},
	uploadthing: {
		apiKey: process.env.UPLOADTHING_SECRET || "",
		appId: process.env.UPLOADTHING_APP_ID || "",
	},
}
