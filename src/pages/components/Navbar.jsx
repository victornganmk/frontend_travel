import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isToggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!isToggle);
    };

    const [openSubmenu, setOpenSubmenu] = useState(null);

    const handleSubmenuToggle = (menuName) => {
    setOpenSubmenu(openSubmenu === menuName ? null : menuName);
    };

    return (
        <nav>
            <ul>
                <div className="logo_container">
                    <Link to="/"><img src="/img/logo/logo.png"></img></Link>
                </div>
                <li className='menu_main'><Link to="/">home</Link></li>
                <li className='menu_main'>
                    <Link to="/wellington_about">wellington</Link>
                    <div className="menu_sub">
                        <ul>
                            <li><Link to="/wellington_about"><i class="fa-solid fa-book"></i>about</Link></li>
                            <li><Link to="/wellington_attractions"><i class="fa-solid fa-camera"></i>attractions</Link></li>
                            <li><Link to="/wellington_food"><i class="fa-solid fa-utensils"></i>food</Link></li>
                            <li><Link to="/wellington_accommodation"><i class="fa-solid fa-bed"></i>accommodation</Link></li>
                            <li><Link to="/wellington_transportation"><i class="fa-solid fa-car-side"></i>transportation</Link></li>
                        </ul>
                    </div>
                </li>
                <li className='menu_main'>
                    <Link to="/prague_about">prague</Link>
                    <div className="menu_sub">
                        <ul>
                            <li><Link to="/prague_about"><i class="fa-solid fa-book"></i>about</Link></li>
                            <li><Link to="/prague_attractions"><i class="fa-solid fa-camera"></i>attractions</Link></li>
                            <li><Link to="/prague_food"><i class="fa-solid fa-utensils"></i>food</Link></li>
                            <li><Link to="/prague_accommodation"><i class="fa-solid fa-bed"></i>accommodation</Link></li>
                            <li><Link to="/prague_transportation"><i class="fa-solid fa-car-side"></i>transportation</Link></li>
                        </ul>
                    </div>
                </li>
                <li className='menu_main'>
                    <Link to="/cusco_about">cusco</Link>
                    <div className="menu_sub">
                        <ul>
                            <li><Link to="/cusco_about"><i class="fa-solid fa-book"></i>about</Link></li>
                            <li><Link to="/cusco_attractions"><i class="fa-solid fa-camera"></i>attractions</Link></li>
                            <li><Link to="/cusco_food"><i class="fa-solid fa-utensils"></i>food</Link></li>
                            <li><Link to="/cusco_accommodation"><i class="fa-solid fa-bed"></i>accommodation</Link></li>
                            <li><Link to="/cusco_transportation"><i class="fa-solid fa-car-side"></i>transportation</Link></li>
                        </ul>
                    </div>
                </li>
                <li className='menu_main'>
                    <Link to="/arusha_about">arusha</Link>
                    <div className="menu_sub">
                        <ul>
                            <li><Link to="/arusha_about"><i class="fa-solid fa-book"></i>about</Link></li>
                            <li><Link to="/arusha_attractions"><i class="fa-solid fa-camera"></i>attractions</Link></li>
                            <li><Link to="/arusha_food"><i class="fa-solid fa-utensils"></i>food</Link></li>
                            <li><Link to="/arusha_accommodation"><i class="fa-solid fa-bed"></i>accommodation</Link></li>
                            <li><Link to="/arusha_transportation"><i class="fa-solid fa-car-side"></i>transportation</Link></li>
                        </ul>
                    </div>
                </li>
                <div className="icon_container">
                    <ul className="icon_list">
                        <li className="icon_item">
                            <a 
                                href="https://www.facebook.com/?locale=zh_HK"
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                        </li>
                        <li className="icon_item">
                            <a 
                                href="https://x.com/"
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                        </li>
                        <li className="icon_item">
                            <a 
                                href="https://www.threads.com/?hl=zh-hk"
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <i className="fa-brands fa-threads"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="mobile_menu">
                    <div className="mobile_menu_toggle" onClick={handleToggle}>
                        <i className="fa-solid fa-bars fa-2x"></i>
                    </div>
                    <div className={isToggle ? "mobile_menu_part active" : "mobile_menu_part"}>
                        <ul className="mobile_menu_list">
                            <li className="mobile_menu_list_item"><Link to="/" className='mobile_home'>home</Link></li>
                            <li className="mobile_menu_list_item">
                                <button
                                    type="button"
                                    onClick={() => handleSubmenuToggle("wellington")}
                                    className="submenu-toggle"
                                >
                                    wellington
                                    <i class="fa-solid fa-angle-down"></i>
                                </button>
                                <div className={openSubmenu === "wellington" ? "menu_sub mobile_sub active" : "menu_sub mobile_sub"}>
                                    <ul>
                                        <li><Link to="/wellington_about"><i class="fa-solid fa-book"></i>about</Link></li>
                                        <li><Link to="/wellington_attractions"><i class="fa-solid fa-camera"></i>attractions</Link></li>
                                        <li><Link to="/wellington_food"><i class="fa-solid fa-utensils"></i>food</Link></li>
                                        <li><Link to="/wellington_accommodation"><i class="fa-solid fa-bed"></i>accommodation</Link></li>
                                        <li><Link to="/wellington_transportation"><i class="fa-solid fa-car-side"></i>transportation</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="mobile_menu_list_item">
                                <button
                                    type="button"
                                    onClick={() => handleSubmenuToggle("prague")}
                                    className="submenu-toggle"
                                >
                                    prague
                                    <i class="fa-solid fa-angle-down"></i>
                                </button>
                                <div className={openSubmenu === "prague" ? "menu_sub mobile_sub active" : "menu_sub mobile_sub"}>
                                    <ul>
                                        <li><Link to="/prague_about"><i class="fa-solid fa-book"></i>about</Link></li>
                                        <li><Link to="/prague_attractions"><i class="fa-solid fa-camera"></i>attractions</Link></li>
                                        <li><Link to="/prague_food"><i class="fa-solid fa-utensils"></i>food</Link></li>
                                        <li><Link to="/prague_accommodation"><i class="fa-solid fa-bed"></i>accommodation</Link></li>
                                        <li><Link to="/prague_transportation"><i class="fa-solid fa-car-side"></i>transportation</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="mobile_menu_list_item">
                                <button
                                    type="button"
                                    onClick={() => handleSubmenuToggle("cusco")}
                                    className="submenu-toggle"
                                >
                                    cusco
                                    <i class="fa-solid fa-angle-down"></i>
                                </button>
                                <div className={openSubmenu === "cusco" ? "menu_sub mobile_sub active" : "menu_sub mobile_sub"}>
                                    <ul>
                                        <li><Link to="/cusco_about"><i class="fa-solid fa-book"></i>about</Link></li>
                                        <li><Link to="/cusco_attractions"><i class="fa-solid fa-camera"></i>attractions</Link></li>
                                        <li><Link to="/cusco_food"><i class="fa-solid fa-utensils"></i>food</Link></li>
                                        <li><Link to="/cusco_accommodation"><i class="fa-solid fa-bed"></i>accommodation</Link></li>
                                        <li><Link to="/cusco_transportation"><i class="fa-solid fa-car-side"></i>transportation</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="mobile_menu_list_item">
                                <button
                                    type="button"
                                    onClick={() => handleSubmenuToggle("arusha")}
                                    className="submenu-toggle"
                                >
                                    arusha
                                    <i class="fa-solid fa-angle-down"></i>
                                </button>
                                <div className={openSubmenu === "arusha" ? "menu_sub mobile_sub active" : "menu_sub mobile_sub"}>
                                    <ul>
                                        <li><Link to="/arusha_about"><i class="fa-solid fa-book"></i>about</Link></li>
                                        <li><Link to="/arusha_attractions"><i class="fa-solid fa-camera"></i>attractions</Link></li>
                                        <li><Link to="/arusha_food"><i class="fa-solid fa-utensils"></i>food</Link></li>
                                        <li><Link to="/arusha_accommodation"><i class="fa-solid fa-bed"></i>accommodation</Link></li>
                                        <li><Link to="/arusha_transportation"><i class="fa-solid fa-car-side"></i>transportation</Link></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </ul>
        </nav>
    );
}

export default Navbar