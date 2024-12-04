import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import ContactUs from "./ContactUs";
import Navbar from "./Navbar"; // Import the Navbar

function Main() {
    return (
        <div>
            <Router>
                <Navbar /> {/* Include the Navbar */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/ContactUs" element={<ContactUs />} />
                </Routes>
            </Router>
        </div>
    );
}

export default Main;
