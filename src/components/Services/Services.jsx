import React from "react";
import "../Style/Services.css"
import Img3 from "../Img/img3.png"
import gg1 from "../Img/gigi1.jpeg"
import gg2 from "../Img/gigi2.jpeg"
import gg3 from "../Img/gg3.jpg"
import gg4 from "../Img/gg4.jpg"
import gg5 from "../Img/gg5.jpg"
import gg6 from "../Img/gg6.jpeg"

function Services () {

    return (

        <div id="Services">
            <div className="ContaineR">
                <div className="row">
                    <div className="coll">
                        <h2>Our Services</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum dolor blanditiis natus maxime ipsa facere doloremque,</p>
                        <button>Enter</button>
                        <img src={Img3} alt="gambar gigi" />
                    </div>
                    </div>
                <div className="Cardd">
                    <div className="gigi">
                    <div className="Gambar">
                        <img src={gg1} alt="Gigi 1" />
                        <h4>Orthodontics</h4>
                    </div>
                    <div className="Gambar">
                        <img src={gg2} alt="gambar Gigi 2" />
                        <h4 className="gg2">Sensitive Teeth</h4>
                        <p className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>
                    <div className="Gambar">
                        <img src={gg3} alt="gambar gigi 3" />
                        <h4>Teeth Cleaning</h4>
                    </div>
                    </div>
                    <div className="gigi">
                    <div className="Gambar">
                        <img src={gg4} alt="gambar gigi 4" />
                        <h4>Teeth Whitning</h4>
                    </div>
                    <div className="Gambar">
                        <img src={gg5} alt="gambar gigi 5" />
                        <h4>Dental Implants</h4>
                    </div>
                    <div className="Gambar">
                        <img src={gg6} alt="gambar gigi 6" />
                        <h4>Chickdren Teeth</h4>
                    </div>
                    </div> 
                    
                    </div>
                    
            </div>
        </div>
    )
}

export default Services;