import { drizzle } from "drizzle-orm/node-postgres"
import { migrate } from "drizzle-orm/node-postgres/migrator"
import { Pool } from "pg"
import * as schema from "./db/schema"
import { config } from "./config"
import bcrypt from "bcrypt"

const pool = new Pool({
	host: config.database.host,
	port: config.database.port,
	user: config.database.user,
	password: config.database.password,
	database: config.database.name,
})

const db = drizzle(pool, { schema })

const seedData = {
	users: [
		{
			image:
				"https://utfs.io/f/a49c6d0c-16ee-4973-adb8-4aa834467d71-omdmeo.jpg",
			name: "Zena Kelley",
			username: "velvetround",
		},
		{
			image:
				"https://utfs.io/f/3cb12bc5-76dc-4fd3-bf64-12de4d88e8df-9gys22.jpg",
			name: "Suzanne Chang",
			username: "upbeat1811",
		},
		{
			image:
				"https://utfs.io/f/56e9ab1c-c804-4b90-8a11-5235b1ba65cc-avqa16.jpg",
			name: "Thomas Hood",
			username: "brawnybrave",
		},
		{
			image:
				"https://utfs.io/f/2c320568-9943-4309-a7e6-1e9f57fd9455-hxbbq7.jpg",
			name: "Elijah Moss",
			username: "hexagon.bestagon",
		},
		{
			image:
				"https://utfs.io/f/dae5f4a1-a4c1-4cbd-9370-4b5db643f834-htn13m.jpg",
			name: "James Skinner",
			username: "hummingbird1",
		},
		{
			image:
				"https://utfs.io/f/5ad4fb3b-1289-4457-8253-0cb4aa6885f1-omteei.jpg",
			name: "Anne Valentine",
			username: "annev1990",
		},
		{
			image:
				"https://utfs.io/f/462ac848-3cc1-47c2-b8a4-8b0a5bb7c022-omibru.jpg",
			name: "Ryan Welles",
			username: "voyager.344",
		},
		{
			image:
				"https://utfs.io/f/524cd92b-d588-4421-9c16-d3984ef26da4-h2yn3j.jpg",
			name: "George Partridge",
			username: "soccerviewer8",
		},
	],
	feedbackRequests: [
		{
			title: "Add tags for solutions",
			category: "ENHANCEMENT",
			upvotes: 112,
			status: "SUGGESTION",
			description: "Easier to search for solutions based on a specific stack.",
			comments: [
				{
					content:
						"Awesome idea! Trying to find framework-specific projects within the hubs can be tedious",
					user: {
						image:
							"https://utfs.io/f/3cb12bc5-76dc-4fd3-bf64-12de4d88e8df-9gys22.jpg",
						name: "Suzanne Chang",
						username: "upbeat1811",
					},
				},
				{
					content:
						"Please use fun, color-coded labels to easily identify them at a glance",
					user: {
						image:
							"https://utfs.io/f/56e9ab1c-c804-4b90-8a11-5235b1ba65cc-avqa16.jpg",
						name: "Thomas Hood",
						username: "brawnybrave",
					},
				},
			],
		},
		{
			title: "Add a dark theme option",
			category: "FEATURE",
			upvotes: 99,
			status: "SUGGESTION",
			description:
				"It would help people with light sensitivities and who prefer dark mode.",
			comments: [
				{
					content:
						"Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.",
					user: {
						image:
							"https://utfs.io/f/2c320568-9943-4309-a7e6-1e9f57fd9455-hxbbq7.jpg",
						name: "Elijah Moss",
						username: "hexagon.bestagon",
					},
				},
				{
					content:
						"Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result. It’s also quite a trend with modern apps and  apparently saves battery life.",
					user: {
						image:
							"https://utfs.io/f/dae5f4a1-a4c1-4cbd-9370-4b5db643f834-htn13m.jpg",
						name: "James Skinner",
						username: "hummingbird1",
					},
					replies: [
						{
							content:
								"While waiting for dark mode, there are browser extensions that will also do the job. Search for 'dark theme' followed by your browser. There might be a need to turn off the extension for sites with naturally black backgrounds though.",
							replyingTo: "hummingbird1",
							user: {
								image:
									"https://utfs.io/f/5ad4fb3b-1289-4457-8253-0cb4aa6885f1-omteei.jpg",
								name: "Anne Valentine",
								username: "annev1990",
							},
						},
						{
							content:
								"Good point! Using any kind of style extension is great and can be highly customizable, like the ability to change contrast and brightness. I'd prefer not to use one of such extensions, however, for security and privacy reasons.",
							replyingTo: "annev1990",
							user: {
								image:
									"https://utfs.io/f/462ac848-3cc1-47c2-b8a4-8b0a5bb7c022-omibru.jpg",
								name: "Ryan Welles",
								username: "voyager.344",
							},
						},
					],
				},
			],
		},
		{
			title: "Q&A within the challenge hubs",
			category: "FEATURE",
			upvotes: 65,
			status: "SUGGESTION",
			description: "Challenge-specific Q&A would make for easy reference.",
			comments: [
				{
					content:
						"Much easier to get answers from devs who can relate, since they've either finished the challenge themselves or are in the middle of it.",
					user: {
						image:
							"https://utfs.io/f/524cd92b-d588-4421-9c16-d3984ef26da4-h2yn3j.jpg",
						name: "George Partridge",
						username: "soccerviewer8",
					},
				},
			],
		},
		{
			title: "Add image/video upload to feedback",
			category: "ENHANCEMENT",
			upvotes: 51,
			status: "SUGGESTION",
			description: "Images and screencasts can enhance comments on solutions.",
			comments: [
				{
					content:
						"Right now, there is no ability to add images while giving feedback which isn't ideal because I have to use another app to show what I mean",
					user: {
						image: "./assets/user-images/image-javier.jpg",
						name: "Javier Pollard",
						username: "warlikeduke",
					},
				},
				{
					content:
						"Yes I'd like to see this as well. Sometimes I want to add a short video or gif to explain the site's behavior..",
					user: {
						image: "./assets/user-images/image-roxanne.jpg",
						name: "Roxanne Travis",
						username: "peppersprime32",
					},
				},
			],
		},
		{
			title: "Ability to follow others",
			category: "FEATURE",
			upvotes: 42,
			status: "SUGGESTION",
			description: "Stay updated on comments and solutions other people post.",
			comments: [
				{
					content:
						"I also want to be notified when devs I follow submit projects on FEM. Is in-app notification also in the pipeline?",
					user: {
						image: "./assets/user-images/image-victoria.jpg",
						name: "Victoria Mejia",
						username: "arlen_the_marlin",
					},
					replies: [
						{
							content:
								"Bumping this. It would be good to have a tab with a feed of people I follow so it's easy to see what challenges they’ve done lately. I learn a lot by reading good developers' code.",
							replyingTo: "arlen_the_marlin",
							user: {
								image:
									"https://utfs.io/f/a49c6d0c-16ee-4973-adb8-4aa834467d71-omdmeo.jpg",
								name: "Zena Kelley",
								username: "velvetround",
							},
						},
					],
				},
				{
					content:
						"I've been saving the profile URLs of a few people and I check what they’ve been doing from time to time. Being able to follow them solves that",
					user: {
						image: "./assets/user-images/image-jackson.jpg",
						name: "Jackson Barker",
						username: "countryspirit",
					},
				},
			],
		},
		{
			title: "Preview images not loading",
			category: "BUG",
			upvotes: 3,
			status: "SUGGESTION",
			description:
				"Challenge preview images are missing when you apply a filter.",
		},
		{
			title: "More comprehensive reports",
			category: "FEATURE",
			upvotes: 123,
			status: "PLANNED",
			description:
				"It would be great to see a more detailed breakdown of solutions.",
			comments: [
				{
					content:
						"This would be awesome! It would be so helpful to see an overview of my code in a way that makes it easy to spot where things could be improved.",
					user: {
						image: "./assets/user-images/image-victoria.jpg",
						name: "Victoria Mejia",
						username: "arlen_the_marlin",
					},
				},
				{
					content:
						"Yeah, this would be really good. I'd love to see deeper insights into my code!",
					user: {
						image: "./assets/user-images/image-jackson.jpg",
						name: "Jackson Barker",
						username: "countryspirit",
					},
				},
			],
		},
		{
			title: "Learning paths",
			category: "FEATURE",
			upvotes: 28,
			status: "PLANNED",
			description:
				"Sequenced projects for different goals to help people improve.",
			comments: [
				{
					content:
						"Having a path through the challenges that I could follow would be brilliant! Sometimes I'm not sure which challenge would be the best next step to take. So this would help me navigate through them!",
					user: {
						image:
							"https://utfs.io/f/524cd92b-d588-4421-9c16-d3984ef26da4-h2yn3j.jpg",
						name: "George Partridge",
						username: "soccerviewer8",
					},
				},
			],
		},
		{
			title: "One-click portfolio generation",
			category: "FEATURE",
			upvotes: 62,
			status: "IN_PROGRESS",
			description:
				"Add ability to create professional looking portfolio from profile.",
			comments: [
				{
					content:
						"I haven't built a portfolio site yet, so this would be really helpful. Might it also be possible to choose layout and colour themes?!",
					user: {
						image:
							"https://utfs.io/f/462ac848-3cc1-47c2-b8a4-8b0a5bb7c022-omibru.jpg",
						name: "Ryan Welles",
						username: "voyager.344",
					},
				},
			],
		},
		{
			title: "Bookmark challenges",
			category: "FEATURE",
			upvotes: 31,
			status: "IN_PROGRESS",
			description: "Be able to bookmark challenges to take later on.",
			comments: [
				{
					content:
						"This would be great! At the moment, I'm just starting challenges in order to save them. But this means the My Challenges section is overflowing with projects and is hard to manage. Being able to bookmark challenges would be really helpful.",
					user: {
						image:
							"https://utfs.io/f/3cb12bc5-76dc-4fd3-bf64-12de4d88e8df-9gys22.jpg",
						name: "Suzanne Chang",
						username: "upbeat1811",
					},
				},
			],
		},
		{
			title: "Animated solution screenshots",
			category: "BUG",
			upvotes: 9,
			status: "IN_PROGRESS",
			description:
				"Screenshots of solutions with animations don’t display correctly.",
		},
		{
			title: "Add micro-interactions",
			category: "ENHANCEMENT",
			upvotes: 71,
			status: "LIVE",
			description: "Small animations at specific points can add delight.",
			comments: [
				{
					content:
						"I'd love to see this! It always makes me so happy to see little details like these on websites.",
					user: {
						image: "./assets/user-images/image-victoria.jpg",
						name: "Victoria Mejia",
						username: "arlen_the_marlin",
					},
					replies: [
						{
							content:
								"Me too! I'd also love to see celebrations at specific points as well. It would help people take a moment to celebrate their achievements!",
							replyingTo: "arlen_the_marlin",
							user: {
								image:
									"https://utfs.io/f/3cb12bc5-76dc-4fd3-bf64-12de4d88e8df-9gys22.jpg",
								name: "Suzanne Chang",
								username: "upbeat1811",
							},
						},
					],
				},
			],
		},
	],
}

async function seed() {
	console.log("Seeding database...")

	const hashedPassword = await bcrypt.hash("password123", 10)
	const [user1] = await db
		.insert(schema.users)
		.values({
			image: seedData.users[0].image,
			name: seedData.users[0].name,
			username: seedData.users[0].username,
			password: hashedPassword,
		})
		.returning()

	console.log("Seeding complete!")
}

async function main() {
	console.log("Running migrations...")
	await migrate(db, { migrationsFolder: "./drizzle" })
	console.log("Migrations complete!")

	await seed()

	await pool.end()
}

main().catch((error) => {
	console.error("Error:", error)
	process.exit(1)
})
