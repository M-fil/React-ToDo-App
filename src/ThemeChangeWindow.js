import React from 'react';
import "./theme-colors.css";

function ThemeChangeWindow(props) {
    return (
        <div className = "theme-change-window">
            <h3>Background Colors</h3>
            <ul className = "list">
                <li className = "list-item dark" data-color = "dark" onClick = {props.chooseTheme}></li>
                <li className = "list-item light" data-color = "light" onClick = {props.chooseTheme}></li>
                <li className = "list-item red" data-color = "red" onClick = {props.chooseTheme}></li>
                <li className = "list-item orange" data-color = "orange" onClick = {props.chooseTheme}></li>
                <li className = "list-item yellow" data-color = "yellow" onClick = {props.chooseTheme}></li>
                <li className = "list-item pink" data-color = "pink" onClick = {props.chooseTheme}></li>
                <li className = "list-item purple" data-color = "purple" onClick = {props.chooseTheme}></li>
                <li className = "list-item blue" data-color = "blue" onClick = {props.chooseTheme}></li>
                <li className = "list-item skyblue" data-color = "skyblue" onClick = {props.chooseTheme}></li>
                <li className = "list-item brown" data-color = "brown" onClick = {props.chooseTheme}></li>
            </ul>
        </div>
    )
}

export default ThemeChangeWindow;
