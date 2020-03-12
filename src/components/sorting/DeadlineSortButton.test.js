/* eslint-disable no-fallthrough */
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
    
        // eslint-disable-next-line default-case
        switch(true) {
            // eslint-disable-next-line no-lone-blocks
            case (array.length === 0 || array.length === 1): {
                expect(getByTestId('sort').style.transform).toBe('rotate(360deg)');
                expect(getByTestId('sort').style.opacity).toBe('0.6');
            }
            break;

            // eslint-disable-next-line no-lone-blocks
            case (array.length > 1): {
                expect(getByTestId('sort').style.transform).toBe('rotate(180deg)');
                expect(getByTestId('sort').style.opacity).toBe('1');
            } 
            break;
        }
        
        expect(getByTestId("sort")).toHaveTextContent(content);
    }
    
    it("Must have text 'sort' and corresponding styles for an emty array", () => {
        checkContentByArrayLength([], "sort");
    });
    
    it("Must have text 'sort' and corresponding styles for an array with single element", () => {
        checkContentByArrayLength([{ id: 1, deadline: '2020-04-04' }], "sort")
    });
    
    it("Must have text '↑' and corresponding styles for an array length greater than 1", () => {
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
        expect(getByTestId('sort').style.transform).toBe('rotate(180deg)');
    })    
});

