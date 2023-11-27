import React from 'react'
import "./AboutFacts.scss"
import Img from "../../images/BackroundLine.png"

export default function AboutFacts() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="AboutFacts">
          <h1 className="AboutFacts-h1">
            <span className="AboutFacts-h1-span">#</span>my-fun-facts
          </h1>
          <div className="AboutFacts-bottom">
            <div className="AboutFacts-bottom-left">
              <div className="AboutFacts-bottom-left-backImg"></div>
              <div className="AboutFacts-bottom-left-cart">
                <p className="AboutFacts-bottom-left-cart-p">
                  I like summer more than winter
                </p>
              </div>
              <div className="AboutFacts-bottom-left-cart">
                <p className="AboutFacts-bottom-left-cart-p">
                  I often bike with my friends
                </p>
              </div>
              <div className="AboutFacts-bottom-left-cart">
                <p className="AboutFacts-bottom-left-cart-p">
                  I like plov and pizza
                </p>
              </div>
              <div className="AboutFacts-bottom-left-cart">
                <p className="AboutFacts-bottom-left-cart-p">
                  I was only in uzbekistan
                </p>
              </div>
              <div className="AboutFacts-bottom-left-cart">
                <p className="AboutFacts-bottom-left-cart-p">
                  I seldom see movies
                </p>
              </div>
              <div className="AboutFacts-bottom-left-cart">
                <p className="AboutFacts-bottom-left-cart-p">
                  I am still in school
                </p>
              </div>
            </div>
            <div className="AboutFacts-bottom-right">
              <div className="AboutFacts-bottom-right-dots"></div>
              <img className="AboutFacts-bottom-right-img" src={Img} alt="" />
              <div className="AboutFacts-bottom-right-dots2"></div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
