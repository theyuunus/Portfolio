import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import './Projects.scss';
import Helmet from "../../components/Helmet/Helmet";
import Container from "../../components/Container/Container";
import { Heading, Title } from "../../components/Title/Title";
import Text from "../../components/Text/Text";
import { Card, SmallCard } from "../../components/Card/Card";
import { ProjectsProps } from "../../interfase/Projects";

const Projects: React.FC = () => {
    const [projects, setProjects] = useState<ProjectsProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<ProjectsProps[]>('https://portfolio-beckend-production.up.railway.app/works');
                setProjects(response.data);
            } catch (error) {
                setError('Unable to fetch projects. Please try again later: ' + error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <Fragment>
            <Helmet title="Works">
                <Container>
                    <div className="projects">
                        <div className="projects-title">
                            <Heading title="projects" />
                            <Text className="p-white">
                                List of my projects
                            </Text>
                        </div>
                        {loading ? (
                            <Text as="h1" className="loading-spinner">Loading...</Text>
                        ) : error ? (
                            <Text as="h1" className="error-message">{error}</Text>
                        ) : (
                            <div className="projects__cards">
                                <Title title="complete-apps" />
                                <div className="projects__cards-row">
                                    {projects.slice(0, 1).map((project) => (
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
                            </div>
                        )}
                    </div>
                    <div className="small__projects">
                        <Title title="small-projects" />
                        <div className="projects__cards-row">
                            {loading ? (
                                <Text as="h1" className="loading-spinner">Loading...</Text>
                            ) : error ? (
                                <Text as="h1" className="error-message">{error}</Text>
                            ) : (
                                <div className="projects__cards">
                                    <Title title="small-projects" />
                                    <div className="projects__cards-row">
                                        {projects.slice(2, 5).map((smallProject) => (
                                            <Fragment key={smallProject.id}>
                                                <SmallCard
                                                    languages={smallProject.languages}
                                                    title={smallProject.title}
                                                    text={smallProject.text}
                                                    demo={smallProject.demo}
                                                />
                                            </Fragment>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </Container>
            </Helmet>
        </Fragment>
    );
};

export default Projects;
