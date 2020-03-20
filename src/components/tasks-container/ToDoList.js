import React, { useContext } from "react";

import "./to-do-list.css";

import Square from "./Square";
import TaskItem from "../task/TaskItem";
import { ThemeContext } from "../app/App";

import { connect } from 'react-redux';

function ToDoList ({ tasks1, tasks2, tasks3, tasks4, withSquares, props }) {
    const theme = useContext(ThemeContext);
    const themeColor = theme.color;
    const themeBackgroundColor = `${theme.backgroundColor}`;
    const borderColor = "1px solid " + theme.borderColor;

    return (
        <div data-testid='todo-list'>
            {
                withSquares ?
                    <div id="main">
                        <Square 
                            square = {tasks1} 
                            squareNumber = "I - Urgent" 
                        />
                        <Square 
                            square = {tasks2} 
                            squareNumber = "II - Important"
                        />
                        <Square 
                            square = {tasks3} 
                            squareNumber = "III - For Later"
                        />
                        <Square 
                            square = {tasks4} 
                            squareNumber = "IV - Delegate to Another"
                        />
                    </div>
                : 
                <div 
                    className="common-tasks-list-container"
                    style = {{
                        backgroundColor: themeBackgroundColor,
                        border: borderColor,
                        textAlign: props.commonList.length === 0 ? "center" : "left",
                    }}
                >
                    {
                        props.commonList.length === 0 
                            ? 
                            <span style = {{color: themeColor}}>
                                No any tasks.
                            </span>
                            :
                            <ul>
                                {
                                    props.commonList.map((item) => {
                                        return <TaskItem 
                                                    key = {item.id}
                                                    id = {item.id}
                                                    task = {item} 
                                                />
                                    })
                                }
                            </ul>
                    }   
                </div>
            }
        </div>
    );
}

const mapState = (state) => {
    return {
        tasks1: state.tasks1,
        tasks2: state.tasks2,
        tasks3: state.tasks3,
        tasks4: state.tasks4,
    }
}

export default connect(mapState)(ToDoList);