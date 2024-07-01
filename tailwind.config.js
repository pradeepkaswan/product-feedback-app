/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		// container: {
		// 	center: true,
		// 	padding: "2rem",
		// 	screens: {

		// 		"2xl": "1400px",
		// 	},
		// },
		fontFamily: {
			sans: ["Jost", "sans-serif"],
		},
		fontSize: {
			"heading-1": [
				"24px",
				{ lineHeight: "35px", letterSpacing: "-0.33px", fontWeight: "700" },
			],
			"heading-2": [
				"20px",
				{ lineHeight: "29px", letterSpacing: "-0.25px", fontWeight: "700" },
			],
			"heading-3": [
				"18px",
				{ lineHeight: "26px", letterSpacing: "-0.25px", fontWeight: "700" },
			],
			"heading-4": [
				"14px",
				{ lineHeight: "20px", letterSpacing: "-0.2px", fontWeight: "700" },
			],
			"body-1": ["16px", { lineHeight: "23px", fontWeight: "400" }],
			"body-2": ["15px", { lineHeight: "22px", fontWeight: "400" }],
			"body-3": ["13px", { lineHeight: "19px", fontWeight: "600" }],
		},
		extend: {
			colors: {
				product: {
					100: "#FFFFFF",
					200: "#F7F8FD",
					300: "#F2F4FE",
					400: "#647196",
					500: "#3A4374",
					800: "#4661E6",
					900: "#AD1FEA",
				},
			},
		},
	},
	plugins: [],
}
