import React from "react";
import './welcome.scss'

const WelcomeJoin = () => {
    return (
        <div className="welcome-join">
            <img id="logo" src={require("../../assets/svg/logo.png")} alt=""/>
            <h1 className="welcome-title">Welcome</h1>
            <p className="about-jampad"><b>JamPad</b> is a service for automating the evaluation of employees and candidates!</p>
            <p className="go-join">If you are not part of our community, feel free to sign up</p>
            <button className="btn-join">Join</button>
        </div>
    )
}

export default WelcomeJoin;