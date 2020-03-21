import React, { useContext, useState } from 'react';
import "./switcher.css";
import { ThemeContext } from "../app/App";

// Redux
import { connect } from 'react-redux';
import { combineTasks } from '../../redux/tasks_types/tasksTypesActions';

function SwitchTasksListView({ combineTasks }) {
    const theme = useContext(ThemeContext);
    const themeColor = theme.color;
    const themeBackgroundColor = theme.backgroundColor;
    const borderColor = "1px solid " + theme.borderColor;

    return (
        <div 
            className="switcher-container"
            data-testid='switcher'
            style = {{
                backgroundColor: themeBackgroundColor,
                border: borderColor,
            }}
        >
            <input 
                className = "switcher"
                id='switcher'
                type = "checkbox"  
                onChange = {combineTasks} 
            />
            <label 
                className="text"
                htmlFor="switcher" 
                style = {{color: themeColor}}
            >
                Change View
            </label>
        </div>
    )
}

export default SwitchTasksListView;