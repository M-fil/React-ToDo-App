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
    const [backgroundImage, setBackgroundImage] = useState("");

    const changeBackground = (event) => {
        setBackgroundImage(event.target.src);
    }

    const deleteBackgroundImage = () => {
        setBackgroundImage("");
    }

    useEffect(() => {
        document.body.style.backgroundImage = "url('" + backgroundImage + "')";
    }, [backgroundImage]);

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
                    imagePath = "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                    changeBackground = {changeBackground} 
                />
                <ImageItem 
                    imagePath = "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                    changeBackground = {changeBackground} 
                />
                <ImageItem 
                    imagePath = "https://img.tyt.by/n/10/a/ronaldo_schemidt_worldpressphoto_2018.jpg"
                    changeBackground = {changeBackground} 
                />
                <ImageItem 
                    imagePath = "https://images.pexels.com/photos/556667/pexels-photo-556667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    changeBackground = {changeBackground} 
                />
                <ImageItem 
                    imagePath = "https://storage.ws.pho.to/s2/BA338FD8-AD48-11E9-8DEA-026B9DE2F0AA_m.jpg"
                    changeBackground = {changeBackground} 
                />
                <ImageItem 
                    imagePath = "https://web.500px.com/static/media/editors_choice_1@3x.94990ffb.png"
                    changeBackground = {changeBackground} 
                />
                <ImageItem 
                    imagePath = "https://photolemur.com/uploads/blog/unnamed.jpg"
                    changeBackground = {changeBackground} 
                />
                <ImageItem 
                    imagePath = "https://images.unsplash.com/photo-1534156596102-14b7759a57f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                    changeBackground = {changeBackground} 
                />
            </ul>

            <button type = "button" className = "simple-button radius" onClick = {deleteBackgroundImage}>Delete Background Image</button>
        </div>
    )
}

export default ThemeChangeWindow;
