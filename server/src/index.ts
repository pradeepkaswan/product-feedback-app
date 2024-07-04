import express from "express"
import { ApolloServer } from "apollo-server-express"
import { drizzle } from "drizzle-orm/node-postgres"
import { Pool } from "pg"
import { typeDefs } from "./graphql/schema"
import { resolvers } from "./graphql/resolvers"
import * as schema from "./db/schema"
import { config } from "./config"

async function startServer() {
	const app = express()

	const pool = new Pool({
		host: config.database.host,
		port: config.database.port,
		user: config.database.user,
		password: config.database.password,
		database: config.database.name,
	})

	const db = drizzle(pool, { schema })

	const server = new ApolloServer({
		typeDefs,
		resolvers,
		context: ({ req }) => {
			const user = {
				id: "1",
				name: "Zena Kelley",
				username: "velvetround",
				image:
					"https://utfs.io/f/a49c6d0c-16ee-4973-adb8-4aa834467d71-omdmeo.jpg",
			}
			return { user }
		},
	})
	await server.start()
	server.applyMiddleware({ app: app as any })

	app.listen(config.server.port, () =>
		console.log(
			`Server is running on http://localhost:${config.server.port}${server.graphqlPath}`,
		),
	)
}

startServer().catch((error) => {
	console.log("Error starting the server:", error)
})
