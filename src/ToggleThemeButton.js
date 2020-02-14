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
                ? <ThemeChangeWindow 
                    chooseTheme = {props.chooseTheme} 
                    isSelected = {props.isSelected}
                    changeBackground = {props.changeBackground}
                    deleteBackgroundImage = {props.deleteBackgroundImage}
                    
                    image1 = {props.image1}
                    image2 = {props.image2}
                    image3 = {props.image3}
                    image4 = {props.image4}
                    image5 = {props.image5}
                    image6 = {props.image6}
                    />
                : null
        }
        </div>
    )
}

export default ToggleThemeButton
