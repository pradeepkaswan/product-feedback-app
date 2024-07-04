import { drizzle } from "drizzle-orm/node-postgres"
import { migrate } from "drizzle-orm/node-postgres/migrator"
import { Pool } from "pg"

const pool = new Pool({
	host: "localhost",
	port: 5432,
	user: "postgres",
	password: "postgres",
	database: "product_feedback_app",
})

const db = drizzle(pool)

async function main() {
	console.log("Running migrations...")
	await migrate(db, { migrationsFolder: "./drizzle" })
	console.log("Migrations complete!")
	process.exit(0)
}

main().catch((err) => {
	console.error("Migration failed:", err)
	process.exit(1)
})
