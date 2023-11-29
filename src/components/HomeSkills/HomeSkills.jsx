import React from 'react'
import "./HomeSkills.scss"
import BackroundLine from "../../images/BackroundLine.png"

export default function HomeSkills() {
    return (
        <React.Fragment>
            <div className="container">
                <div className="HomeAbout-left-top">
                    <h1 className="HomeAbout-left-top-h1">
                        <span className="HomeAbout-left-top-h1-span">#</span>skills
                    </h1>
                    <div>
                        <div className="HomeAbout-left-top-line"></div>
                    </div>
                </div>
                <div className="HomeSkills">
                    <div className="HomeSkills-bottom">
                        <div className="HomeSkills-bottom-left">
                            <div className="HomeSkills-bottom-left-topDiv">
                                <div className="HomeSkills-bottom-left-topDiv-img1"></div>
                                <div className="HomeSkills-bottom-left-topDiv-img2"></div>
                            </div>
                            <div className="HomeSkills-bottom-left-bottomDiv">
                                <img className="HomeSkills-bottom-left-bottomDiv-img1" src={BackroundLine} alt="" />
                                <div className="HomeSkills-bottom-left-bottomDiv-img2"></div>
                                <div className="HomeSkills-bottom-left-bottomDiv-img3"></div>
                            </div>
                        </div>
                        <div className="HomeSkills-bottom-right">
                            <div className="HomeSkills-bottom-right-div1">
                                <h3 className="HomeSkills-bottom-right-div1-h3">Languages</h3>
                                <p className="HomeSkills-bottom-right-div1-p">JavaScript</p>
                            </div>
                            <div className="HomeSkills-bottom-right-div2">
                                <h3 className="HomeSkills-bottom-right-div2-h3">Tools</h3>
                                <p className="HomeSkills-bottom-right-div2-p">VSCode Figma Git (GitHub & GitLab) Font Awesome Canva</p>
                            </div>
                            <div className="HomeSkills-bottom-right-div3">
                                <h3 className="HomeSkills-bottom-right-div3-h3">Other</h3>
                                <p className="HomeSkills-bottom-right-div3-p">HTML CSS EJS SCSS JSON-SERVER REST</p>
                            </div>
                            <div className="HomeSkills-bottom-right-div4">
                                <h3 className="HomeSkills-bottom-right-div4-h3">Frameworks</h3>
                                <p className="HomeSkills-bottom-right-div4-p">React <br /> Bootstrap 5.3 React-Bootstrap Material UI React-Icon</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
