import React, { useContext }  from 'react'
import { ThemeContext } from "../app/App";
import ThemeChangeWindow from "./ThemeChangeWindow";

function ToggleThemeButton({ showThemeChangeBlock, isSelected, isShown, chooseTheme, image1, image2, image3, image4, image5, image6, changeBackground, deleteBackgroundImage }) {
    const theme = useContext(ThemeContext);
    const themeColor = theme.color;
    const themeBackgroundColor = theme.backgroundColor;
    const borderColor = "1px solid " + theme.borderColor;

    return (
        <div className = "change-theme-container">
            <button 
                className = "simple-button radius"
                data-testid='change-theme-button' 
                type = "button" 
                onClick = {showThemeChangeBlock}
                style = {{
                    backgroundColor: themeBackgroundColor,
                    color: themeColor,
                    border: borderColor,
                }}
            >
                Change Theme
            </button>

            {
                isShown 
                    ? <ThemeChangeWindow 
                        chooseTheme = {chooseTheme} 
                        isSelected = {isSelected}
                        changeBackground = {changeBackground}
                        deleteBackgroundImage = {deleteBackgroundImage}
                        
                        image1 = {image1}
                        image2 = {image2}
                        image3 = {image3}
                        image4 = {image4}
                        image5 = {image5}
                        image6 = {image6}
                        />
                    : null
            }
        </div>
    )
}

export default ToggleThemeButton;
