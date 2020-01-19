import React, { useContext } from 'react';
import "./checkbox.css";
import { ThemeContext } from "./App";

function Checkbox(props) {
    const theme = useContext(ThemeContext);
    const themeColor = theme.color;

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
                style = {{borderColor: themeColor}}
            >
            </span>
        </label>
    )
}

export default Checkbox;
