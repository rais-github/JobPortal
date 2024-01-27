import React, { useState } from "react";
import WorkHistoryRoundedIcon from "@mui/icons-material/WorkHistoryRounded";
import Button from "@mui/material/Button";
import { NavLink, Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = [
    { path: "/", title: "Start Search" },
    { path: "/my-job", title: "My Jobs" },
    { path: "/salary", title: "Salary Estimate" },
    { path: "/post-job", title: "Post Job" },
  ];

  return (
    <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <nav className="flex justify-between items-center py-6">
        <a href="/" className="flex items-center gap-2 text-2xl font-mono">
          <WorkHistoryRoundedIcon className="text-red" fontSize="large" />
          <span>JobPortal</span>
        </a>
        {/* Toggle menu button for medium screens and below */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <CloseIcon fontSize="large" color="error" />
            ) : (
              <MenuIcon fontSize="large" color="error" />
            )}
          </button>
        </div>
        {/* nav items for large screens */}
        <ul className="hidden md:flex gap-12">
          {navItems.map((item, index) => (
            <li key={index} className="text-base text-primary">
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* Login sign-up for large screens */}
        <div className="text-primary text-base font-medium space-x-5 hidden md:block">
          <Link to="/login">
            <Button variant="text" color="error">
              Login
            </Button>
          </Link>
          <Link to="/sign-up">
            <Button variant="contained" color="error">
              SignUp
            </Button>
          </Link>
        </div>
      </nav>
      {/* Mobile menu content */}
      {menuOpen && (
        <div className="mobile-menu">
          <div className="px-4 bg-black py-5 rounded-sm">
            <ul>
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="text-base text-white first:text-white py-1"
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
              {/* Login and Signup links in mobile menu */}
              <li className="text-base text-white first:text-white py-1">
                <Link to="/login" className="active-link">
                  Login
                </Link>
              </li>
              <li className="text-base text-white first:text-white py-1">
                <Link to="/sign-up" className="active-link">
                  Signup
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
