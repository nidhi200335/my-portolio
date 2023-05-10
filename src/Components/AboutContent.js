import "./AboutContentstyles.css"
import React from 'react'
import { Link } from "react-router-dom"
import pro1 from "../assets/pro1.jpg";
const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
      <h1>Who Am I</h1>
      <p> I m react front-end Devloper . I create Responsive
        secure website for my clients.
      </p>
      <Link to="/contact">
        <button className="btn">Contact</button>
      </Link>
      </div>
      <div className="right">
     <div className="img-container">
        <div className="img-stack top">
            <img src={pro1} className="img" alt="true"/>
        </div>
        <div className="img-stack bottom">
            <img src={pro1} className="img" alt="true"/>
        </div>
     </div>
      </div>
    </div>
  )
}

export default AboutContent
