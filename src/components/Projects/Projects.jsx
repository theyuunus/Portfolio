import React, { useEffect, useState } from 'react'
import "./Projects.scss"
import axios from 'axios'
import ButtonLive from "../ButtonLive/ButtonLive"
import ButtonDemo from '../ButtonDemo/ButtonDemo'
import NotFound from "../../images/404.png"

export default function Projects() {
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
            <div className="container">
                <div className="projects">
                    <div className="projects-header">
                        <div className="projects-header-top">
                            <h1 className="projects-header-top-h1">
                                <span className="projects-header-top-h1-span">/</span>projects
                            </h1> <br />
                            <p className="projects-header-top-p">
                                List of my projects
                            </p>
                        </div>
                        <div className="projects-header-bottom">
                            <h1 className="projects-header-bottom-h1">
                                <span className="projects-header-bottom-h1-span">#</span>complete-apps
                            </h1>
                        </div>
                    </div>
                    <div className="projects-cards">
                        {work ? (
                            work.map((work) => (
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
                            ))
                        ) : (
                            <div>Loading...</div>
                        )
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
