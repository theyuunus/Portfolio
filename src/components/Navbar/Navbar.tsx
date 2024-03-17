import { Fragment } from "react/jsx-runtime";
import './Navbar.scss';
import Container from "../Container/Container";
import { FaGithub, FaTelegram } from "react-icons/fa";
import Text from "../Text/Text";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../images/Logo/Logo.png"

const Navbar: React.FC = () => {
    const pages = [
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
                        <a href="https://github.com/theyuunus" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="icon" />
                        </a>
                        <a href="https://t.me/theyuunus" target="_blank" rel="noopener noreferrer">
                            <FaTelegram className="icon" />
                        </a>
                    </div>
                </div>
                <Container>
                    <div className="navbar__navigation">
                        <Link to={"/"} className="navbar__logo">
                            <img
                                src={Logo}
                                alt="Logo"
                                className="navbar__logo-img"
                            />
                            <Text as="h1" className="navbar__logo-title">Yunus</Text>
                        </Link>
                        <div className="navbar__row">
                            {pages.map((page, index) => (
                                <NavLink
                                    key={index}
                                    to={page.to}
                                    className="navbar__row-link"
                                >
                                    <span className="navbar__row-link-span">#</span>{page.text}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </Container>
            </nav>
        </Fragment>
    );
}

export default Navbar;