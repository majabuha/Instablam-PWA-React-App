import React from 'react';
import { BrowserRouter } from "react-router-dom"
import AppRoutes from './Routes'
import './App.css';

function App() {

	
	return (
		<div className="App">
			
			<h1> INSTABLAM </h1>

			<BrowserRouter>
				<AppRoutes />
			</BrowserRouter>
		</div>
	);
}

export default App;
