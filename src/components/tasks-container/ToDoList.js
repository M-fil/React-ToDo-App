import React from "react";

import "./to-do-list.css";

import SquaresContainer from './SquaresContainer';
import CommonListContainer from './CommonListContainer';

function ToDoList ({ withSquares, commonList }) {
    return (
        <div data-testid='todo-list'>
            {
                withSquares ? <SquaresContainer /> : <CommonListContainer commonList={commonList} />
            }
        </div>
    );
}

export default ToDoList;