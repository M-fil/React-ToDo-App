import React, { useContext } from 'react'
import Checkbox from "./Checkbox";
import { ThemeContext } from "../app/App";
import "./task-item.css";

import FontAwesome from 'react-fontawesome';

// Redux
import { connect } from 'react-redux';
import { deleteTask } from '../../redux/tasks_types/tasksTypesActions';

function TaskItem({ deleteTask, task }) {
    const theme = useContext(ThemeContext);
    const themeColor = theme.color;
    const borderColor = "1px solid " + theme.borderColor;

    /*const taskTextRef = useRef();
    const [check, setCheck] = useState(isChecked);

    const onHandleChecked = (event) => {
        event.stopPropagation();

        let id = event.target.closest("li").id;
        let result  = array.find(item => item.id === id);
        result.checked = !result.checked;
        setCheck(result.checked);
    }*/


    return (
        <li 
            className = "task-container"
            data-testid='task' 
            id = {task.id}
            data-imporatnce={task.importance}
            style = {{
                opacity: task.checked ? 0.5 : 1,
                borderBottom: borderColor,
            }}
        >
            <div className = "task-container-upper">   
                <Checkbox 
                    task = {task}
                />

                <span 
                    className = "task-text" 
                    data-testid='text'
                    style = {{
                        color: themeColor,
                        textDecoration: task.checked ? "line-through" : "none",
                    }}
                > 
                    {task.text}
                </span>

                <button 
                    className = "delete-button"
                    data-testid='delete-button'
                    style = {{border: themeColor}} 
                    onClick = {() => deleteTask(task.id, task.importance)}
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
                data-testid='deadline'
                style = {{color: themeColor}}
            > 
                <FontAwesome 
                    className = "icon calendar"
                    name="calendar"
                    style = {{color: themeColor}}
                />
                 {task.deadline} 
            </span>
        </li>)
}

export default connect(null, { deleteTask })(TaskItem);
