import React, { useContext } from "react";
import Square from "./Square";
import TaskItem from "./TaskItem";
import { ThemeContext } from "./App";

function ToDoList (props) {
    const theme = useContext(ThemeContext);
    const themeColor = theme.color;
    const themeBackgroundColor = `${theme.backgroundColor}`;
    const borderColor = "1px solid " + theme.borderColor;

    return (
        <div>
            {
                props.withSquares ?
                    <div id="main">
                        <Square 
                            square = {props.square1} 
                            squareNumber = "I - Urgent" 
                            deleteTask = {props.deleteTask1}
                        />
                        <Square 
                            square = {props.square2} 
                            squareNumber = "II - Important"
                            deleteTask = {props.deleteTask2}
                        />
                        <Square 
                            square = {props.square3} 
                            squareNumber = "III - For Later"
                            deleteTask = {props.deleteTask3}
                        />
                        <Square 
                            square = {props.square4} 
                            squareNumber = "IV - Delegate to Another"
                            deleteTask = {props.deleteTask4}
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
                                                    item = {item} 
                                                    deleteTask = {props.deleteTask} 
                                                    array = {props.commonList}
                                                    isChecked = {item.checked}
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

export default ToDoList;