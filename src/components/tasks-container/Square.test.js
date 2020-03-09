import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Square from './Square';

afterEach(cleanup);

jest.mock('../sorting/DeadlineSortButton', () => {
    return function DummyDeadlineSortButton() {
        return (
            <button data-testid='dedline-sort'>
                Sort
            </button>
        ); 
    }
});



const deleteTask = jest.fn();

const fakeTaskArray = [
   {
    id: 1,
    text: "task text",
    deadline: "2020-03-20",
    importance: "I - Urgent Task",
    checked: false,
   },
   {
    id: 2,
    text: "task tex2",
    deadline: "2021-01-01",
    importance: "I - Urgent Task",
    checked: false,
   },
];

const squareTemplate = (
    <Square 
        square = { fakeTaskArray } 
        squareNumber = "I - Urgent" 
        deleteTask = {deleteTask}
    />
);

describe('<Square>', () => {
    it('content renders properly', () => {
        const { getByTestId } = render(squareTemplate);
        const list = getByTestId('square').querySelector('.list');
        const title = getByTestId('square').querySelector('h3');

        expect(getByTestId('square')).toBeInTheDocument();
        expect(getByTestId('square').children.length).toBe(3);
        expect(list.children.length).toBe(2);
        expect(title).toHaveTextContent('I - Urgent');
    });
})
