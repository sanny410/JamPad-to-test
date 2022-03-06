import React from "react";
import WelcomeJoin from "./welcome-join";
import WelcomeLogin from "./welcome-login";
import "./welcome.scss"
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";


const WelcomePanel = () => {
    // const isAuth = useSelector(state => state.funnel.isAuth);
    // const navigate = useNavigate();
    //
    // if (isAuth) {
    //     navigate('/funnel')
    // }

    return (
        <div className="welcome_panel">
            <WelcomeJoin />
            <WelcomeLogin />
        </div>
    )
}

export default WelcomePanel;