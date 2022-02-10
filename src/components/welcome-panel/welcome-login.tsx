import React from "react";
import {postData} from "../services";



const WelcomeLogin = () => {
    console.log(postData("https://api.jampad.ml/api/hrs/login", {
        "email": "hr@gmail.com",
        "password": "12345678qQ"
    }));
    return (
            <div className="authorization-form">
                <form className="form-login">
                    <h2 className="login-title">Authorization</h2>
                        <label> Your email</label>
                    <div className="input-login">
                        <input type="email" minLength={5} maxLength={320} placeholder="example@example.com" />
                        <img className="icon" src={require("../../assets/svg/email.png")}/>
                    </div>
                        <img className="line" src={require("../../assets/svg/line.png")} alt=""/>
                        <label> Your password</label>
                        <div className="input-login">
                            <input type="password" minLength={6} maxLength={30} placeholder="*******" />
                            <img className="icon" src={require("../../assets/svg/eye.png")}/>
                            </div>
                        <img className="line" src={require("../../assets/svg/line.png")} alt=""/>
                    <button id="submit-authorization-form">Log in</button>
                </form>
            </div>
    )
}

export default WelcomeLogin;