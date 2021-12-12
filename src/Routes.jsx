import { Route, Routes } from "react-router-dom"

import Camera from "./components/media/Camera"
import Gallery from "./components/media/Gallery"

function AppRoutes() {
	return (
		<Routes>
			<Route path="/" index element={<Camera />} />
			<Route path="/gallery" element={<Gallery/>} />
		</Routes>
	)
}

export default AppRoutes
