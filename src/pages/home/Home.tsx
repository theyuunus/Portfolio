import { Fragment } from "react/jsx-runtime"
import './Home.scss'
import Helmet from "../../components/Helmet/Helmet"
import Container from "../../components/Container/Container"
import Text from "../../components/Text/Text"
import { ButtonLive } from "../../components/Button/Button"
import { Link } from "react-router-dom"
import Person from "../../images/Person/Person-1/Person-1.png"
import { TitleHr } from "../../components/Title/Title"
import AboutPerson from "../../images/Person/Person-2/Person-2.png"
import { FaTelegram, FaMailBulk } from "react-icons/fa";

const Home: React.FC = () => {
    return (
        <Fragment>
            <Helmet title="Home">
                <Container>
                    <div className="home">
                        <header className="home__header">
                            <div className="home__header-texts">
                                <Text as="h1" className="home__header-texts-title">
                                    Yunus is a <span>Front-end Developer</span> and <span>Software engineer</span>
                                </Text>
                                <Text className="home__header-texts-text">
                                    He crafts responsive websites where technologies meet creativity
                                </Text>
                                <Link to={"/contact"}>
                                    <ButtonLive title="Contact me!!" />
                                </Link>
                            </div>
                            <div className="home__header-img">
                                <img src={Person} alt="person" />
                                <div className="home__header-img-bottom">
                                    <div className="home__header-img-bottom-rectangle"></div>
                                    <Text className="home__header-img-bottom-text">
                                        Currently working as a <span>Freelancer</span>
                                    </Text>
                                </div>
                            </div>
                        </header>
                        <div className="home__about">
                            <TitleHr title="about-me" />
                            <div className="home__about-row">
                                <main className="about__main">
                                    <div className="home__about-wrap">
                                        <Text className="about__main-text">
                                            Hello, i’m Yunus!
                                            <br /><br />
                                            I’m a self-taught front-end developer based in Tashkent, Uzbekistan. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
                                            <br /><br />
                                            Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
                                        </Text>
                                        <Link to={"about-me"}>
                                            <ButtonLive title="Read more ->" />
                                        </Link>
                                    </div>
                                    <div className="about__main-img">
                                        <img
                                            src={AboutPerson}
                                            alt="Person"
                                        />
                                    </div>
                                </main>
                            </div>
                        </div>
                        <div className="home__contact">
                            <TitleHr title="contacts" />
                            <div className="contact__row">
                                <Text className="contact__row-text">
                                    I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
                                </Text>
                                <div className="contact__row-message">
                                    <Text className="p-white contact__row-message-title">
                                        Message me here
                                    </Text>
                                    <a className="contact__row-message-a" href="https://t.me/theyuunus" target="_blank" rel="noopener noreferrer">
                                        <FaTelegram className="icon" />
                                        <Text>theyuunus</Text>
                                    </a>
                                    <a className="contact__row-message-a" href="mailto:theyuunus@gmail.com" target="_blank" rel="noopener noreferrer">
                                        <FaMailBulk className="icon" />
                                        <Text>theyuunus@gmail.com</Text>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Helmet>
        </Fragment>
    )
}

export default Home