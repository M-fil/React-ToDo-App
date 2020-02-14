import React from 'react';
import "./switcher.css";

function SwitchTasksListView() {
    return (
        <div className="switcher-container">
            <label htmlFor="switcher" className="text">Without Squares</label>
            <input type="checkbox" id="switcher" />
        </div>
    )
}

export default SwitchTasksListView;
