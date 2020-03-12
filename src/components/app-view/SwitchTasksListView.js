import React, { useContext } from 'react';
import "./switcher.css";
import { ThemeContext } from "../app/App";

function SwitchTasksListView(props) {
    const theme = useContext(ThemeContext);
    const themeColor = theme.color;
    const themeBackgroundColor = theme.backgroundColor;
    const borderColor = "1px solid " + theme.borderColor;

    return (
        <div 
            className="switcher-container"
            data-testid='switcher'
            style = {{
                backgroundColor: themeBackgroundColor,
                border: borderColor,
            }}
        >
            <input 
                className = "switcher"
                id='switcher'
                type = "checkbox"  
                onChange = {props.changeListView} 
            />
            <label 
                className="text"
                htmlFor="switcher" 
                style = {{color: themeColor}}
            >
                Change View
            </label>
        </div>
    )
}

export default SwitchTasksListView;
