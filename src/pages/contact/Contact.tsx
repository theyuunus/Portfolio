import { Fragment } from "react/jsx-runtime"

// scss
import './Contact.scss'

// helmet
import { Helmet } from "react-helmet"

// components
import Container from "../../components/Container/Container"
import { Heading, Title } from "../../components/Title/Title"
import Text from "../../components/Text/Text"

// icons 
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram, FaMailBulk } from "react-icons/fa";

const Contact: React.FC = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Yunus | Contact</title>
            </Helmet>

            <Container>
                <div className="contact">
                    <div className="contact__title">
                        <Heading title="contact" />
                        <Text className="p-white">
                            Who am i?
                        </Text>
                    </div>

                    <div className="contact__row">
                        <Text className="contact__row-text">
                            I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
                        </Text>

                        <div className="contact__row-items">
                            <div className="contact__row-items-message">
                                <Text className="p-white contact__row-items-message-title">
                                    Support me here
                                </Text>

                                <Text className="contact__row-items-message-a">
                                    5614681915439222
                                </Text>
                            </div>

                            <div className="contact__row-items-message">
                                <Text className="p-white contact__row-items-message-title">
                                    Message me here
                                </Text>
                                <a className="contact__row-items-message-a" href="https://t.me/theyuunus" target="_blank" rel="noopener noreferrer">
                                    <FaTelegram className="icon" />
                                    <Text>theyuunus</Text>
                                </a>
                                <a className="contact__row-items-message-a" href="mailto:theyuunus@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <FaMailBulk className="icon" />
                                    <Text>theyuunus@gmail.com</Text>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="contact__media">
                        <Title title="all-media" />

                        <div className="contact__media-row">
                            <a href="https://github.com/theyuunus" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="icon" />
                            </a>
                            <a href="https://t.me/theyuunus" target="_blank" rel="noopener noreferrer">
                                <FaTelegram className="icon" />
                            </a>
                            <a href="https://www.instagram.com/yunus_obidxojayev/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="icon" />
                            </a>
                            <a href="https://www.linkedin.com/in/theyuunus/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="icon" />
                            </a>
                            <a href="mailto:theyuunus@gmail.com" target="_blank" rel="noopener noreferrer">
                                <FaMailBulk className="icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </Fragment>
    )
}

export default Contact