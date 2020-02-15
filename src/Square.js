import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from "./App";
import TaskItem from "./TaskItem";

function Square(props) {    
    const theme = useContext(ThemeContext);
    const themeColor = theme.color;
    const themeBackgroundColor = `${theme.backgroundColor}`;
    const borderColor = "1px solid " + theme.borderColor;

    const [isDescSort, setIsDescSort] = useState(false);

    const sortSample = (array, isDesc) => {
        switch (isDesc) {
            case false : 
                array.sort((a, b) => {
                    return new Date(a.deadline.toLocaleString()) - new Date(b.deadline.toLocaleString());
                });
            break;

            case true : 
                array.sort((a, b) => {
                    return new Date(b.deadline.toLocaleString()) - new Date(a.deadline.toLocaleString());
                });
            break;

            default :
                array.sort((a, b) => {
                    return new Date(a.deadline.toLocaleString()) - new Date(b.deadline.toLocaleString());
                });
            break;
        }
    }
    
    const sortByDeadline = () => {
        setIsDescSort(!isDescSort);
        sortSample(props.square, isDescSort);
    }

    useEffect(() => {
        sortSample(props.square, isDescSort);
    }, [props.square, isDescSort])

    return (
        <div 
            className="square" 
            style = {{
                backgroundColor: themeBackgroundColor,
                border: borderColor,
            }}
        >
            <button 
                type="button" 
                className="deadline-sort-button" 
                onClick = {sortByDeadline}
                style = {{
                    backgroundColor: themeBackgroundColor,
                    color: themeColor,
                    border: borderColor,
                    transform: isDescSort === true ? "rotate(180deg)" : "rotate(360deg)", 
                }}
            >
                ↑
            </button>

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
