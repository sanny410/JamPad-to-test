import React from "react";
import WelcomeJoin from "./welcome-join";
import WelcomeLogin from "./welcome-login";
import "./welcome.scss"


const WelcomePanel = () => {

    return (
        <div className="welcome_panel">
            <WelcomeJoin />
            <WelcomeLogin />
        </div>
    )
}

export default WelcomePanel;