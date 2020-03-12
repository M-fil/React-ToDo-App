import React, { useContext } from 'react';

import "./square.css"

import { ThemeContext } from "../app/App";
import TaskItem from "../task/TaskItem";
import useDeadlineSort from "../sorting/useDeadlineSort";
import DeadlineSortButton from "../sorting/DeadlineSortButton";

function Square(props) {    
    const theme = useContext(ThemeContext);
    const themeColor = theme.color;
    const themeBackgroundColor = theme.backgroundColor;
    const borderColor = "1px solid " + theme.borderColor;

    const { sortSample, isDescSort, setIsDescSort } = useDeadlineSort();

    const sortByDeadline = () => {
        setIsDescSort(!isDescSort);
        sortSample(props.square, isDescSort);
    }

    return (
        <div 
            className="square" 
            data-testid='square'
            style = {{
              backgroundColor: themeBackgroundColor,
              border: borderColor,
            }}
        >
            <DeadlineSortButton 
                array = {props.square} 
                sort = {sortByDeadline} 
                isDescSort = {isDescSort}
                position = "absolute"
            />

            <h3 style = {{color: themeColor}}> {props.squareNumber} </h3>
            <ul className = "list"> 
                {props.square.map((item) => {
                    return <TaskItem 
                                key = {item.id}
                                id = {item.id}
                                item = {item} 
                                deleteTask = {props.deleteTask}
                                array = {props.square}
                                isChecked = {item.checked}
                            />
                })} 
            </ul>
        </div>
    )
}

export default Square;
