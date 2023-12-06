import React, { useRef, useState } from 'react';
import "./Navbar.scss";
import Logo from "../../images/Logo.png";
import { Link, NavLink } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

export default function Navbar() {
  const [isMenuActive, setMenuActive] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    menuRef.current.classList.toggle("menu__active");
    setMenuActive(!isMenuActive);
  };

  const closeMenu = () => {
    if (menuRef.current.classList.contains("menu__active")) {
      toggleMenu();
    }
  };

  return (
    <React.Fragment>
      <div>
        <div className="container">
          <div className="navbar">
            <div className="navbar-left">
              <Link to={"/"} className="navbar-left-a">
                <img className="navbar-left-a-img" src={Logo} alt="" />
                <h2 className="navbar-left-a-h2">Yunus</h2>
              </Link>
            </div>

            <div className="navbar-right">
              <NavLink to={"/"} className="navbar-right-a">
                <span className="navbar-right-a-span">#</span>home
              </NavLink>
              <NavLink to={"works"} className="navbar-right-a">
                <span className="navbar-right-a-span">#</span>works
              </NavLink>
              <NavLink to={"/about"} className="navbar-right-a">
                <span className="navbar-right-a-span">#</span>about-me
              </NavLink>
              <NavLink to={"/contact"} className="navbar-right-a">
                <span className="navbar-right-a-span">#</span>contacts
              </NavLink>
              <span className="mobile__menu">
                <i onClick={toggleMenu} role="button" aria-label="Toggle Menu">
                  {isMenuActive ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect width="1" height="1" transform="matrix(1 0 0 -1 11 12)" fill="#D9D9D9" />
                      <rect x="3" y="19.9706" width="24" height="2" transform="rotate(-45 3 19.9706)" fill="#D9D9D9" />
                      <rect x="4" y="3" width="24" height="2" transform="rotate(45 4 3)" fill="#D9D9D9" />
                    </svg>
                  ) : (
                    <svg className="mobile__menu-close" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="2" fill="#D9D9D9" />
                      <rect x="9" y="12" width="15" height="2" fill="#D9D9D9" />
                    </svg>
                  )}
                </i>
              </span>
            </div>
          </div>
        </div>

        <div className="navbar_mobile">
          <div className="navigation" ref={menuRef} onClick={closeMenu}>
            <div className="menu">
              <NavLink to={"/"} className="menu-a" onClick={closeMenu}>
                <span className="menu-a-span">#</span>home
              </NavLink>
              <NavLink to={"works"} className="menu-a" onClick={closeMenu}>
                <span className="menu-a-span">#</span>works
              </NavLink>
              <NavLink to={"/about"} className="menu-a" onClick={closeMenu}>
                <span className="menu-a-span">#</span>about-me
              </NavLink>
              <NavLink to={"/contact"} className="menu-a" onClick={closeMenu}>
                <span className="menu-a-span">#</span>contacts
              </NavLink>

              <div className="menu-media">
                <a className="media-bottom-a" href="https://github.com/theyuunus" target='_blank'>
                  <FaGithub className="media-bottom-a-icon" />
                </a>
                <a className="media-bottom-a" href="https://t.me/theyuunus" target='_blank'>
                  <FaTelegram className="media-bottom-a-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="media">
          <div className="media-top"></div>
          <div className="media-bottom">
            <a className="media-bottom-a" href="https://github.com/theyuunus" target='_blank' rel="noopener noreferrer">
              <FaGithub className="media-bottom-a-icon" />
            </a>
            <a className="media-bottom-a" href="https://t.me/theyuunus" target='_blank' rel="noopener noreferrer">
              <FaTelegram className="media-bottom-a-icon" />
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
