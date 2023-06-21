import React from "react"
import "../Style/Navbar.css"

function Navbar() {
  return (
    <div id="Navbar">
      <header>
        <h2>:Denty</h2>
        <nav>
        
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Doctors</a>
        <a href="#">Gallery</a>
        <a href="#">Blog</a>
        <a href="#">Contact Us</a>
        <button className="btn"> Book Now</button>
        </nav>
      </header>
    </div>
      
       
  )
}

export default Navbar