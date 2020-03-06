import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Checkbox from './Checkbox';
import { unmountComponentAtNode } from 'react-dom';

let container = null;

beforeEach(() => {
    container = document.createElement('div');
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
    cleanup();
});

describe('Checkbox', () => {
    const taskOnChangeHandler = jest.fn();
    const checkbox = (
        <Checkbox 
            checked={false}
            taskOnChangeHandler = {taskOnChangeHandler}
        />
    );

    it('it renders checkbox', () => {
        const { getByTestId } = render(checkbox, container)    
        expect(getByTestId('checkbox')).toBeInTheDocument();
    });

    it('it renders fake span for checkbox', () => {
        const { getByTestId } = render(checkbox, container)    
        const fake = getByTestId('fake');
        expect(fake).toBeInTheDocument();
    });

    it('events are called and work properly', () => {
        const { getByTestId } = render(checkbox, container);

        expect(taskOnChangeHandler).toHaveBeenCalledTimes(0);
        expect(getByTestId('checkbox').checked).toBeFalsy();

        fireEvent.change(getByTestId('checkbox'));
        fireEvent(
            getByTestId('checkbox'),
            new MouseEvent('click')
        );
    
        expect(getByTestId('checkbox').checked).toBeTruthy();

        for(let i = 0; i < 5; i++) {
            fireEvent(
                getByTestId('checkbox'),
                new MouseEvent('click')
            );
        }

        expect(getByTestId('checkbox').checked).toBeFalsy();
    });
});

