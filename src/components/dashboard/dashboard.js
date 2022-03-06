import React from "react";
import Header from "../funnel/header";
import "../funnel/funnel.scss"
import "./dashboard.scss"
import StageCard from "./stage-card";

const Dashboard = () => {
    return (
        <div className={"dashboard-main"}>
            <Header />
            <div className={"funnel"}>
            </div>
            <div className={"dashboard-about-vacancy"}>
                <div className={"vacancy-description"}>
                    <h3 className={"funnel-subtitle"}>Vacancy</h3>
                    <h2 className={"funnel-title"}>System Administrator</h2>
                    <h3 className={"funnel-subtitle"}>Description:</h3>
                    <p className={"description"}>Here you will see the description for the item of your choice</p>
                    <button id={"save-changes-btn"}>Save changes</button>
                </div>
                <div className={"selection-stages"}>
                    <div className={"open-vacancies-title"}>
                        <h2 className={"funnel-title"}>Components</h2>
                        <div>
                            <input placeholder={"Search"} type={"text"} id={"search-vacancy"}/>
                            <img src={require("../../assets/funnel-image/line-min.png")} alt={""}/>
                        </div>
                        <img id={"icon-lupa"} src={require("../../assets/funnel-image/lupa.png")} alt={""}/>
                    </div>
                    <div className={"open-vacancies-stages"}>
                        <h3 className={"funnel-subtitle"}>Interview</h3>
                        <div className={"stages"}>
                            <StageCard icon={"person-icon"} nameStage={"Basic Interview"}/>
                            <StageCard icon={"man-plus-icon"} nameStage={"Interview with others"}/>
                            <StageCard icon={"man-plus-icon"} nameStage={"Group Interview"}/>
                            <StageCard icon={"icon-man-done"} nameStage={"AI-video interview"}/>
                        </div>
                    </div>
                </div>
                </div>
            </div>
    )
}

export default Dashboard;