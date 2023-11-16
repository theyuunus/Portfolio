import React from 'react'
import "./Navbar.scss"
import Logo from "../../images/Logo.png"
import { Link, NavLink } from 'react-router-dom'

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
      </div>
    </React.Fragment>
  )
}
