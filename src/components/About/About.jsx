import React from "react";
import Img2 from "../Img/img2.png"
import "../Style/About.css"

function About () {

    return (
        <div id="About">
            <div className="Container">
            <div className="rows">
                <div className="cols">
                    <img src={Img2} alt="image 2" />
                </div>
                <div className="col">
                <div className="card">
                <h2>Dental Center, Aliquam Finibus vitae lectusnec ultricies orbi consequat.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos commodi minima illum assumenda ipsum laboriosam dolorem? Praesentium sapiente Dignissimos </p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi reprehenderit doloribus animi, commodi fugiat autem repudiandae! Maiores numquam quibusdam provident voluptate nemo. Tenetur, delectus Lorem.</p>
                </div>
                    
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default About;