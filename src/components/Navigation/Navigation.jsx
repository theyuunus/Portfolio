import React, { Fragment } from 'react'
import "./Navigation.scss"
import Container from '../Container'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  const menu = [
    <NavLink className='navbar-link' style={({ isActive }) => ({ color: isActive ? 'var(--color-4)' : 'var(--color-3)' })} to={"/"}>Home</NavLink>,
    <NavLink className='navbar-link' style={({ isActive }) => ({ color: isActive ? 'var(--color-4)' : 'var(--color-3)' })} to={"about"}>About Me</NavLink>,
    <NavLink className='navbar-link' style={({ isActive }) => ({ color: isActive ? 'var(--color-4)' : 'var(--color-3)' })} to={"work"}>Work</NavLink>,
    <NavLink className='navbar-link' style={({ isActive }) => ({ color: isActive ? 'var(--color-4)' : 'var(--color-3)' })} to={"contact"}>Contact</NavLink>,
  ]
  return (
    <Fragment>
      <nav className='navbar'>
        <Container>
          <div className='navbar-navigation'>
            <NavLink to={"/"} className='navbar-logo'>
              Yunus
            </NavLink>
            <div className='navbar-links'>
              {menu}
            </div>
          </div>
        </Container>
      </nav>
    </Fragment>
  )
}
