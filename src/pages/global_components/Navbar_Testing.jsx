import React from 'react'
import { useState } from 'react';

const Navbar_Testing = () => {
    const [isToggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!isToggle);
    };

    return (
        <nav>
            <ul>
                <div className="logo_container">
                    <a href="#"><img src="/img/logo/logo.png"></img></a>
                </div>
                <li className='menu_main'><a href="">home</a></li>
                <li className='menu_main'>
                    <a href="">wellington</a>
                    <div className="menu_sub">
                        <ul>
                            <li><a href="">about</a></li>
                            <li><a href="">attractions</a></li>
                            <li><a href="">food</a></li>
                            <li><a href="">accommodation</a></li>
                            <li><a href="">transpportaton</a></li>
                        </ul>
                    </div>
                </li>
                <li className='menu_main'>
                    <a href="">prague</a>
                    <div className="menu_sub">
                        <ul>
                            <li><a href="">about</a></li>
                            <li><a href="">attractions</a></li>
                            <li><a href="">food</a></li>
                            <li><a href="">accommodation</a></li>
                            <li><a href="">transpportaton</a></li>
                        </ul>
                    </div>
                </li>
                <li className='menu_main'>
                    <a href="">arusha</a>
                    <div className="menu_sub">
                        <ul>
                            <li><a href="">about</a></li>
                            <li><a href="">attractions</a></li>
                            <li><a href="">food</a></li>
                            <li><a href="">accommodation</a></li>
                            <li><a href="">transpportaton</a></li>
                        </ul>
                    </div>
                </li>
                <li className='menu_main'>
                    <a href="">cusco</a>
                    <div className="menu_sub">
                        <ul>
                            <li><a href="">about</a></li>
                            <li><a href="">attractions</a></li>
                            <li><a href="">food</a></li>
                            <li><a href="">accommodation</a></li>
                            <li><a href="">transpportaton</a></li>
                        </ul>
                    </div>
                </li>
                <li className='menu_main'><a href="">useful info</a></li>
                <div className="icon_container">
                    <ul className="icon_list">
                    <li className="icon_item">
                        <a href="https://www.facebook.com/?locale=zh_HK"><i className="fa-brands fa-facebook"></i></a>
                    </li>
                    <li className="icon_item">
                        <a href="https://x.com/"><i className="fa-brands fa-twitter"></i></a>
                    </li>
                    <li className="icon_item">
                        <a href="https://www.threads.com/?hl=zh-hk"><i className="fa-brands fa-threads"></i></a>
                    </li>
                </ul>
                </div>
                <div className="mobile_menu">
                    <div className="mobile_menu_toggle" onClick={handleToggle}>
                        <i className="fa-solid fa-bars fa-2x"></i>
                    </div>
                    <div className={isToggle ? "mobile_menu_part active" : "mobile_menu_part"}>
                        <ul className="mobile_menu_list">
                            <li className="mobile_menu_list_item"><a href="">home</a></li>
                            <li className="mobile_menu_list_item">
                                <a href="">wellington</a>
                                <div className="menu_sub mobile_sub">
                                    <ul>
                                        <li><a href="">about</a></li>
                                        <li><a href="">attractions</a></li>
                                        <li><a href="">food</a></li>
                                        <li><a href="">accommodation</a></li>
                                        <li><a href="">transpportaton</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="mobile_menu_list_item">
                                <a href="">prague</a>
                                <div className="menu_sub mobile_sub">
                                    <ul>
                                        <li><a href="">about</a></li>
                                        <li><a href="">attractions</a></li>
                                        <li><a href="">food</a></li>
                                        <li><a href="">accommodation</a></li>
                                        <li><a href="">transpportaton</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="mobile_menu_list_item">
                                <a href="">arusha</a>
                                <div className="menu_sub mobile_sub">
                                    <ul>
                                        <li><a href="">about</a></li>
                                        <li><a href="">attractions</a></li>
                                        <li><a href="">food</a></li>
                                        <li><a href="">accommodation</a></li>
                                        <li><a href="">transpportaton</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="mobile_menu_list_item">
                                <a href="">cusco</a>
                                <div className="menu_sub mobile_sub">
                                    <ul>
                                        <li><a href="">about</a></li>
                                        <li><a href="">attractions</a></li>
                                        <li><a href="">food</a></li>
                                        <li><a href="">accommodation</a></li>
                                        <li><a href="">transpportaton</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="mobile_menu_list_item"><a href="">useful info</a></li>
                        </ul>
                    </div>
                </div>
            </ul>
        </nav>
    );
}

export default Navbar_Testing