import React from 'react';
import "./theme-colors.css";

function ThemeChangeWindow(props) {
    return (
        <div className = "theme-change-window">
            <h3>Background Colors</h3>
            <ul className = "list">
                <li className = "list-item dark" name = "dark" onClick = {props.chooseTheme}></li>
                <li className = "list-item light" name = "light" onClick = {props.chooseTheme}></li>
                <li className = "list-item red" name = "red" onClick = {props.chooseTheme}></li>
                <li className = "list-item orange" name = "orange" onClick = {props.chooseTheme}></li>
                <li className = "list-item yellow" name = "yellow" onClick = {props.chooseTheme}></li>
                <li className = "list-item pink" name = "pink" onClick = {props.chooseTheme}></li>
                <li className = "list-item purple" name = "purple" onClick = {props.chooseTheme}></li>
                <li className = "list-item blue" name = "blue" onClick = {props.chooseTheme}></li>
                <li className = "list-item skyblue" name = "skyblue" onClick = {props.chooseTheme}></li>
                <li className = "list-item brown" name = "brown" onClick = {props.chooseTheme}></li>
            </ul>
        </div>
    )
}

export default ThemeChangeWindow;
