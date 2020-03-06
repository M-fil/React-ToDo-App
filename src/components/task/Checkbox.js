import React, { useContext } from 'react';

import "./checkbox.css";
import { ThemeContext } from "../app/App";

function Checkbox(props) {
    const theme = useContext(ThemeContext);
    const themeColor = theme.color;
    const borderColor = "1px solid " + theme.borderColor;

    return (
        <label className = "checkbox-container">
            <input 
                className = "checkbox" 
                data-testid='checkbox'
                type = "checkbox" 
                style = {{color: themeColor}}
                checked = {props.checked}
                onChange = {props.taskOnChangeHandler}
            />
            <span 
                className = "fake"
                data-testid='fake'
                style = {{border: borderColor}}
            >
            </span>
        </label>
    )
}

export default Checkbox;
