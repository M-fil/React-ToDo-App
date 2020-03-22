import React, { useContext, useState } from 'react';

import "./square.css"

import { ThemeContext } from "../app/App";
import TaskItem from "../task/TaskItem";
import DeadlineSortButton from "../sorting/DeadlineSortButton";

import { connect } from 'react-redux';
import { sortTasks } from '../../redux/tasks_types/tasksTypesActions';

function Square({ square, squareNumber, sortTasks }) {    
    const theme = useContext(ThemeContext);
    const themeColor = theme.color;
    const themeBackgroundColor = theme.backgroundColor;
    const borderColor = "1px solid " + theme.borderColor;

    const [isDescSort, setIsDescSort] = useState(false);
  
    const sortByDeadline = () => {
      setIsDescSort(!isDescSort);
      sortTasks(isDescSort, squareNumber)
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

export default connect(null, { sortTasks })(Square);
