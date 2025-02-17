import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <NavLink className="navbar-brand" to="/">Project Routing</NavLink>

                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleNavbar}
                    aria-controls="navbarNav"
                    aria-expanded={isOpen ? "true" : "false"}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink
                                end
                                to="/"
                                className="nav-link"
                                style={({ isActive }) => ({
                                    fontWeight: isActive ? 'bold' : 'normal'
                                })}
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/about"
                                className="nav-link"
                                style={({ isActive }) => ({
                                    fontWeight: isActive ? 'bold' : 'normal'
                                })}
                                onClick={() => setIsOpen(false)}
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/user/1"
                                className="nav-link"
                                style={({ isActive }) => ({
                                    fontWeight: isActive ? 'bold' : 'normal'
                                })}
                                onClick={() => setIsOpen(false)}
                            >
                                User
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
