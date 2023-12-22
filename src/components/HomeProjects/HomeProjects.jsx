import React, { useEffect, useState } from 'react'
import "./HomeProjects.scss"
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import ButtonLive from "../ButtonLive/ButtonLive"
import ButtonDemo from "../ButtonDemo/ButtonDemo"
import NotFound from "../../images/404.png"

export default function HomeProjects() {
    // const [projects, setProjects] = useState(null)

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get(`http://localhost:4040/works`)
    //             const data = response.data
    //             setProjects(data)
    //         } catch (error) {
    //             console.error(error)
    //         }
    //     }
    //     fetchData()
    // }, [])

    const [work, setWork] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:4040/works`)
                const data = response.data
                setWork(data)
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
                        <div className='homeProjects-cards-dots'></div>
                        <div className='homeProjects-cards-card'>
                            {
                                projects ? (
                                    projects.map((project) => {
                                        <div style={{ alignItems: "start" }}>
                                            <div className="projects-cards-card" key={project.id}>
                                                <div className="projects-cards-card-images">
                                                    <img
                                                        className="projects-cards-card-images-img"
                                                        src={project.img && project.img.length > 0 ? (
                                                            project.img.startsWith(project.id)
                                                                ? process.env.PUBLIC_URL + "/images/" + project.img
                                                                : project.img
                                                        ) : project}
                                                        alt=""
                                                    />
                                                </div>
                                                <h3 className="projects-cards-card-h3">{project.languages}</h3>
                                                <div className="projects-cards-card-bottom">
                                                    <h1 className="projects-cards-card-bottom-h1">{project.title}</h1>
                                                    <p className="projects-cards-card-bottom-p">{project.text}</p>
                                                    <div className="projects-cards-card-bottom-buttons">
                                                        {project.live && project.live.length > 0 ? (
                                                            <ButtonLive text={"Live <~>"} link={project.live ? project.live : null} />
                                                        ) : null}
                                                        {project.codes && project.codes.length > 0 ? (
                                                            <ButtonDemo text={"Cached >="} link={project.codes} />
                                                        ) : null}
                                                    </div>
                                                </div>
                        {work ? (
                            work.slice(0, 6).map((work) => (
                                <div style={{ alignItems: "start" }}>
                                    <div className="projects-cards-card" key={work.id}>
                                        <div className="projects-cards-card-images">
                                            <img
                                                className="projects-cards-card-images-img"
                                                src={work.img && work.img.length > 0 ? (
                                                    work.img.startsWith(work.id)
                                                        ? process.env.PUBLIC_URL + "/images/" + work.img
                                                        : work.img
                                                ) : NotFound}
                                                alt=""
                                            />
                                        </div>
                                        <h3 className="projects-cards-card-h3">{work.languages}</h3>
                                        <div className="projects-cards-card-bottom">
                                            <h1 className="projects-cards-card-bottom-h1">{work.title}</h1>
                                            <p className="projects-cards-card-bottom-p">{work.text}</p>
                                            <div className="projects-cards-card-bottom-buttons">
                                                {work.live && work.live.length > 0 ? (
                                                    <ButtonLive text={"Live <~>"} link={work.live ? work.live : null} />
                                                ) : null}
                                                {work.codes && work.codes.length > 0 ? (
                                                    <ButtonDemo text={"Cached >="} link={work.codes} />
                                                ) : null}
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>

                                </div>
                            ))
                        ) : (
                            <div className="projects-cards-div">
                                <h1 className="projects-cards-div-h1">
                                    Loading...
                                </h1>
                            </div>
                        )
                        }
                        <div className='homeProjects-cards-rectangle'></div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
