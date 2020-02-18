import React, { useContext } from 'react';
import "./switcher.css";
import { ThemeContext } from "./App";

function SwitchTasksListView(props) {
    const theme = useContext(ThemeContext);
    const themeColor = theme.color;
    const themeBackgroundColor = theme.backgroundColor;
    const borderColor = "1px solid " + theme.borderColor;

    return (
        <div 
            className="switcher-container"
            style = {{
                backgroundColor: themeBackgroundColor,
                border: borderColor,
            }}
        >
            <input type="checkbox" id="switcher" onChange = {props.changeListView} />
            <label htmlFor="switcher" className="text" style = {{color: themeColor}}>
                Change View
            </label>
        </div>
    )
}

export default SwitchTasksListView;
