import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS for the Navbar styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/"> {/* Link to Home page */}
                    <img src="/logo.webp" alt="PanditJi" className="logo-img" />
                    <span className="logo-text">Pandit ji</span>
                </Link>
            </div>
            <ul className="nav-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/ContactUs">Contact Us</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
