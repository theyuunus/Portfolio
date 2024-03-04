import { Fragment } from "react/jsx-runtime";
import './Navbar.scss';
import Container from "../Container/Container";
import { FaGithub, FaTelegram } from "react-icons/fa";
import Text from "../Text/Text";
import { Link, NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
    const pages = [
        { to: "/", text: "home" },
        { to: "/work", text: "work" },
        { to: "/about-me", text: "about" },
        { to: "/contact", text: "contact" },
    ];

    return (
        <Fragment>
            <nav className="navbar">
                <div className="navbar__social">
                    <div className="navbar__social-line"></div>
                    <div className="navbar__social-icons">
                        <a href="https://github.com/theyuunus">
                            <FaGithub className="icon" />
                        </a>
                        <a href="https://t.me/theyuunus">
                            <FaTelegram className="icon" />
                        </a>
                    </div>
                </div>
                <Container>
                    <div className="navbar__navigation">
                        <div className="navbar__logo">
                            <Link to={"/"}>
                                <Text as="h1" className="navbar__logo-title">Yunus</Text>
                            </Link>
                        </div>
                        <div className="navbar__links">
                            {pages.map((page, index) => (
                                <NavLink
                                    key={index}
                                    to={page.to}
                                    className="navbar__links-link"
                                >
                                    <span className="navbar__links-link-span">#</span>{page.text}
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
