import React, { useEffect, useState } from 'react';
import './SmallProjects.scss';
import ButtonLive from '../ButtonLive/ButtonLive';
import axios from 'axios';

export default function SmallProjects() {
    const [smallWork, setSmallWork] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:4040/smallWroks`);
                const data = response.data;
                setSmallWork(data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

    return (
        <React.Fragment>
            <div className="container">
                <div className="smallProjects">
                    <h1 className="smallProjects-h1">
                        <span className="smallProjects-h1-span">#</span>small-projects
                    </h1>
                    <div className="smallProjects-cards">
                        {smallWork ? (
                            smallWork.map((work) => (
                                <div className="smallProjects-cards-card" key={work.id}>
                                    <div className="smallProjects-cards-card-top">
                                        <p className="smallProjects-cards-card-top-p">
                                            {work.languages}
                                        </p>
                                    </div>
                                    <div className="smallProjects-cards-card-bottom">
                                        <h1 className="smallProjects-cards-card-bottom-h1">
                                            {work.title}
                                        </h1>
                                        <p className="smallProjects-cards-card-bottom-p">
                                            {work.text}
                                        </p>
                                        <ButtonLive text={"Github <~>"} link={work.codes} />
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="smallProjects-cards-div">
                                <h1 className="smallProjects-cards-div-h1">
                                    Loading...
                                </h1>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}