import React from "react";
import './funnel.scss'

const Header = () => {
    return (
        <header className={"header"}>
            <img id={"logo"} src={require("../../assets/funnel-image/logo.png")} alt=""/>
            <nav>
                <ul className={"menu"}>
                    <a href={""}><li className={"menu-item"}>Dashboard</li></a>
                    <a href={""}><li className={"menu-item"}>Vacancies</li></a>
                    <a href={""}><li className={"menu-item"}>Testings</li></a>
                </ul>
            </nav>
            <div className="name-of-user">
                <img src={require("../../assets/funnel-image/notification.png")} alt=""/>
                <p>Alex Smith</p>
            </div>
        </header>
    )
}

export default Header;