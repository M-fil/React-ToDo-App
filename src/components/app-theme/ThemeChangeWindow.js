import React from 'react';
import "./theme-colors.css";

export function ColorItem ({ color, chooseTheme }) {   
    return (
        <li 
            className = {"list-item " + color} 
            data-color = {color}
            onClick = {chooseTheme}
        ></li>
    )
}

export function ImageItem ({ imagePath, changeBackground }) {
    return (
        <li className = "item">
            <img src = {imagePath} onClick = {changeBackground} alt = "" />
        </li>
    );
}

function ThemeChangeWindow({ chooseTheme, image1, image2, image3, image4, image5, image6, changeBackground, deleteBackgroundImage }) {
    return (
        <div className = "theme-change-window" data-testid='theme-change-window'>
            <h3>Background Colors</h3>
            <ul className = "list">
                <ColorItem color = "dark" chooseTheme = {chooseTheme} />
                <ColorItem color = "light" chooseTheme = {chooseTheme} />
                <ColorItem color = "red" chooseTheme = {chooseTheme} />
                <ColorItem color = "orange" chooseTheme = {chooseTheme} />
                <ColorItem color = "yellow" chooseTheme = {chooseTheme} />
                <ColorItem color = "purple" chooseTheme = {chooseTheme} />
                <ColorItem color = "pink" chooseTheme = {chooseTheme} />
                <ColorItem color = "blue" chooseTheme = {chooseTheme} />
                <ColorItem color = "skyblue" chooseTheme = {chooseTheme} />
                <ColorItem color = "brown" chooseTheme = {chooseTheme} />
            </ul>

            <h3>Download an image</h3>
            <ul className = "list-of-images">
                <ImageItem 
                    imagePath = {image1}
                    changeBackground = {changeBackground} 
                />
                <ImageItem 
                    imagePath = {image2}
                    changeBackground = {changeBackground} 
                />
                <ImageItem 
                    imagePath = {image3}
                    changeBackground = {changeBackground} 
                />
                <ImageItem 
                    imagePath = {image4}
                    changeBackground = {changeBackground} 
                />
                <ImageItem 
                    imagePath = {image5}
                    changeBackground = {changeBackground} 
                />
                <ImageItem 
                    imagePath = {image6}
                    changeBackground = {changeBackground} 
                />
            </ul>

            <button 
                className = "simple-button radius"
                type = "button"  
                onClick = {deleteBackgroundImage}
            >
                Delete Background Image
            </button>
        </div>
    )
}

export default ThemeChangeWindow;
