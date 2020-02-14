import React from 'react';
import "./switcher.css";

function SwitchTasksListView(props) {
    return (
        <div className="switcher-container">
            <input type="checkbox" id="switcher" onChange = {props.changeListView} />
            <label htmlFor="switcher" className="text">
                {props.withSquares ? "With Squares" : "Without Squares"}
            </label>
        </div>
    )
}

export default SwitchTasksListView;
