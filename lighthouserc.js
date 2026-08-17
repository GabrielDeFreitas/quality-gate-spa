module.exports = {
	ci: {
		collect: {
			startServerCommand: "pnpm run preview",
			url: ["http://localhost:4173/"],
			numberOfRuns: 3,
		},
		upload: {
			target: "temporary-public-storage",
		},
	},
};
