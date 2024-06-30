import React, { Fragment } from "react";

// scss
import './Works.scss';

// helmet
import { Helmet } from "react-helmet";

// components
import Container from "../../components/Container/Container";
import { Heading, Title } from "../../components/Title/Title";
import Text from "../../components/Text/Text";
import { Card, SmallCard } from "../../components/Card/Card";

// assets
import { SmallWorks, Works } from "../../assets";

const Projects: React.FC = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Yunus | Works</title>
            </Helmet>

            <Container>
                <div className="projects">

                    <div className="projects-title">
                        <Heading title="projects" />

                        <Text className="p-white">
                            List of my projects
                        </Text>
                    </div>

                    {Works ? (
                        <div className="projects__cards-row">
                            {Works.map((work) => (
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
                </div>

                <div className="small__projects">
                    <Title title="small-projects" />

                    <div className="projects__cards">
                        {SmallWorks ? (
                            <div className="projects__cards-row">
                                {SmallWorks.map((smallWork) => (
                                    <Fragment key={smallWork.id}>
                                        <SmallCard
                                            languages={smallWork.languages}
                                            title={smallWork.title}
                                            text={smallWork.text}
                                            demo={smallWork.demo}
                                        />
                                    </Fragment>
                                ))}
                            </div>
                        ) : <Text as="h1" className="loading-spinner">Loading...</Text>}
                    </div>
                </div>
            </Container>
        </Fragment>
    );
};

export default Projects;
