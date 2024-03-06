import { Fragment } from "react/jsx-runtime"
import './Footer.scss'
import Container from "../Container/Container"
import Text from "../Text/Text"
import { Link } from "react-router-dom"
import Logo from "../../images/Logo/Logo.png"
import { FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <Fragment>
            <footer className="footer">
                <Container>
                    <div className="footer__row">
                        <div className="footer__row-logo">
                            <Link to={"/"} className="navbar__logo">
                                <img
                                    src={Logo}
                                    alt="Logo"
                                    className="navbar__logo-img"
                                />
                                <Text as="h1" className="navbar__logo-title">Yunus</Text>
                                <a className="footer__row-logo-email" href="mailto:theyuunus@gmail.com">theyuunus@gmail.com</a>
                            </Link>
                            <Text className="p-white">
                                Front-end Developer and Software engineer
                            </Text>
                        </div>
                        <div className="footer__row-media">
                            <Text as="h1" className="h1">
                                Media
                            </Text>
                            <div className="footer__row-media-icons">
                                <a href="https://github.com/theyuunus" target="_blank" rel="noopener noreferrer">
                                    <FaGithub className="icon" />
                                </a>
                                <a href="https://t.me/theyuunus" target="_blank" rel="noopener noreferrer">
                                    <FaTelegram className="icon" />
                                </a>
                                <a href="https://www.instagram.com/yunus_obidxojayev/" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram className="icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <Text className="footer__bottom">
                        &copy; Copyright 2024. Made by Yunus
                    </Text>
                </Container>
            </footer>
        </Fragment>
    )
}

export default Footer