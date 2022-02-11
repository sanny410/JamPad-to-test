import React from "react";
import Header from "./header";
import './funnel.scss'
import FunnelBoard from "./funnel-board";
import Vacancies from "./vacancies";

const Funnel = () => {
    return (
        <div className={"funnel-main"}>
            <Header />
            <div className={"funnel-main-page"}>
                <FunnelBoard />
                <Vacancies />
            </div>

        </div>
    )
}

export default Funnel;