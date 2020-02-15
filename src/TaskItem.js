import React, { useState, useContext, useRef } from 'react'
import Checkbox from "./Checkbox";
import { ThemeContext } from "./App";
import "../src/icons/css/all.css"

function TaskItem({ id, item, deleteTask, array, isChecked }) {
    const theme = useContext(ThemeContext);
    const themeColor = theme.color;
    const borderColor = "1px solid " + theme.borderColor;

    const taskTextRef = useRef();
    const [check, setCheck] = useState(isChecked);

    const onHandleChecked = (event) => {
        let id = event.target.closest("li").id;
        let result  = array.find(item => item.id === id);
        result.checked = !result.checked;
        setCheck(result.checked)
    }

    return (
        <li 
            className = "task-container" 
            id = {id}
            style = {{
                opacity: check ? 0.5 : 1,
                borderBottom: borderColor,
            }}
        >
            <div className = "task-container-upper">   
                <Checkbox 
                    checked = {check}
                    taskOnChangeHandler = {onHandleChecked}
                />
                <span 
                    className = "task-text" 
                    ref = {taskTextRef}
                    style = {{
                        color: themeColor,
                        textDecoration: check ? "line-through" : "none",
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

export default TaskItem;
