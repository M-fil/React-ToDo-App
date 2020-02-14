import React, { useState, useEffect } from 'react';
import "./theme-colors.css";

function ColorItem (props) {   
    return (
        <li 
            className = {"list-item " + props.color} 
            data-color = {props.color}
            onClick = {props.chooseTheme}
        ></li>
    )
}

function ImageItem (props) {
    return (
        <li className = "item">
            <img src = {props.imagePath} onClick = {props.changeBackground} alt = "" />
        </li>
    );
}

function ThemeChangeWindow(props) {

    return (
        <div className = "theme-change-window">
            <h3>Background Colors</h3>
            <ul className = "list">
                <ColorItem color = "light" chooseTheme = {props.chooseTheme} />
                <ColorItem color = "dark" chooseTheme = {props.chooseTheme} />
                <ColorItem color = "red" chooseTheme = {props.chooseTheme} />
                <ColorItem color = "orange" chooseTheme = {props.chooseTheme} />
                <ColorItem color = "yellow" chooseTheme = {props.chooseTheme} />
                <ColorItem color = "pink" chooseTheme = {props.chooseTheme} />
                <ColorItem color = "purple" chooseTheme = {props.chooseTheme} />
                <ColorItem color = "blue" chooseTheme = {props.chooseTheme} />
                <ColorItem color = "skyblue" chooseTheme = {props.chooseTheme} />
                <ColorItem color = "brown" chooseTheme = {props.chooseTheme} />
            </ul>

            <h3>Download an image</h3>
            <ul className = "list-of-images">
                <ImageItem 
                    imagePath = {props.image1}
                    changeBackground = {props.changeBackground} 
                />
                <ImageItem 
                    imagePath = {props.image2}
                    changeBackground = {props.changeBackground} 
                />
                <ImageItem 
                    imagePath = {props.image3}
                    changeBackground = {props.changeBackground} 
                />
                <ImageItem 
                    imagePath = {props.image4}
                    changeBackground = {props.changeBackground} 
                />
                <ImageItem 
                    imagePath = {props.image5}
                    changeBackground = {props.changeBackground} 
                />
                <ImageItem 
                    imagePath = {props.image6}
                    changeBackground = {props.changeBackground} 
                />
            </ul>

            <button type = "button" className = "simple-button radius" onClick = {props.deleteBackgroundImage}>Delete Background Image</button>
        </div>
    )
}

export default ThemeChangeWindow;
