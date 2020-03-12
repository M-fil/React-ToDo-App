import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Footer from './Footer';

afterEach(cleanup);

describe('<Footer />', () => {
    it('should render correct content', () => {
        const { getByTestId } = render(<Footer />);

        expect(getByTestId('footer')).toBeInTheDocument();
        expect(getByTestId('footer').firstChild.children.length).toBe(5);
    })
})
