import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ToDoForm from './ToDoForm';

afterEach(cleanup);

const currentTask = {
    id: 1,
    text: "text",
    deadline: "2020-03-06",
    importance: "I - Urgent Task",
    checked: false,
}

const addTask = jest.fn();
const onChangeHandler = jest.fn();

describe(',ToDoForm />', () => {
    const toDoForm = (
        <ToDoForm 
            withSquares = {true}

            text = {currentTask.text}
            deadline = {currentTask.deadline}
            importance = {currentTask.importance}
            addTask = {addTask}
            TextHandleInput = {onChangeHandler}
            deadlineHandleInput = {onChangeHandler}
            importanceHandleInput = {onChangeHandler}
            textRef = {null}
            deadlineRef = {null}
        /> 
    )

    it('it must render form content', () => {
        const { getByTestId } = render(toDoForm);

        const elems = getByTestId('todo-form').querySelectorAll('.label-container');
        for (const elem of elems) {
            expect(elem).toBeInTheDocument();
            expect(elem.children.length).toBe(2);

        }

        const textElement = getByTestId('todo-form').querySelector('[name=text]');
        expect(textElement.value).toBe('');
        fireEvent.change(textElement, { target: { value: 'text' } });
        expect(textElement.value).toBe(currentTask.text);

        const deadlineElement = getByTestId('todo-form').querySelector('[name=deadline]');
        expect(deadlineElement.value).toBe('');
        fireEvent.change(deadlineElement, { target: { value: '2020-03-06' } });
        expect(deadlineElement.value).toBe(currentTask.deadline);

        const importanceElement = getByTestId('todo-form').querySelector('[name=importance]');
        expect(importanceElement.value).not.toBe('');
        fireEvent.change(importanceElement, { target: { value: 'I - Urgent Task' } });
        expect(importanceElement.value).toBe(currentTask.importance);

        const buttonSubmitElement = getByTestId('todo-form').querySelector('[type=submit]');
        expect(buttonSubmitElement.textContent).toBe('Add Task');
        expect(buttonSubmitElement.title).toBe('After switching to the view with Blocks all tasks will be saved in one block');
    });

    it('it changes inputs\' values', () => {
        const { getByTestId } = render(toDoForm);
        const textElement = getByTestId('todo-form').querySelector('[name=text]');
        const deadlineElement = getByTestId('todo-form').querySelector('[name=deadline]');
        const importanceElement = getByTestId('todo-form').querySelector('[name=importance]');

        const changeEvent = jest.fn();
        textElement.onchange = changeEvent;
        deadlineElement.onchange = changeEvent;
        importanceElement.onchange = changeEvent;

        fireEvent.change(textElement);
        fireEvent.change(deadlineElement);
        fireEvent.change(importanceElement);

        expect(changeEvent).toHaveBeenCalled();
        expect(changeEvent).toHaveBeenCalledTimes(3);
    })

    it('it calls the submit event on form', () => {
        const { getByTestId } = render(toDoForm);

        const submit = jest.fn();
        getByTestId('todo-form').onsubmit = submit;
        fireEvent.submit(getByTestId('todo-form'));
        expect(submit).toHaveBeenCalled();
    });
})