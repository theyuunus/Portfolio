import React from 'react'
import "./HomeAbout.scss"
import PersonImg from "../../images/PersonImg2.png"

export default function HomeAbout() {
    return (
        <div className="container">
            <div className="HomeAbout">
                <div className="HomeAbout-left">
                    <div className="HomeAbout-left-top">
                        <h1 className="HomeAbout-left-top-h1">
                            <span className="HomeAbout-left-top-h1-span">#</span>about-me
                        </h1>
                        <div>
                            <div className="HomeAbout-left-top-line"></div>
                        </div>
                    </div>
                    <div className="HomeAbout-left-middle">
                        <div className="HomeAbout-left-middle-backImg">

                        </div>
                        <p className="HomeAbout-left-middle-p">
                            Hello, i’m Yunus!
                            <br /> <br />
                            I’m a self-taught front-end developer based in Tashkent, Uzbekistan. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
                            <br /> <br />
                            Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
                        </p>
                    </div>
                </div>
                <div className="HomeAbout-right">
                    <div className="HomeAbout-right-dots"></div>
                    <img className="HomeAbout-right-img" src={PersonImg} alt="" />
                    <div className="HomeAbout-right-dot"></div>
                </div>
            </div>
        </div>
    )
}
