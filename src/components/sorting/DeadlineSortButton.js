import React, { useContext } from 'react';
import { ThemeContext } from "../app/App";
import "./sort-button.css";


function DeadlineSortButton(props) {
    const theme = useContext(ThemeContext);
    const themeColor = theme.color;
    const themeBackgroundColor = `${theme.backgroundColor}`;
    const borderColor = "1px solid " + theme.borderColor;

    return (
        <button 
            className="deadline-sort-button"
            data-testid = "sort" 
            type="button" 
            onClick = {props.sort}
            title = "deadline sort"
            style = {{
                backgroundColor: themeBackgroundColor,
                color: themeColor,
                border: borderColor,
                opacity: props.array.length > 1 ? 1 : 0.6,
                transform: props.isDescSort && props.array.length > 1 ? "rotate(180deg)" : "rotate(360deg)",
                position: props.position,
            }}
        >
            {props.array.length > 1 ? "↑" : "sort"}
        </button>
    )
}

export default DeadlineSortButton;
