import React from 'react'
import "./Contact.scss"
import { FaTelegram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Contact() {
    return (
        <React.Fragment>
            <div className="container">
                <div className="contact">
                    <div className="contact-top">
                        <h1 className="contact-top-h1">
                            <span className="contact-top-h1-span">/</span>contacts
                        </h1> <br />
                        <p className="contact-top-p">Who am i?</p>
                    </div>

                    <div className="contact-middle">
                        <div className="contact-middle-left">
                            <p className="contact-middle-left-p">
                                I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
                            </p>
                        </div>
                        <div className="contact-middle-right">
                            <div className="HomeContact-bottom-right">
                                <p className="HomeContact-bottom-right-p">Message me here</p>
                                <a className="HomeContact-bottom-right-a" href="https://t.me/theyuunus" target='_blank' rel="noopener noreferrer">
                                    <FaTelegram className="HomeContact-bottom-right-a-icon" />
                                    @theyuunus
                                </a>
                                <a className="HomeContact-bottom-right-a" href="mailto:obidxojayevbotir@gmail.com" target='_blank' rel="noopener noreferrer">
                                    <HiOutlineMail className="HomeContact-bottom-right-a-icon" />
                                    obidxojayevbotir@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="contact-bottom">
                        <h1 className="contact-top-h1">
                            <span className="contact-top-h1-span">#</span>all-media
                        </h1>

                        <div className="contact-bottom-media">
                            <a className="contact-bottom-media-a" href="https://t.me/theyuunus" target='_blank' rel="noopener noreferrer">
                                <FaTelegram className="contact-bottom-media-a-icon" />
                            </a>
                            <a className="contact-bottom-media-a" href="https://www.instagram.com/obidxojayev_y/" target='_blank' rel="noopener noreferrer">
                                <FaInstagram className="contact-bottom-media-a-icon" />
                            </a>
                            <a className="contact-bottom-media-a" href="https://github.com/theyuunus" target='_blank' rel="noopener noreferrer">
                                <FaGithub className="contact-bottom-media-a-icon" />
                            </a>
                            <a className="contact-bottom-media-a" href="https://www.google.com/maps/place/41%C2%B018'41.5%22N+69%C2%B009'18.4%22E" target="_blank" rel="noopener noreferrer">
                                <FaLocationDot className="contact-bottom-media-a-icon" />
                            </a>
                            <a className="contact-bottom-media-a" href="mailto:obidxojayevbotir@gmail.com" target='_blank' rel="noopener noreferrer">
                                <HiOutlineMail className="contact-bottom-media-a-icon" />
                            </a>
                        </div>
                        <div className="contact-bottom-backImg"></div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
