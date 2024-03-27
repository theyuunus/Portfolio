import React, { Fragment, useEffect, useState } from "react";
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
import { ProjectsProps } from "../../interfase/Projects";
import axios from "axios";
import { Card } from "../../components/Card/Card";

const Home: React.FC = () => {
    const [projects, setProjects] = useState<ProjectsProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://portfolio-beckend-production.up.railway.app/works');
                setProjects(response.data);
                setLoading(false);
            } catch (error) {
                setError('Unable to fetch projects. Please try again later: ' + error);
            }
        };

        fetchData();
    }, []);
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
                        <section className="home__projects">
                            <div className="home__projects-title">
                                <TitleHr title="projects" />
                                <Link to={"/works"}>View all {'~~>'}</Link>
                            </div>
                            {loading ? (
                                <Text as="h1" className="loading-spinner">Loading...</Text>
                            ) : error ? (
                                <Text as="h1" className="error-message">{error}</Text>
                            ) : (
                                <div className="projects__cards-row">
                                    {projects.slice(0, 3).map((project) => (
                                        <Fragment key={project.id}>
                                            <Card
                                                image={project.img}
                                                languages={project.languages}
                                                title={project.title}
                                                text={project.text}
                                                link={project.link}
                                                demo={project.demo}
                                            />
                                        </Fragment>
                                    ))}
                                </div>
                            )}
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