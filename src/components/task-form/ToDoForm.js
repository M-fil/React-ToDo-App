import React, { useContext, useReducer, useRef } from "react";

import { ThemeContext } from "../app/App";
import "./task-form.css";

// Redux
import { connect } from 'react-redux';
import { addTask, combineTasks } from '../../redux/tasks_types/tasksTypesActions';

const initialState = {
    text: '',
    deadline: '',
    importance: 'I - Urgent Task',
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'TEXT': return {
            ...state,
            text: action.payload,
        }

        case 'DEADLINE': return {
            ...state,
            deadline: action.payload,
        }

        case 'IMPORTANCE': return {
            ...state,
            importance: action.payload,
        }

        default: return state;
    }
}

function ToDoForm ({ addTask, combineTasks, withSquares }) {
    const textRef = useRef();
    const deadlineRef = useRef();

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

    const [state, dispatch] = useReducer(reducer, initialState);

    const addNewTask = (event) => {
        event.preventDefault();
        addTask(state.text, state.deadline, state.importance);

        textRef.current.value = '';
        deadlineRef.current.value = '';
        
        combineTasks();
    }

    return (
        <form 
            data-testid='todo-form'
            onSubmit = {addNewTask} 
            id = "create-task-form" 
        >
            <label className='label-container' style = {{color: themeColor}}>
                <span className='text'>Add Task:</span>
                <input 
                    className='field'
                    type = "text" 
                    name = "text"

                    ref = {textRef}
                    onChange = {(event) => dispatch({ type: 'TEXT', payload: event.target.value })}
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

                    ref = {deadlineRef}
                    onChange = {(event) => dispatch({ type: 'DEADLINE', payload: event.target.value })}
                    style = {{color: themeColor, borderBottom: borderColor}}
                    min = {setMinDate()}

                    required 
                    autoComplete = "off"
                />
            </label>

            {
                withSquares ? 
                    <>
                        <label className='label-container' style = {{color: themeColor}}>
                            <span className='text'>Add Task Importance:</span> 
                            <select 
                                className='field'
                                name = "importance"
            
                                onChange = {(event) => dispatch({ type: 'IMPORTANCE', payload: event.target.value })}
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
                title = {withSquares ? "After switching to the view with Blocks all tasks will be saved in one block" : null}

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

export default connect(null, { addTask, combineTasks })(ToDoForm);