import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import ToggleThemeButton from './ToggleThemeButton';

afterEach(cleanup);

jest.mock('./ThemeChangeWindow', () => {
    return function DummyThemeChangeWindow () {
        return (
            <div data-testid='window'>DummyThemeChangeWindow</div>
        )
    }
});

const show = jest.fn();

const ButtonTemlate = (
    <ToggleThemeButton 
        showThemeChangeBlock = {show} 
        isShown = {true}
    />);

describe('<ToggleThemeButton />', () => {
    it('should render correct content', () => {
        const { getByTestId } = render(ButtonTemlate);

        expect(getByTestId('change-theme-button')).toBeInTheDocument();
        expect(getByTestId('change-theme-button')).toHaveTextContent('Change Theme');
    });

    it('should show the window after clicking', () => {
        const { getByTestId } = render(ButtonTemlate);

        expect(show).not.toHaveBeenCalled();

        fireEvent.click(getByTestId('change-theme-button'));

        expect(show).toHaveBeenCalled();
        expect(show).toHaveBeenCalledTimes(1);
    })
});
