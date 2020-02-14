import React, { useState, useContext, useRef } from 'react'
import Checkbox from "./Checkbox";
import { ThemeContext } from "./App";
import "../src/icons/css/all.css"

function TaskItem({ item, deleteTask }) {
    const theme = useContext(ThemeContext);
    const themeColor = theme.color;
    const borderColor = "1px solid " + theme.borderColor;

    const [isChecked, setIsChecked] = useState(false);
    const taskTextRef = useRef();

    const taskOnChangeHandler = () => {
        setIsChecked(!isChecked);
    }

    return (
        <li 
            className = "task-container" 
            style = {{
                opacity: isChecked ? 0.5 : 1,
                borderBottom: borderColor,
            }}
        >
            <div className = "task-container-upper">   
                <Checkbox 
                    checked = {isChecked}
                    taskOnChangeHandler = {taskOnChangeHandler}
                />
                <span 
                    className = "task-text" 
                    ref = {taskTextRef}
                    style = {{
                        color: themeColor,
                        textDecoration: isChecked ? "line-through" : "none",
                    }}
                > 
                    {item.text}
                </span>
                <button 
                    className = "delete-button"
                    style = {{border: themeColor}} 
                    onClick = {() => deleteTask(item.id)}
                >
                    <i 
                        className = "fas fa-trash-alt"
                        style = {{color: themeColor}} 
                    ></i>
                </button>
            </div>
        
            <span 
                className = "deadline" 
                style = {{color: themeColor}}
            > 
                <i 
                    className="fas fa-calendar-check" 
                    style = {{color: themeColor}}
                >
                </i> {item.deadline} 
            </span>
        </li>)
}

export default TaskItem
