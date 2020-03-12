import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import SwitchTasksListView from "./SwitchTasksListView";

afterEach(cleanup);

const changeListView = jest.fn();
const switcherTemplate = (
    <SwitchTasksListView 
        changeListView = {changeListView} 
    />
);

describe('<SwitchTasksListView/>', () => {
    it('should render content properly', () => {
        const { getByTestId } = render(switcherTemplate);

        expect(getByTestId('switcher')).toBeInTheDocument();
        expect(getByTestId('switcher').children.length).toBe(2);
        expect(getByTestId('switcher').querySelector('label')).toHaveTextContent('Change View');
    });

    it('should be check or unchecked after clicking', () => {
        const { getByTestId } = render(switcherTemplate);

        expect(getByTestId('switcher').querySelector('input').checked).toBeFalsy();
        
        expect(changeListView).not.toHaveBeenCalled();
        fireEvent.click(getByTestId('switcher').querySelector('label'));
        expect(changeListView).toHaveBeenCalled();
        expect(changeListView).toHaveBeenCalledTimes(1);

        expect(getByTestId('switcher').querySelector('input').checked).toBeTruthy();

        for(let i = 0; i < 5; i++) {
            fireEvent.click(getByTestId('switcher').querySelector('input'));
        }
        
        expect(getByTestId('switcher').querySelector('input').checked).toBeFalsy();
    })
});
