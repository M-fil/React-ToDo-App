import React, { useContext }  from 'react'
import { ThemeContext } from "./App";
import ThemeChangeWindow from "./ThemeChangeWindow";

function ToggleThemeButton(props) {
    const theme = useContext(ThemeContext);
    const themeColor = theme.color;
    const themeBackgroundColor = theme.backgroundColor;

    return (
        <div className = "change-theme-container">
        <button 
            type = "button" 
            className = "simple-button radius" 
            onClick = {props.showThemeChangeBlock}
            style = {{
                backgroundColor: themeBackgroundColor,
                color: themeColor,
                border: "1px solid " + themeColor,
            }}
        >
            Change Theme
        </button>

        {
            props.isShown 
                ? <ThemeChangeWindow chooseTheme = {props.chooseTheme} isSelected = {props.isSelected} />
                : null
        }
        </div>
    )
}

export default ToggleThemeButton
