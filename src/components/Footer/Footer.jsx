import React from 'react'
import "./Footer.scss"
import Tag from '../Tag'
import Container from '../Container/index'
import { NavLink } from 'react-router-dom'
import home from "../../images/Footer-home-icon.svg"
import about from "../../images/Footer-about-icon.svg"
import work from "../../images/Footer-work-icon.svg"
import contact from "../../images/Footer-contact-icon.svg"
import { FaTelegram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className='footer'>
      <Container>
        <div className='footer-navigation'>
          <div className='footer-navigation-link'>
            <img className='footer-navigation-img' src={home} alt="error" />
            <NavLink className='navbar-link' style={({ isActive }) => ({ color: isActive ? 'var(--color-4)' : 'var(--color-3)' })} to={"/"}>
              home
            </NavLink>
          </div>
          <div className='footer-navigation-link'>
            <img className='footer-navigation-img' src={about} alt="error" />
            <NavLink className='navbar-link' style={({ isActive }) => ({ color: isActive ? 'var(--color-4)' : 'var(--color-3)' })} to={"/about"}>
              About me
            </NavLink>
          </div>
          <div className='footer-navigation-link'>
            <img className='footer-navigation-img' src={work} alt="error" />
            <NavLink className='navbar-link' style={({ isActive }) => ({ color: isActive ? 'var(--color-4)' : 'var(--color-3)' })} to={"/work"}>
              Work
            </NavLink>
          </div>
          <div className='footer-navigation-link'>
            <img className='footer-navigation-img' src={contact} alt="error" />
            <NavLink className='navbar-link' style={({ isActive }) => ({ color: isActive ? 'var(--color-4)' : 'var(--color-3)' })} to={"/contact"}>
              Contact
            </NavLink>
          </div>
        </div>
        <div className='footer-media'>
          <a href="https://t.me/theyuunus" target="_blank" without rel="noreferrer" className='footer-media-social__network'>
            <FaTelegram className='footer-media-icon' />
          </a>
          <a href="https://github.com/theyuunus" target="_blank" without rel="noreferrer" className='footer-media-social__network'>
            <FaGithub className='footer-media-icon' />
          </a>
          <a href="https://www.instagram.com/yunus_obidxojayev/" target="_blank" without rel="noreferrer" className='footer-media-social__network'>
            <FaInstagram className='footer-media-icon' />
          </a>
        </div>
        <div className='footer-bottom'>
          <Tag className='footer-bottom-text'>
            Terms of Service - Privacy Policy
          </Tag>
        </div>
      </Container>
    </footer>
  )
}
