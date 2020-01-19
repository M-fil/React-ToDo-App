import React, { useContext } from 'react';
import { ThemeContext } from "./App";

function LeftSideBlock(props) {
    const theme = useContext(ThemeContext);
    const themeColor = theme.color;
    const themeBackgroundColor = theme.backgroundColor;

    return (
        <div 
            id = "left-side" 
            style = {{
                backgroundColor: themeBackgroundColor,
            }}          
        >
            <button 
                type = "button"
                className = "close-button"
                onClick = {props.showTaskForm}
                style = {{
                    backgroundColor: themeBackgroundColor,
                    color: themeColor,
                    borderBottom: themeColor,
                }}
            >
                { props.isFormShown 
                    ? <>
                        <span>Close</span>
                        <br />
                        <i className = "fas fa-sort-up"></i>
                      </>
                    : <>
                        <span>Open</span><br />
                        <i className = "fas fa-sort-down"></i>
                      </>
                }
            </button>

            <h2 
                id = "todo-title"
                style = {{color: themeColor}}
            >
                ToDo App
            </h2>

            {props.children}
        </div>
    )
}

export default LeftSideBlock;
