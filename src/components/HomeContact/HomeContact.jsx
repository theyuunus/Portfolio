import React from 'react'
import "./HomeContact.scss"
import { FaTelegram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function HomeContact() {
    return (
        <React.Fragment>
            <div className="container">
                <div className="HomeContact">
                    <div className="HomeAbout-left-top">
                        <h1 className="HomeAbout-left-top-h1">
                            <span className="HomeAbout-left-top-h1-span">#</span>contacts
                        </h1>
                        <div>
                            <div className="HomeAbout-left-top-line"></div>
                        </div>
                    </div>
                    <div className="HomeContact-bottom">
                        <div className="HomeContact-bottom-backImg">

                        </div>
                        <div className="HomeContact-bottom-left">
                            <p className="HomeContact-bottom-left-p">
                                I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
                            </p>
                        </div>
                        <div className="HomeContact-bottom-right">
                            <p className="HomeContact-bottom-right-p">Message me here</p>
                            <a className="HomeContact-bottom-right-a" href="https://t.me/theyuunus" target='_blank' rel="noopener noreferrer">
                                <FaTelegram className="HomeContact-bottom-right-a-icon" />
                                @theyuunus
                            </a>
                            <a className="HomeContact-bottom-right-a" href="mailto:theyuunus@gmail.com" target='_blank' rel="noopener noreferrer">
                                <HiOutlineMail className="HomeContact-bottom-right-a-icon" />
                                theyuunus@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
