import React, { useContext } from 'react';
import { ThemeContext } from "../app/App";
import "./sort-button.css";

function DeadlineSortButton({ sort, array, isDescSort, position }) {
    const theme = useContext(ThemeContext);
    const themeColor = theme.color;
    const themeBackgroundColor = `${theme.backgroundColor}`;
    const borderColor = "1px solid " + theme.borderColor;

    return (
        <button 
            className="deadline-sort-button"
            data-testid = "sort" 
            type="button" 
            onClick = {sort}
            title = "deadline sort"
            style = {{
                backgroundColor: themeBackgroundColor,
                color: themeColor,
                border: borderColor,
                opacity: array.length > 1 ? 1 : 0.6,
                transform: isDescSort && array.length > 1 ? "rotate(180deg)" : "rotate(360deg)",
                position: position,
            }}
        >
            {array.length > 1 ? "↑" : "sort"}
        </button>
    )
}

export default DeadlineSortButton;
