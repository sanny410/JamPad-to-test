import React from "react";
import './funnel.scss'
import Vacancy from "./vacancy-card";
import OpenVacancies from "./open-vacancy";

const Vacancies = () => {
    return (
        <div className={"vacancies"}>
            <div className={"about-vacancy"}>
                <h3 className={"funnel-subtitle"}>Vacancy</h3>
                <h2 className={"funnel-title"}>System Administrator</h2>
                <Vacancy status={"Open"} step={"Step 1"} nameStep={"Resume Screening"}/>
                <div className={"buttons"}>
                    <button id={"btn-edit-funnel"}>Edit funnel</button>
                    <button id={"btn-download-report"}>Download report</button>
                </div>
            </div>
            <OpenVacancies />
        </div>
)
}

export default Vacancies