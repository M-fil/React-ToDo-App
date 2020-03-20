import React, { useContext } from 'react';

import "./checkbox.css";
import { ThemeContext } from "../app/App";

// Redux
import { connect } from 'react-redux';
import { toggleTask } from '../../redux/tasks_types/tasksTypesActions';

function Checkbox({ toggleTask, task }) {
    const theme = useContext(ThemeContext);
    const themeColor = theme.color;
    const borderColor = "1px solid " + theme.borderColor;

    return (
        <label className = "checkbox-container">
            <input 
                className = "checkbox" 
                data-testid='checkbox'
                type = "checkbox" 
                style = {{color: themeColor}}
                checked = {task.checked}
                onChange = {() => toggleTask(task.id)}
            />
            <span 
                className = "fake"
                data-testid='fake'
                style = {{border: borderColor}}
            >
            </span>
        </label>
    )
}

export default connect(null, { toggleTask })(Checkbox);
