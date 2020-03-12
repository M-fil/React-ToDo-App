import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

describe('<App />', () => {
    it('should render content properly', () => {
        const { getByTestId } = render(<App />);

        expect(getByTestId('app')).toBeInTheDocument();
        expect(getByTestId('app').children.length).toBe(2);
        expect(getByTestId('app')).toContainElement(document.querySelector('.root-container'));
    });
})
