import React from 'react'
import "./HomeHeader.scss"
import personImg from "../../images/PersonImg.png"
import ButtonLive from "../ButtonLive/ButtonLive"
import { Link } from 'react-router-dom'

export default function HomeHeader() {
  const props = {
    text: "Contact me!!"
  }
  return (
    <React.Fragment>
      <div className="container">
        <div className="homeHeader">
          <div className="homeHeader-top">
            <div className="homeHeader-top-left">
              <h1 className="homeHeader-top-left-h1">
                Yunus is a <br />
                HTML - <span className="homeHeader-top-left-h1-span">layout designer</span> and <br />
                <span className="homeHeader-top-left-h1-span">Frontend - developer</span>
              </h1>
              <p className="homeHeader-top-left-p">
                He crafts responsive websites where technologies <br /> meet creativity
              </p>
              <Link to={"contact"}>
                <ButtonLive {...props} />
              </Link>
            </div>
            <div className="homeHeader-top-right">
              <div className="homeHeader-top-right-backImg">

              </div>
              <img className="homeHeader-top-right-img" src={personImg} alt="" />
              <div className="homeHeader-top-right-div">
                <div className="homeHeader-top-right-div-color"></div>
                <p className="homeHeader-top-right-div-p">
                  Currently working on <span className="homeHeader-top-right-div-p-span">Portfolio</span>
                </p>
              </div>
              <div className="homeHeader-top-right-round">

              </div>
            </div>
          </div>
          <div className="homeHeader-quote">
            <div className="homeHeader-quote-top_quote">
              <h1 className="homeHeader-quote-top_quote-h1">
                Victory comes only from Allah, the Mighty, the Wise
              </h1>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
