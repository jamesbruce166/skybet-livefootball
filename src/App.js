import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import GlobalStyles from './globalStyles';
import Home from './pages';

function App() {
	return (
		<>
			<GlobalStyles />
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
