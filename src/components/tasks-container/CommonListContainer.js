import React, { useContext } from "react";
import "./to-do-list.css";
import TaskItem from "../task/TaskItem";
import { ThemeContext } from "../app/App";
import { connect } from 'react-redux';

function CommonListContainer ({ commonList }) {
    const theme = useContext(ThemeContext);
    const themeColor = theme.color;
    const themeBackgroundColor = `${theme.backgroundColor}`;
    const borderColor = "1px solid " + theme.borderColor;

    return (
        <div 
            className="common-tasks-list-container"
            style = {{
                backgroundColor: themeBackgroundColor,
                border: borderColor,
                textAlign: commonList.length === 0 ? "center" : "left",
            }}
        >
            {
                commonList.length === 0 
                ? 
                <span style = {{color: themeColor}}>
                    No any tasks.
                </span>
                :
                <ul>
                    {
                        commonList.map((item) => {
                            return (
                                <TaskItem 
                                    key = {item.id}
                                    id = {item.id}
                                    task = {item} 
                                />
                            )
                        })
                    }
                </ul>
            }   
        </div>
    );
}

export default CommonListContainer;