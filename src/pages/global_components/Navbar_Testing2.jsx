import React from 'react'
import {useState, useEffect, useRef } from 'react'


const Navbar_Testing2 = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null); // only one active
    const [hidden, setHidden] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
    const handleScroll = () => {
        const currentY = window.scrollY;
        if (currentY > lastScrollY.current) {
        setHidden(true); 
        } else {
        setHidden(false); 
        }
        lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth > 768) {
        setShowMobileMenu(false);
        setActiveSubmenu(null); // reset submenus
        }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleSubmenu = (menu) => {
        setActiveSubmenu(prev => (prev === menu ? null : menu));
    };

    return (
    <>
        <nav className={`navbar ${hidden ? "hidden" : ""}`}>
            <div className="logo">
                MyLogo
            </div>
            <ul className="menu">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Services</a>
                    <div className="submenu">
                        <p>Mega menu content for Services</p>
                    </div>
                </li>
                <li>
                    <a href="#">Products</a>
                    <div className="submenu">
                        <p>Mega menu content for Products</p>
                    </div>
                </li>
                <li>
                    <a href="#">Products</a>
                    <div className="submenu">
                        <p>Mega menu content for Products</p>
                    </div>
                </li>
                <li>
                    <a href="#">Products</a>
                    <div className="submenu">
                        <p>Mega menu content for Products</p>
                    </div>
                </li>
                <li><a href="#">useful information</a></li>
            </ul>
            <div className="social">
                <a href="#">FB</a>
                <a href="#">TW</a>
                <a href="#">IG</a>
            </div>
            <div className="hamburger" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <i className="fa-solid fa-bars fa-2x"></i>
            </div>
        </nav>

        <div className={`mobile-menu ${showMobileMenu ? "show" : ""}`}>
            <li onClick={() => toggleSubmenu("home")}>Home</li>
            <li onClick={() => toggleSubmenu("services")}>
                Services
                <ul className={`mobile-submenu ${activeSubmenu === "services" ? "show" : ""}`}>
                <li>Web Design</li>
                <li>SEO</li>
                <li>Marketing</li>
                </ul>
            </li>
            <li onClick={() => toggleSubmenu("products")}>
                Products
                <ul className={`mobile-submenu ${activeSubmenu === "products" ? "show" : ""}`}>
                <li>App</li>
                <li>Software</li>
                <li>Tool</li>
                </ul>
            </li>
            <li>Contact</li>
        </div>
    </>
    );
}

export default Navbar_Testing2