import React from 'react';
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import DeadlineSortButton from './DeadlineSortButton';

afterEach(cleanup);

const tasks = [
    {
        id: 1,
        deadline: '2020-03-12'
    },
    {
        id: 1,
        deadline: '2020-05-12'
    },
    {
        id: 1,
        deadline: '2020-01-12'
    },
];

describe('<DeadlineSortButton />', () => {
    const checkContentByArrayLength = (array, content) => {
        const sort = jest.fn();
        const { getByTestId } = render(
            <DeadlineSortButton 
                array = {array}
                position = "absolute"
                sort = {sort}
                isDescSort = {true}
            />
        );
    
        expect(getByTestId("sort")).toHaveTextContent(content);
    }
    
    it("Must have text 'sort' for an emty array", () => {
        checkContentByArrayLength([], "sort")
    });
    
    it("Must have text 'sort' for an array with single element", () => {
        checkContentByArrayLength([{ id: 1, deadline: '2020-04-04' }], "sort")
    });
    
    it("Must have text '↑' for an array length greater than 1", () => {
        checkContentByArrayLength(tasks, "↑")
    });

    it('it calles array sorting after clicking on button', () => {
        const sort = jest.fn();
        const { getByTestId } = render(
            <DeadlineSortButton 
                array = {tasks}
                position = "absolute"
                sort = {sort}
                isDescSort = {true}
            />
        );

        getByTestId('sort').onclick = sort;
        fireEvent.click(getByTestId('sort'));

        expect(sort).toHaveBeenCalled();
    })    
});

