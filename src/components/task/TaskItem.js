import React, { useState, useContext, useRef } from 'react'
import Checkbox from "./Checkbox";
import { ThemeContext } from "../app/App";
import "./task-item.css";

import FontAwesome from 'react-fontawesome';

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
        setCheck(result.checked);
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
                    <FontAwesome 
                        className = "icon"
                        name="trash"
                        style = {{color: themeColor}} 
                    />
                </button>
            </div>
        
            <span 
                className = "deadline" 
                style = {{color: themeColor}}
            > 
                <FontAwesome 
                    className = "icon calendar"
                    name="calendar"
                    style = {{color: themeColor}}
                />
                 {item.deadline} 
            </span>
        </li>)
}

export default TaskItem;
