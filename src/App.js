import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import GlobalStyles from './globalStyles';
import ErrorComponent from './components/common/ErrorComponent';
import Home from './pages';

function App() {
	return (
		<ErrorBoundary
			FallbackComponent={ErrorComponent}
			onError={(error, errorInfo) => console.log({ error, errorInfo })}
			onReset={() => {
				// reset the state of your app
			}}
		>
			<GlobalStyles />
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</Router>
		</ErrorBoundary>
	);
}

export default App;
