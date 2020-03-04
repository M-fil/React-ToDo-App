import React, { useContext } from "react";

import { ThemeContext } from "../app/App";
import "./task-form.css";

function ToDoForm (props) {
    const theme = useContext(ThemeContext);

    const themeColor = theme.color;
    const themeBackgroundColor = theme.backgroundColor;
    const borderColor = "1px solid " + theme.borderColor;
    
    let setMinDate = () => {
        let now = new Date();
        let year = now.getFullYear();
        let month = String(now.getMonth()).length === 1 ? '0' + (now.getMonth() + 1) : now.getMonth() + 1;
        let date = String(now.getDate()).length === 1 ? '0' + now.getDate() : now.getDate();

        let result = `${year}-${month}-${date}`;

        return result;
    }

    return (
        <form 
            onSubmit = {props.addTask} 
            id = "create-task-form" 
        >
            <label className='label-container' style = {{color: themeColor}}>
                <span className='text'>Add Task:</span>
                <input 
                    className='field'
                    type = "text" 
                    name = "text"

                    ref = {props.textRef}
                    text = {props.text}
                    onChange = {props.TextHandleInput}
                    style = {{color: themeColor, borderBottom: borderColor}}

                    required 
                    autoComplete = "off"
                />
            </label>

            <label className='label-container' style = {{color: themeColor}}>
                <span className='text'>Add Deadline:</span>
                <input
                    className='field' 
                    type = "date" 
                    name = "deadline"

                    ref = {props.deadlineRef}
                    deadline = {props.deadline}
                    onChange = {props.deadlineHandleInput}
                    style = {{color: themeColor, borderBottom: borderColor}}
                    min = {setMinDate()}

                    required 
                    autoComplete = "off"
                />
            </label>

            {
                props.withSquares ? 
                    <>
                        <label className='label-container' style = {{color: themeColor}}>
                            <span className='text'>Add Task Importance:</span> 
                            <select 
                                className='field'
                                name = "importance"
            
                                importance = {props.importance}
                                onChange = {props.importanceHandleInput}
                                style = {{color: themeColor, borderBottom: borderColor}} 
                            >
                                <option value = "I - Urgent Task">I - Urgent</option>
                                <option value = "II - Important">II - Important</option>
                                <option value = "III - For Later">III - For Later</option>
                                <option value = "IV - Delegate to Another">IV - Delegate to Another</option>
                            </select>
                        </label>
                    </>
                : null
            }

            <button 
                type = "submit"
                className = "simple-button radius add-task-button" 
                title = {props.title}

                style = {{
                    border: borderColor,
                    backgroundColor: themeBackgroundColor,
                    color: themeColor,
                }}
            >
                Add Task
            </button>
        </form>
    );
}

export default ToDoForm;