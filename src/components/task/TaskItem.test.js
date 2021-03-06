import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { unmountComponentAtNode  } from 'react-dom';
import '@testing-library/jest-dom';
import TaskItem from './TaskItem';

let container = null;

beforeEach(() => {
    container = document.createElement('div');
    document.body.append(container);
});

afterEach(() => {
    unmountComponentAtNode(container)
    container.remove();
    container = null; 
    cleanup();
});


jest.mock("./Checkbox", () => {
    return function DummyCheckbox(props) {
      return (
        <input 
            type='checkbox' 
            data-testid='checkbox' 
            checked={false} 
            onChange={jest.fn()} 
        />
      );
    };
});

const fakeItem = {
    id: 1,
    text: "task text",
    deadline: "2020-03-20",
    importance: "I - Urgent Task",
    checked: false,
}
const list = [ fakeItem ];

const deleteTask = jest.fn();

const taskItem = (
    <TaskItem 
        key = {fakeItem.id}
        id = {fakeItem.id}
        item = {fakeItem} 
        deleteTask = {deleteTask} 
        array = {list}
        isChecked = {false}
    />
);

describe('<TaskItem />', () => {
    it('it renders deadline in task container', () => {
        const { getByTestId } = render(taskItem, container);
        expect(getByTestId('deadline')).toBeInTheDocument();
        expect(getByTestId('deadline')).toHaveTextContent(fakeItem.deadline);
        expect(getByTestId('deadline').firstChild).toBeInTheDocument();
    });

    it('it renders text in task container', () => {
        const { getByTestId } = render(taskItem, container);
        expect(getByTestId('text')).toBeInTheDocument();
        expect(getByTestId('text')).toHaveTextContent(fakeItem.text);
    }); 

    it('it renders delete button in task container', () => {
        const { getByTestId } = render(taskItem, container);
        expect(getByTestId('delete-button')).toBeInTheDocument();
        expect(getByTestId('delete-button').firstChild).toBeInTheDocument();
    });

    it('it calles deletion of the task element', () => {
        const { getByTestId } = render(taskItem, container);
        const deleteElement = jest.fn();
        getByTestId('delete-button').onclick = deleteElement;
        fireEvent.click(getByTestId('delete-button'));

        expect(deleteElement).toHaveBeenCalledTimes(1);
    });

    it('change opacity after checking', () => {
        const { getByTestId } = render(taskItem, container);
        expect(getByTestId('checkbox').checked).toBeFalsy();
        expect(getByTestId('task').style.opacity).toBe('1')

        fireEvent(
            getByTestId('checkbox'),
            new MouseEvent('click')
        );
        fireEvent.change(getByTestId('checkbox'));

        expect(getByTestId('checkbox').checked).toBeTruthy();
    })
});