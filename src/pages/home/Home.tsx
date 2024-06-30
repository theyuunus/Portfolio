import React, { Fragment } from "react";

//scss
import './Home.scss'

// helmet
import { Helmet } from "react-helmet";

// link
import { Link } from "react-router-dom"

// components
import Container from "../../components/Container/Container"
import Text from "../../components/Text/Text"
import { ButtonLive } from "../../components/Button/Button"
import { Card } from "../../components/Card/Card";
import { TitleHr } from "../../components/Title/Title"

// images
import Person from "../../images/Person/Person-1/Person-1.png"
import AboutPerson from "../../images/Person/Person-2/Person-2.png"

// icons
import { FaTelegram, FaMailBulk } from "react-icons/fa";

// assets
import { Works } from "../../assets";

const Home: React.FC = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Yunus | Home</title>
            </Helmet>

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
                            <img src={Person} alt="person" className="home__header-img-person" />
                            <div className="home__header-img-bottom">
                                <div className="home__header-img-bottom-rectangle"></div>
                                <Text className="home__header-img-bottom-text">
                                    Currently working as <span>Apinline</span>
                                </Text>
                            </div>
                        </div>
                    </header>

                    <section className="home__projects">
                        <div className="home__projects-title">
                            <TitleHr title="projects" />
                            <Link to={"/works"}>View all {'~~>'}</Link>
                        </div>

                        {Works ? (
                            <div className="projects__cards-row">
                                {Works.slice(0, 3).map((work) => (
                                    <Fragment key={work.id}>
                                        <Card
                                            image={work.img}
                                            languages={work.languages}
                                            title={work.title}
                                            text={work.text}
                                            link={work.link}
                                            demo={work.demo}
                                        />
                                    </Fragment>
                                ))}
                            </div>
                        ) : <Text as="h1" className="loading-spinner">Loading...</Text>}
                    </section>

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

                                    <Link to={"about-me"} className="home__about-link">
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
                </div>
            </Container>
        </Fragment>
    )
}

export default Home