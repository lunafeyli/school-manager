type ThemeTypes = typeof themeType;

export { ThemeTypes };

const themeLight = {
	colors: {
		primary: "#1f3bad",
		secondary: "#3352cc",
		lighterGray: "#f5f5f5",
		lightGray: "#aeb0b7",
		gray: "#787b87",
		darkGray: "#454854",
		white: "#f5f5f5",
		dark: "#22242a",
	},
};

const themeDark = {
	colors: {
		primary: "#758ef0",
		secondary: "#a8b6f0",
		lighterGray: "#22242a",
		lightGray: "#60626c",
		gray: "#93959f",
		darkGray: "#cacbce",
		white: "#22242a",
		dark: "#f2f2f3",
	},
};

const getTheme = (theme: "light" | "dark") =>
	theme === "light" ? themeLight : themeDark;

const themeType = getTheme("light");

export { getTheme };
