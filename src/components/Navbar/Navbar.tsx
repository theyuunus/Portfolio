import React, { Fragment, useState } from "react";
import { FaGithub, FaTelegram } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../images/Logo/Logo.png";
import Container from "../Container/Container";
import Text from "../Text/Text";
import "./Navbar.scss";

interface Page {
    to: string;
    text: string;
}

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleMenu = (): void => {
        setIsMenuOpen(prevState => !prevState);
    };

    const pages: Page[] = [
        { to: "/", text: "home" },
        { to: "/works", text: "work" },
        { to: "/about-me", text: "about" },
        { to: "/contact", text: "contact" },
    ];

    return (
        <Fragment>
            <nav className="navbar">
                <div className="navbar__social">
                    <div className="navbar__social-line"></div>
                    <div className="navbar__social-icons">
                        <a href="https://github.com/theyuunus" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <FaGithub className="icon" />
                        </a>
                        <a href="https://t.me/theyuunus" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                            <FaTelegram className="icon" />
                        </a>
                    </div>
                </div>
                <Container>
                    <div className="navbar__navigation">
                        <Link to={"/"} className="navbar__logo">
                            <img src={Logo} alt="Logo" className="navbar__logo-img" />
                            <Text as="h1" className="navbar__logo-title">
                                Yunus
                            </Text>
                        </Link>
                        <div className="navbar__row">
                            {pages.map((page, index) => (
                                <NavLink
                                    key={index}
                                    to={page.to}
                                    className="navbar__row-link"
                                >
                                    <span className="navbar__row-link-span">#</span>
                                    {page.text}
                                </NavLink>
                            ))}
                        </div>
                        <button className="navbar__media-icon" onClick={toggleMenu}>
                            {isMenuOpen ? (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="1" height="1" transform="matrix(1 0 0 -1 11 12)" fill="#D9D9D9" />
                                    <rect x="3" y="19.9706" width="24" height="2" transform="rotate(-45 3 19.9706)" fill="#D9D9D9" />
                                    <rect x="4" y="3" width="24" height="2" transform="rotate(45 4 3)" fill="#D9D9D9" />
                                </svg>
                            ) : (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="5" width="24" height="2" fill="#D9D9D9" />
                                    <rect x="9" y="12" width="15" height="2" fill="#D9D9D9" />
                                </svg>
                            )}
                        </button>
                    </div>
                    {isMenuOpen && (
                        <div className="navbar__media-links">
                            {pages.map((page, index) => (
                                <NavLink
                                    key={index}
                                    to={page.to}
                                    className="navbar__row-link"
                                    onClick={toggleMenu}
                                >
                                    <span className="navbar__row-link-span">#</span>
                                    {page.text}
                                </NavLink>
                            ))}
                        </div>
                    )}
                </Container>
            </nav>
        </Fragment>
    );
};

export default Navbar;
