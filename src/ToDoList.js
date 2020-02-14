import React from "react";
import Square from "./Square";
import TaskItem from "./TaskItem";

function ToDoList (props) {

    return (
        <div>
            {
                props.withSquares ?
                    <div id="main">
                        <Square 
                            square = {props.square1} 
                            squareNumber = "I - Urgent Task" 
                            deleteTask = {props.deleteTask1} 
                        />
                        <Square 
                            square = {props.square2} 
                            squareNumber = "II - Important"
                            deleteTask = {props.deleteTask2} 
                        />
                        <Square 
                            square = {props.square3} 
                            squareNumber = "III - Unimportant Task"
                            deleteTask = {props.deleteTask3} 
                        />
                        <Square 
                            square = {props.square4} 
                            squareNumber = "IV - Useless Task"
                            deleteTask = {props.deleteTask4} 
                        />
                    </div>
                : 
                <div>
                    <ul>
                        {
                            props.commonList.map((item) => {
                                return <TaskItem 
                                            key = {item.id}
                                            item = {item} 
                                            deleteTask = {props.deleteTask} 
                                        />
                            })
                        }
                    </ul>
                </div>
            }
        </div>
    );
}

export default ToDoList;