import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [year, setYear] = useState('');

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer className='footer'>
            <div className="footer_menu_container">
                <ul className='menu_list'>
                    <h2>wellingtion</h2>
                    <li><Link to="/wellington_about"><i class="fa-solid fa-book"></i>about</Link></li>
                    <li><Link to="/wellington_attractions"><i class="fa-solid fa-camera"></i>attractions</Link></li>
                    <li><Link to="/wellington_food"><i class="fa-solid fa-utensils"></i>food</Link></li>
                    <li><Link to="/wellington_accommodation"><i class="fa-solid fa-bed"></i>accommodation</Link></li>
                    <li><Link to="/wellington_transportation"><i class="fa-solid fa-car-side"></i>transportation</Link></li>
                </ul>
                <ul className='menu_list'>
                    <h2>prague</h2>
                    <li><Link to="/prague_about"><i class="fa-solid fa-book"></i>about</Link></li>
                    <li><Link to="/prague_attractions"><i class="fa-solid fa-camera"></i>attractions</Link></li>
                    <li><Link to="/prague_food"><i class="fa-solid fa-utensils"></i>food</Link></li>
                    <li><Link to="/prague_accommodation"><i class="fa-solid fa-bed"></i>accommodation</Link></li>
                    <li><Link to="/prague_transportation"><i class="fa-solid fa-car-side"></i>transportation</Link></li>
                </ul>
                <ul className='menu_list'>
                    <h2>cusco</h2>
                    <li><Link to="/cusco_about"><i class="fa-solid fa-book"></i>about</Link></li>
                    <li><Link to="/cusco_attractions"><i class="fa-solid fa-camera"></i>attractions</Link></li>
                    <li><Link to="/cusco_food"><i class="fa-solid fa-utensils"></i>food</Link></li>
                    <li><Link to="/cusco_accommodation"><i class="fa-solid fa-bed"></i>accommodation</Link></li>
                    <li><Link to="/cusco_transportation"><i class="fa-solid fa-car-side"></i>transportation</Link></li>
                </ul>
                <ul className='menu_list'>
                    <h2>arusha</h2>
                    <li><Link to="/arusha_about"><i class="fa-solid fa-book"></i>about</Link></li>
                    <li><Link to="/arusha_attractions"><i class="fa-solid fa-camera"></i>attractions</Link></li>
                    <li><Link to="/arusha_food"><i class="fa-solid fa-utensils"></i>food</Link></li>
                    <li><Link to="/arusha_accommodation"><i class="fa-solid fa-bed"></i>accommodation</Link></li>
                    <li><Link to="/arusha_transportation"><i class="fa-solid fa-car-side"></i>transportation</Link></li>
                </ul>
            </div>
            <div className="footer_icon_container">
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
            <p className='copyright'>Copyright &copy; <span id="date">{year}</span> Victor Ngan. All Rights Reserved. </p>
        </footer>
    );
}

export default Footer