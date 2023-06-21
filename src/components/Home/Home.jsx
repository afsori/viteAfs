import React from "react";
import "../Style/Home.css"
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import Services from "../Services/Services";

function Home() {
    return (
        <body>
            <div className="Home">
            <Navbar />
            <Hero />
            <div className="About">
              <About />
            </div>
            <div className="Services">
                <Services />
            </div>
        </div>
        </body>
        
    )
}

export default Home;