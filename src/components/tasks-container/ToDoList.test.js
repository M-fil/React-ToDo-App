import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ToDoList from './ToDoList';

afterEach(cleanup);

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

const deleteTask = jest.fn();

const ToDoListTemplate = (withSquares, commonArr) => {
    return (<ToDoList 
            withSquares = {withSquares}
            commonList = {commonArr}
            deleteTask = {deleteTask}
            
            deleteTask1 = {deleteTask}
            deleteTask2 = {deleteTask}
            deleteTask3 = {deleteTask}
            deleteTask4 = {deleteTask}
            square1 = {fakeTaskArray}
            square2 = {fakeTaskArray}
            square3 = {fakeTaskArray}
            square4 = {fakeTaskArray}
        />
    );
}

const checkContentLength = (array) => {
    const { getByTestId } = render(ToDoListTemplate(false, array));
    const commonTasksContainer = getByTestId('todo-list').firstChild;

    // eslint-disable-next-line default-case
    switch(true) {
        // eslint-disable-next-line no-lone-blocks
        case (array.length === 0): {
            expect(commonTasksContainer.firstChild).toHaveTextContent('No any tasks.');
        }
        break;

        case (array.length > 0): {
            expect(commonTasksContainer.firstChild.children.length).toBe(fakeTaskArray.length);
        }
    }
    cleanup()
}

describe('<ToDoList/>', () => {
    it('content renders properly', () => {
        const { getByTestId } = render(ToDoListTemplate(true, fakeTaskArray));
        expect(getByTestId('todo-list')).toBeInTheDocument();
        expect(getByTestId('todo-list').firstChild.children.length).toBe(4);
    });

    it('should render the view without squares', () => {
        const { getByTestId } = render(ToDoListTemplate(false, fakeTaskArray));
        const commonTasksContainer = getByTestId('todo-list').firstChild;

        expect(getByTestId('todo-list').firstChild).toBeInTheDocument();
        expect(commonTasksContainer.className).toBe('common-tasks-list-container');
    });

    it('should render corresponding conten of the view without squares', () => {
        checkContentLength(fakeTaskArray);
        checkContentLength([]);
    });
});
