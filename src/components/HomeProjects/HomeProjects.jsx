import React, { useEffect, useState } from 'react'
import "./HomeProjects.scss"
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import ButtonLive from "../ButtonLive/ButtonLive"

export default function HomeProjects() {
    const [projects, setProjects] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:4040/works`)
                const data = response.data
                setProjects()
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, [])
    return (
        <React.Fragment>
            <div className='container'>
                <div className='homeProjects'>
                    <div className='homeProjects-header'>
                        <div className='homeProjects-header-left'>
                            <h1 className='homeProjects-header-left-h1'>
                                <span className='homeProjects-header-left-h1-span'>#</span>projects
                            </h1>
                            <div className='homeProjects-header-left-line'>

                            </div>
                        </div>
                        <div className='homeProjects-header-right'>
                            <NavLink to={"/works"} className='homeProjects-header-right-a'>
                                View all {`~~>`}
                            </NavLink>
                        </div>
                    </div>
                    <div className='homeProjects-cards'>
                        <div className='homeProjects-cards-card'>
                            {
                                projects ? (
                                    projects.map((projects) => {
                                        <div style={{ alignItems: "start" }}>
                                            <div className="projects-cards-card" key={projects.id}>
                                                <div className="projects-cards-card-images">
                                                    <img
                                                        className="projects-cards-card-images-img"
                                                        src={projects.img && projects.img.length > 0 ? (
                                                            projects.img.startsWith(projects.id)
                                                                ? process.env.PUBLIC_URL + "/images/" + projects.img
                                                                : projects.img
                                                        ) : projects }
                                                        alt=""
                                                    />
                                                </div>
                                                <h3 className="projects-cards-card-h3">{projects.languages}</h3>
                                                <div className="projects-cards-card-bottom">
                                                    <h1 className="projects-cards-card-bottom-h1">{projects.title}</h1>
                                                    <p className="projects-cards-card-bottom-p">{projects.text}</p>
                                                    <div className="projects-cards-card-bottom-buttons">
                                                        {projects.live && projects.live.length > 0 ? (
                                                            <ButtonLive text={"Live <~>"} link={projects.live ? projects.live : null} />
                                                        ) : null}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    })
                                ) : (
                                    <div>
                                        <h1>Loading...</h1>
                                    </div>
                                )
}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
