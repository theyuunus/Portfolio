import { Fragment } from "react/jsx-runtime"
import './About.scss'
import Helmet from "../../components/Helmet/Helmet"
import Container from "../../components/Container/Container"
import { Heading, Title } from "../../components/Title/Title"
import Text from "../../components/Text/Text"
import Person from "../../images/About/Person/Person.png"
import Skills from "../../components/Skills/Skills"

const About: React.FC = () => {
    return (
        <Fragment>
            <Helmet title="About">
                <Container>
                    <div className="about">
                        <div className="about-title">
                            <Heading title="about-me" />
                            <Text className="p-white">
                                Who am i?
                            </Text>
                        </div>
                        <main className="about__main">
                            <Text className="about__main-text">
                                Hello, i’m Yunus!
                                <br /><br />
                                I’m a self-taught front-end developer based in Tashkent, Uzbekistan. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
                                <br /><br />
                                Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
                            </Text>
                            <div className="about__main-img">
                                <img
                                    src={Person}
                                    alt="Person"
                                />
                            </div>
                        </main>
                        <div className="about__skills">
                            <Title title="skills" />
                            <div className="about__skills-row">
                                <Skills />
                            </div>
                        </div>
                    </div>
                </Container>
            </Helmet>
        </Fragment>
    )
}

export default About