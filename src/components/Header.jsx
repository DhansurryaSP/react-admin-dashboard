import React, { useState, useRef, useEffect } from "react";
import { FiSearch, FiUser, FiSettings, FiLogOut } from "react-icons/fi";
import "./Header.css";
import myPhoto from "../assets/surrya.png";



function Header({ toggleTheme, downloadReport }) {

    const [open, setOpen] = useState(false);
    const dropdownRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="header">
            <div className="search-container">
                <FiSearch className="search-icon" />
                <input type="text" placeholder="Search products, users..." />
            </div>

            <div className="header-right">


                <button onClick={toggleTheme} className="theme-btn">
                    Toggle Theme
                </button>
                <button onClick={downloadReport} className="report-btn">
                    Generate Report
                </button>


                <div className="profile" ref={dropdownRef}>
             <img
  src={myPhoto}
  alt="User"
  className="profile-img"
  onClick={() => setOpen(!open)}
/>


                    {open && (
                        <div className="dropdown">
                            <div className="dropdown-item">
                                <FiUser /> About
                            </div>
                            <div className="dropdown-item">
                                <FiSettings /> Account Settings
                            </div>
                            <div className="dropdown-item logout">
                                <FiLogOut /> Logout
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;
