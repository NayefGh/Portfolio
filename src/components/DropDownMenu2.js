import React, { useState, useRef, useEffect } from "react";
import menu from "../icons/menu.png";
import { HashLink as Link } from "react-router-hash-link";
import close from "../icons/close.png";

const DropdownMenu2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <img
        src={isOpen ? close : menu}
        alt="Menu Icon"
        className={`dropdown-btn ${isOpen ? "open" : ""}`}
        onClick={toggleDropdown}
      />

      <div className={`dropdown-list ${isOpen ? "show" : ""}`}>
        <Link to="#skills" className="dropdown-item" smooth>
          Skills
        </Link>
        <Link to="#exp" className="dropdown-item" smooth>
          Experience
        </Link>
        <Link to="#contact" className="dropdown-item" smooth>
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default DropdownMenu2;
