import React from 'react'
import "./About.css";
import { Link } from 'react-router-dom'
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

function About() {
  return (
    <div className="about">
        <div className="about__header">
            <div className="aboutPage__option">
                <Link className="aboutPage__optionMain no-cursor" to="/about">About
                <img className="aboutPage__optionImage" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="" />
                <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
                </Link>
            </div>
            <div className="aboutPage__option underline">
                <Link className="no-cursor" to="/about">About</Link>
            </div>
            <div className="aboutPage__option">
                <Link className="no-cursor" to="/">Google in the U.S.</Link>
            </div>
            <div className="aboutPage__option">
                <Link className="no-cursor" to="/">Products</Link>
            </div>
            <div className="aboutPage__option">
                <Link className="no-cursor" to="/">Commitments</Link>
            </div>
            <div className="aboutPage__option">
                <Link className="no-cursor" to="/">Stories</Link>
            </div>
            <div className="aboutPage__option">
                <Link className="no-cursor" to="/">The Keyword</Link>
            </div>
        </div>

        <div className="aboutPage__body">
            <h1 className="aboutPage__bodyTitle">
            Our mission is to <span className="blue">organize</span> the world’s <span className="red">information</span> and make it <span className="green">universally accessible</span> and <span className="yellow">useful</span>.
            </h1>
            <img className="aboutPage__bodyImage" src="https://lh3.googleusercontent.com/4vIWhSoCMzWHL20aDe5EGrv5EypSOWfQjoeBfA9Z32YCinijg5J0S1Sn6FN2uTgbm_A0X0khZHn3Btl2djAqyaXjXpHyADHl4mnlIbc0GRutLqLENkU=w1440-l90-sg-rj-c0xffffff" alt="" />
            <h2 className='aboutPage__bodyImageDesc'>Look back on 2022 through the Search trends that reveal the questions, people, and moments that captured the world's attention</h2>
        </div>
    </div>
  )
}

export default About