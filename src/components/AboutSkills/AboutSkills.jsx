import React from 'react'
import "./AboutSkills.scss"

export default function AboutSkills() {
    return (
        <React.Fragment>
            <div className="container">
                <div className="AboutSkills">
                    <h1 className="AboutSkills-h1">
                        <span className="AboutSkills-h1-span">#</span>skills
                    </h1>
                    <div className="AboutSkills-card">
                        <div className="HomeSkills-bottom-right-div1">
                            <h3 className="HomeSkills-bottom-right-div1-h3">Languages</h3>
                            <p className="HomeSkills-bottom-right-div1-p">JavaScript</p>
                        </div>
                        <div className="HomeSkills-bottom-right-div3">
                            <h3 className="HomeSkills-bottom-right-div3-h3">Other</h3>
                            <p className="HomeSkills-bottom-right-div3-p">HTML CSS EJS SCSS JSON-SERVER REST</p>
                        </div>
                        <div className="HomeSkills-bottom-right-div2">
                            <h3 className="HomeSkills-bottom-right-div2-h3">Tools</h3>
                            <p className="HomeSkills-bottom-right-div2-p">VSCode Figma Git (GitHub & GitLab) Font Awesome Canva</p>
                        </div>
                        <div className="HomeSkills-bottom-right-div2">
                            <h3 className="HomeSkills-bottom-right-div2-h3">Databases</h3>
                            <p className="HomeSkills-bottom-right-div2-p">SQLite PostgreSQL Mongo</p>
                        </div>
                        <div className="HomeSkills-bottom-right-div4">
                            <h3 className="HomeSkills-bottom-right-div4-h3">Frameworks</h3>
                            <p className="HomeSkills-bottom-right-div4-p">React <br /> Bootstrap 5.3 React-Bootstrap Material UI React-Icon</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
