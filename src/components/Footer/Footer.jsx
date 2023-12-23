import React from 'react'
import "./Footer.scss"
import { Link } from 'react-router-dom'
import Logo from "../../images/Logo.png"
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <React.Fragment>
            <div className="footer">
                <div className="container">
                    <div className="footer-top">
                        <div className="footer-top-left">
                            <div className="footer-top-left-div">
                                <Link to={"/"} className="navbar-left-a">
                                    <img className="navbar-left-a-img" src={Logo} alt="" />
                                    <h2 className="navbar-left-a-h2">Yunus</h2>
                                </Link>
                                <a className="footer-top-left-div-a" href="mailto:theyuunus@gmail.com" target='_blank' rel="noopener noreferrer">theyuunus@gmail.com</a>
                            </div>
                            <p className="footer-top-left-p">
                                HTML - layout designer and Front-end developer
                            </p>
                        </div>
                        <div className="footer-top-right">
                            <h2 className="footer-top-right-h2">Media</h2>
                            <div className="footer-top-right-icons">
                                <a className="media-bottom-a" href="https://www.instagram.com/obidxojayev_y/" target='_blank' rel="noopener noreferrer">
                                    <FaInstagram className="media-bottom-a-icon" />
                                </a>
                                <a className="media-bottom-a" href="https://github.com/theyuunus" target='_blank' rel="noopener noreferrer">
                                    <FaGithub className="media-bottom-a-icon" />
                                </a>
                                <a className="media-bottom-a" href="https://t.me/theyuunus" target='_blank' rel="noopener noreferrer">
                                    <FaTelegram className="media-bottom-a-icon" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p className="footer-bottom-p">
                            © Copyright 2023. Made by Yunus
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
