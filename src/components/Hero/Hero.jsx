import React from "react";
import Img1 from "../Img/img1.jpg"
import "../Style/Hero.css"

function Hero () {
    return (
        <section id="Hero">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
              <p>lorem ipsun is happiy shori and the shoping discon industri lorem ipsun is happiy shori and the shoping Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div className="col">
            <img src={Img1} alt="image 1" />
          </div>
        </div>
      </div>
    </section>
    )
}

export default Hero;