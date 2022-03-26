import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, cleanup } from '@testing-library/react';

import MarketTabs from './index';

afterEach(() => {
	cleanup();
});
