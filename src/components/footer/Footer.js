import React from 'react';
import "./social-colors.css";
import "./footer.css";

import FontAwesome from 'react-fontawesome';

function Icon(props) {
    return (
        <div className="icon-box" >
            <a href={props.link} target="_blank" rel="noopener noreferrer" className={`fa-stack fa-2x color-${props.iconType}`}>
                <FontAwesome name="circle fa-stack-2x" />
                <FontAwesome name={`${props.name} fa-stack-1x fa-inverse`} />
            </a>
        </div>
    );
}

function Footer() {
    return (    
        <footer className="social-wrapper" data-testid='footer'>
            <div className = "social-wrapper-container">
                <Icon name='vk' link='https://vk.com/id327021520' iconType='vk' />
                <Icon name='telegram' link='https://t.me/Filan0vichMaxim' iconType='tg' />
                <Icon name='twitter' link='https://twitter.com/8Z64Su3u8Rfe7gf' iconType='twitter' />
                <Icon name='envelope' link='mailto:maxim_filanovich@mail.ru' iconType='mail' />
                <Icon name='github' link='https://github.com/M-fil' iconType='github' />
            </div>
        </footer>
    )
}

export default Footer;
