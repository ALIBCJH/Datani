import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../constants";
import Datani from "../assets/Datani-03.png";
import menuIcon from "../assets/menu.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  return (
    <nav
      className="w-full fixed flex items-center py-3 top-0 z-30 bg-white shadow-md"
      style={{
        fontFamily: "Segoe UI Variable Small Semibold",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
      }}
    >
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center"
          onClick={() => {
            setToggle(false);
            window.scrollTo(0, 0);
          }}
        >
          <img src={Datani} alt="Logo" className="w-40 h-auto object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden sm:flex flex-row gap-6">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.path}
                className={`text-[#5B248B] text-[18px] cursor-pointer rounded-lg px-4 py-2 ${
                  location.pathname === link.path
                    ? "font-bold underline"
                    : "font-normal"
                }`}
                onClick={() => setToggle(false)}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Menu */}
        <div className="sm:hidden flex items-center relative z-40">
          <button
            onClick={() => setToggle(!toggle)}
            aria-label="Toggle menu"
            className="focus:outline-none"
          >
            <img
              src={menuIcon}
              alt="menu"
              className={`w-7 h-7 transition-transform duration-300 ${
                toggle ? "rotate-90" : ""
              }`}
              style={{
                filter:
                  "invert(30%) sepia(22%) saturate(30%) hue-rotate(250deg) brightness(85%) contrast(90%)",
              }}
            />
          </button>
        </div>

        {/* Mobile Slide-in Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-purple-200 shadow-lg transform transition-transform duration-300 z-50
          ${toggle ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={() => setToggle(false)}
              aria-label="Close menu"
              className="focus:outline-none"
            >
              <img
                src={menuIcon}
                alt="close menu"
                className="w-7 h-7 rotate-45"
                style={{
                  filter:
                    "invert(30%) sepia(22%) saturate(30%) hue-rotate(250deg) brightness(85%) contrast(90%)",
                }}
              />
            </button>
          </div>

          <ul className="flex flex-col gap-5 px-6 pt-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.path}
                  className={`block text-purple-900 text-[16px] cursor-pointer rounded-lg px-4 py-2 hover:bg-purple-300 transition ${
                    location.pathname === link.path
                      ? "font-semibold underline"
                      : "font-normal"
                  }`}
                  onClick={() => setToggle(false)}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Optional backdrop when menu is open */}
        {toggle && (
          <div
            onClick={() => setToggle(false)}
            className="fixed inset-0 bg-black bg-opacity-20 z-40"
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
