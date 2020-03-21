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
                className = 'checkbox'
                data-testid='checkbox'
                type = "checkbox" 
                style = {{color: themeColor}}
                checked = {task.checked}
                onChange = {() => toggleTask(task.id, task.importance)}
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

const mapState = (state) => {
    const { payload } = toggleTask();
    console.log('PAYLOAD', payload)
    let findedTask = null;

    Object.values(state).forEach(tasks => {
        tasks.forEach(task => {
            if (task.id === payload.id) {
                console.log("FIND ->", task)
                findedTask = task;
                return;
            }
        })
    })

    return {
        isChecked: findedTask.checked
    }
}

export default connect(null, { toggleTask })(Checkbox);
