import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import LeftSideBlock from './LeftSideBlock';
import ToDoForm from './ToDoForm';

afterEach(cleanup);

jest.mock('./ToDoForm', () => {
    return function DummyToDoForm () {
        return (
            <div data-testid='fake-form'>
                fake form
            </div>
        );
    }
});

describe('<LeftSideBlock />', () => {
    it('it renders all elements in DOM', () => {
        const { getByTestId } = render(<LeftSideBlock><ToDoForm /></LeftSideBlock>);
        const content = getByTestId('left-side-block').querySelector('.close-button').firstChild;
        const closeButton = getByTestId('left-side-block').querySelector('.close-button');

        expect(getByTestId('left-side-block')).toBeInTheDocument();
        expect(closeButton.children.length).toBe(2);
        expect(content.textContent).toBe('Close');
    });

    it('it closes the form and changes the value of button', () => {
        const { getByTestId } = render(<LeftSideBlock><ToDoForm /></LeftSideBlock>);
        const closeButton = getByTestId('left-side-block').querySelector('.close-button');
        const content = getByTestId('left-side-block').querySelector('.close-button').firstChild;

        expect(content.textContent).toBe('Close');

        const close = jest.fn();
        closeButton.onclick = close;
        fireEvent.click(closeButton);
        expect(close).toHaveBeenCalledTimes(1);

        expect(content.textContent).toBe('Open');
    })
});