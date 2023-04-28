/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				"sm-max": { max: "450px" },
			},
			height: {
				90: "90%",
			},
			fontFamily: {
				m: "Roboto Mono, monospace",
				"poppins-400": "Poppins, sans-serif",
				"poppins-300": "Monoton, cursive",
			},
			colors: {
				pGreen: "#35F160",
			},
		},
	},
	plugins: [],
};
