import React from 'react';
import "./social-colors.css";
import "./social.css";

function Footer() {
    return (    
        <footer className="social-wrapper">
            <div className="icon-box">
                <a href="https://vk.com/id327021520" target="_blank" rel="noopener noreferrer" className="fa-stack fa-2x color-vk">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fab fa-vk fa-stack-1x fa-inverse"></i>
                </a>
            </div>

            <div className="icon-box">
                <a href="https://t.me/Filan0vichMaxim" target="_blank" rel="noopener noreferrer" className="fa-stack fa-2x color-tg">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fab fa-telegram-plane fa-stack-1x fa-inverse"></i>
                </a>
            </div>

            <div className="icon-box">
                <a href="https://twitter.com/8Z64Su3u8Rfe7gf" target="_blank" rel="noopener noreferrer" className="fa-stack fa-2x color-twitter">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
                </a>
            </div>

            <div className="icon-box">
                <a href="mailto:maxim_filanovich@mail.ru" target="_blank" rel="noopener noreferrer" className="fa-stack fa-2x color-mail">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fas fa-envelope fa-stack-1x fa-inverse"></i>
                </a>
            </div>

            <div className="icon-box">
                <a href="https://github.com/M-fil" target="_blank" rel="noopener noreferrer" className="fa-stack fa-2x color-github">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                </a>
            </div>
        </footer>
    )
}

export default Footer;
