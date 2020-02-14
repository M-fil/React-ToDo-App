import React, { useContext } from 'react';
import "./checkbox.css";
import { ThemeContext } from "./App";

function Checkbox(props) {
    const theme = useContext(ThemeContext);
    const themeColor = theme.color;
    const borderColor = "1px solid " + theme.borderColor;

    return (
        <label className = "checkbox-container">
            <input 
                type = "checkbox" 
                className = "checkbox" 
                style = {{color: themeColor}}
                checked = {props.checked}
                onChange = {props.taskOnChangeHandler}
            />
            <span 
                className = "fake"
                style = {{border: borderColor}}
            >
            </span>
        </label>
    )
}

export default Checkbox;
