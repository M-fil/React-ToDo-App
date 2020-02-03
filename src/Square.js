import React, { useContext } from 'react';
import { ThemeContext } from "./App";
import TaskItem from "./TaskItem";


function Square(props) {    
    const theme = useContext(ThemeContext);
    const themeColor = theme.color;
    const themeBackgroundColor = theme.backgroundColor;

    return (
        <div className="square" style = {{backgroundColor: themeBackgroundColor}}>
            <h3 style = {{color: themeColor}}> {props.squareNumber} </h3>
            <ul className = "list"> 
                {props.square.map((item) => {
                    return <TaskItem 
                                key = {item.id}
                                item = {item} 
                                deleteTask = {props.deleteTask} 
                            />
                })} 
            </ul>
        </div>
    )
}

export default Square;
