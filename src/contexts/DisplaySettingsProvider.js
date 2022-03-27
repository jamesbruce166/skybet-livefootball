import React, { useContext, useState } from 'react';

export const DisplaySettingsContext = React.createContext();

export function useDisplaySettings() {
	return useContext(DisplaySettingsContext);
}

export function DisplaySettingsProvider({ children }) {
	const displayOptions = {
		FRACTION: 'decimal',
		DECIMAL: 'fraction',
	};
	const [oddsDisplay, setOddsDisplay] = useState(displayOptions.DECIMAL);

	const value = {
		oddsDisplay,
		setOddsDisplay,
		displayOptions,
	};

	return (
		<DisplaySettingsContext.Provider value={value}>
			{children}
		</DisplaySettingsContext.Provider>
	);
}
