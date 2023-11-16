import React from 'react'
import "./Navbar.scss"
import Logo from "../../images/Logo.png"
import { Link, NavLink } from 'react-router-dom'
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

export default function Navbar() {
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
            </div>
          </div>
        </div>

        <div className="media">
          <div className="media-top">

          </div>
          <div className="media-bottom">
            <a className="media-bottom-a" href="https://github.com/theyuunus" target='_blank'>
              <FaGithub className="media-bottom-a-icon" />
            </a>
            <a className="media-bottom-a" href="https://t.me/theyuunus" target='_blank'>
              <FaTelegram className="media-bottom-a-icon" />
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
