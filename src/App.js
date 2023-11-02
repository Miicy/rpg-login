import "./App.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { themeCreation } from "./theme/themeDesign";
import Home from "./pages/Home";

function App() {
	const [theme] = useState(themeCreation());

	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
				{/* <LoadingModal />
				<NotificationContainer /> */}
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
