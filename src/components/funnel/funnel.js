import React from "react";
import Header from "./header";
import './funnel.scss'
import Leaderboard from "./funnel-board";
import Vacancies from "./vacancies";
import FunnelProgressStatistics from "./funnel_progress_statistics";
import OpenVacancies from "./open-vacancy";

const Funnel = () => {
    return (
        <div className={"funnel-main"}>
            <Header />
            {/*<div className={"funnel-main-page"}>*/}
                <FunnelProgressStatistics />
                <Leaderboard />
                <Vacancies />
                <OpenVacancies />
            </div>
        // </div>
    )
}

export default Funnel;