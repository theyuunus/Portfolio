import React from 'react'
import "./AboutHeader.scss"
import person from "../../images/PersonImg2.png"

export default function AboutHeader() {
    return (
        <React.Fragment>
            <div className="container">
                <div className="AboutHeader">
                    <div className="AboutHeader-top">
                        <h1 className="AboutHeader-top-h1">
                            <span className="AboutHeader-top-h1-span">/</span>about-me
                        </h1> <br />
                        <p className="AboutHeader-top-p">
                            Who am i?
                        </p>
                    </div>
                    <div className="AboutHeader-bottom">
                        <div className="AboutHeader-bottom-right">
                            <div className="AboutHeader-bottom-right-backImg"></div>
                            <p className="AboutHeader-bottom-right-p">
                                Hello, i’m Yunus!

                                I’m a self-taught front-end developer based in Tashkent, Uzbekistan. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.

                                Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
                            </p>
                        </div>
                        <div className="AboutHeader-bottom-left">
                            <img className="AboutHeader-bottom-left-img" src={person} alt="" />
                            <div className="AboutHeader-bottom-left-dots1"></div>
                            <div className="AboutHeader-bottom-left-dots2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
