import React from "react";
import { ThemeProvider } from "styled-components";

import Routes from "./src/routes";
import { getTheme } from "./src/styles/theme";

export default function App() {
	return (
		<ThemeProvider theme={getTheme("light")}>
			<Routes />
		</ThemeProvider>
	);
}
