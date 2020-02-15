import React, { useContext } from 'react';
import "./switcher.css";
import { ThemeContext } from "./App";

function SwitchTasksListView(props) {
    const theme = useContext(ThemeContext);
    const themeColor = theme.color;

    return (
        <div className="switcher-container">
            <input type="checkbox" id="switcher" onChange = {props.changeListView} />
            <label htmlFor="switcher" className="text" style = {{color: themeColor}}>
                {props.withSquares ? "With Squares" : "Without Squares"}
            </label>
        </div>
    )
}

export default SwitchTasksListView;
