import React, { useContext }  from 'react'
import { ThemeContext } from "./App";

function ToggleThemeButton(props) {
    const theme = useContext(ThemeContext);
    const themeColor = theme.color;
    const themeBackgroundColor = theme.backgroundColor;

    return (
        <button 
            type = "button" 
            className = "simple-button radius" 
            onClick = {props.changeTheme}
            style = {{
                backgroundColor: themeBackgroundColor,
                color: themeColor,
                border: "1px solid " + themeColor,
            }}
        >
            {
                props.isDark ? "Light theme" : "Dark theme"
            }
        </button>
    )
}

export default ToggleThemeButton
