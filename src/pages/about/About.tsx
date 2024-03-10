import { Fragment } from "react/jsx-runtime"
import './About.scss'
import Helmet from "../../components/Helmet/Helmet"
import Container from "../../components/Container/Container"
import { Heading, Title } from "../../components/Title/Title"
import Text from "../../components/Text/Text"
import AboutPerson from "../../images/Person/Person-2/Person-2.png"
import Skills from "../../components/Skills/Skills"
import Logo from "../../images/Logo-2/logo.png"

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
                                    src={AboutPerson}
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
                        <div className="about__facts">
                            <Title title="my-fun-facts" />
                            <div className="about__facts-row">
                                <div className="about__facts-row-wrap">
                                    <Text className="about__facts-row-wrap-text">I like <span className="about__facts-row-wrap-text-span">summer</span> more than <span className="about__facts-row-wrap-text-span">winter</span></Text>
                                    <Text className="about__facts-row-wrap-text">I sometimes hang out with my friends</Text>
                                    <Text className="about__facts-row-wrap-text">I am still in school</Text>
                                    <Text className="about__facts-row-wrap-text">I often play <span className="about__facts-row-wrap-text-span">football</span> with my friends</Text>
                                    <Text className="about__facts-row-wrap-text">I favorite food is <span className="about__facts-row-wrap-text-span">plov</span></Text>
                                </div>
                                <div className="about__facts-row-img">
                                    <img src={Logo} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Helmet>
        </Fragment>
    )
}

export default About