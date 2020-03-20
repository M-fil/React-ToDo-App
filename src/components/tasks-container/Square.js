import React, { useContext } from 'react';

import "./square.css"

import { ThemeContext } from "../app/App";
import TaskItem from "../task/TaskItem";
import useDeadlineSort from "../sorting/useDeadlineSort";
import DeadlineSortButton from "../sorting/DeadlineSortButton";
import { connect } from 'react-redux';

function Square({ square, squareNumber }) {    
    const theme = useContext(ThemeContext);
    const themeColor = theme.color;
    const themeBackgroundColor = theme.backgroundColor;
    const borderColor = "1px solid " + theme.borderColor;

    const { sortSample, isDescSort, setIsDescSort } = useDeadlineSort();

    const sortByDeadline = () => {
        setIsDescSort(!isDescSort);
        sortSample(square, isDescSort);
    }

    return (
        <div 
            className='square'
            data-testid='square'
            style = {{
              backgroundColor: themeBackgroundColor,
              border: borderColor,
            }}
        >
            <DeadlineSortButton 
                array = {square} 
                sort = {sortByDeadline} 
                isDescSort = {isDescSort}
                position = "absolute"
            />

            <h3 style = {{color: themeColor}}> {squareNumber} </h3>
            <ul className = "list"> 
                {square.map((item) => {
                    return <TaskItem 
                                key = {item.id}
                                id = {item.id}
                                task = {item} 
                            />
                })} 
            </ul>
        </div>
    )
}

export default connect()(Square);
