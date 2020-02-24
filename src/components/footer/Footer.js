import React from 'react';
import "./social-colors.css";
import "./footer.css";

import FontAwesome from 'react-fontawesome';

function Footer() {
    return (    
        <footer 
            className="social-wrapper"
        >
            <div 
                className = "social-wrapper-container"
            >
                <div className="icon-box" >
                    <a href="https://vk.com/id327021520" target="_blank" rel="noopener noreferrer" className="fa-stack fa-2x color-vk">
                        <FontAwesome name="circle fa-stack-2x" />
                        <FontAwesome name="vk fa-stack-1x fa-inverse" />
                    </a>
                </div>

                <div className="icon-box">
                    <a href="https://t.me/Filan0vichMaxim" target="_blank" rel="noopener noreferrer" className="fa-stack fa-2x color-tg">
                        <FontAwesome name="circle fa-stack-2x" />
                        <FontAwesome name="telegram fa-stack-1x fa-inverse" />
                    </a>
                </div>

                <div className="icon-box">
                    <a href="https://twitter.com/8Z64Su3u8Rfe7gf" target="_blank" rel="noopener noreferrer" className="fa-stack fa-2x color-twitter">
                        <FontAwesome name="circle fa-stack-2x" />
                        <FontAwesome name="twitter fa-stack-1x fa-inverse" />
                    </a>
                </div>

                <div className="icon-box">
                    <a href="mailto:maxim_filanovich@mail.ru" target="_blank" rel="noopener noreferrer" className="fa-stack fa-2x color-mail">
                        <FontAwesome name="circle fa-stack-2x" />
                        <FontAwesome name="envelope fa-stack-1x fa-inverse" />
                    </a>
                </div>

                <div className="icon-box">
                    <a href="https://github.com/M-fil" target="_blank" rel="noopener noreferrer" className="fa-stack fa-2x color-github">
                        <FontAwesome name="circle fa-stack-2x" />
                        <FontAwesome name="github fa-stack-1x fa-inverse" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
