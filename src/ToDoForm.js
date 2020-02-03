import React, { useContext } from "react";
import { ThemeContext } from "./App";

function ToDoForm (props) {
    const date = new Date();
    const theme = useContext(ThemeContext);

    const themeColor = theme.color;
    const themeBackgroundColor = theme.backgroundColor;
    const borderColor = "1px solid " + theme.borderColor;
    
    return (
        <form 
            onSubmit = {props.addTask} 
            id = "create-task-form" 
        >
            <label htmlFor = "text" style = {{color: themeColor}}>Add Task: </label>
            <p>
                <input 
                    type = "text" 
                    name = "text"
                    placeholder = "Add task..."

                    ref = {props.textRef}
                    text = {props.text}
                    onChange = {props.TextHandleInput}
                    style = {{color: themeColor, borderBottom: borderColor}}

                    required 
                    autoComplete = "off"
                />
            </p>

            <label htmlFor = "deadline" style = {{color: themeColor}}>Add Deadline: </label>
            <p>
                <input 
                    type = "date" 
                    name = "deadline"
                    placeholder = "Add deadline..."

                    ref = {props.deadlineRef}
                    deadline = {props.deadline}
                    onChange = {props.deadlineHandleInput}
                    style = {{color: themeColor, borderBottom: borderColor}}
                    min = {date.getFullYear() + "-0" + (date.getMonth() + 1) + "-" + date.getDate()}

                    required 
                    autoComplete = "off"
                />
            </p>

            <label htmlFor = "importance" style = {{color: themeColor}}>Add Task Importance: </label>
            <p>
                <select 
                    name = "importance"

                    importance = {props.importance}
                    onChange = {props.importanceHandleInput}
                    style = {{color: themeColor, borderBottom: borderColor}} 
                >
                    <option value = "I - Urgent Task">I - Urgent Task</option>
                    <option value = "II - Important">II - Important</option>
                    <option value = "III - Unimportant Task">III - Unimportant Task</option>
                    <option value = "IV - Useless Task">IV - Useless Task</option>
                </select>
            </p>

            <button 
                type = "submit"
                className = "simple-button radius" 

                style = {{
                    border: "1px solid " +  themeColor,
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