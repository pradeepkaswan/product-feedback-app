import { eq } from "drizzle-orm"
import { users } from "../../db/schema"
import { config } from "../../config"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const userResolvers = {
	Query: {
		me: async (_, __, { db, userId }) => {
			if (!userId) return null
			return db.select().from("users").where(eq(users.id, userId)).first()
		},
	},
	Mutation: {
		signup: async (_, { username, password, name, image }, { db }) => {
			const hashedPassword = await bcrypt.hash(password, 10)
			const [user] = await db
				.insert(users)
				.values({ username, password: hashedPassword, name, image })
				.returning()
			const token = jwt.sign({ userId: user.id }, config.auth.jwtSecret)
			return { token, user }
		},
		login: async (_, { username, password }, { db }) => {
			const user = await db
				.select()
				.from(users)
				.where(eq(users.username, username))
				.first()
			if (!user) {
				throw new Error("Invalid credentials")
			}
			const valid = await bcrypt.compare(password, user.password)
			if (!valid) {
				throw new Error("Invalid credentials")
			}
			const token = jwt.sign({ userId: user.id }, config.auth.jwtSecret)
			return { token, user }
		},
	},
}
