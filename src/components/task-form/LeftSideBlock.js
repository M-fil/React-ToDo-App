import React, { useContext } from 'react';
import { ThemeContext } from "../app/App";

import FontAwesome from 'react-fontawesome';

function LeftSideBlock(props) {
    const theme = useContext(ThemeContext);
    const themeColor = theme.color;
    const themeBackgroundColor = theme.backgroundColor;
    const borderColor = "1px solid " + theme.borderColor;

    return (
        <div 
            id = "left-side" 
            style = {{
                backgroundColor: themeBackgroundColor,
                borderRight: borderColor,
                borderBottom: borderColor,
            }}          
        >
            <button 
                className = "close-button"
                type = "button"
                onClick = {props.showTaskForm}
                style = {{
                    backgroundColor: themeBackgroundColor,
                    color: themeColor,
                }}
            >
                { props.isFormShown 
                    ? <>
                        <span>Close</span>
                        <br />
                        <FontAwesome name = "sort-up" />
                      </>
                    : <>
                        <span>Open</span><br />
                        <FontAwesome name = "sort-down" />
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
