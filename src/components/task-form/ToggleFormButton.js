import React, { useContext } from 'react';
import FontAwesome from 'react-fontawesome';
import { ThemeContext } from "../app/App";

function ToggleFormButton({ showTaskForm, isFormShown }) {
    const theme = useContext(ThemeContext);
    const themeColor = theme.color;
    const themeBackgroundColor = theme.backgroundColor;
    
    return (
        <button 
            className = "close-button"
            type = "button"
            onClick = {showTaskForm}
            style = {{
                backgroundColor: themeBackgroundColor,
                color: themeColor,
            }}
        >
            { isFormShown 
                ? 
                <>
                    <span>Close</span>     
                    <FontAwesome name='sort-up' />
                </>
                : 
                <>
                    <span>Open</span>
                    <FontAwesome name='sort-down' />
                </>
            }
        </button>
    )
}

export default ToggleFormButton;
