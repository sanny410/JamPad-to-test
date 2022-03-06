import React from "react";
import './funnel.scss'
import OpenVacancies from "./open-vacancy";
import Vacancy from "./vacancy-card";

const Vacancies = () => {
    return (
        <div className={"vacancies"}>
            <h3 className={"funnel-subtitle"}>Vacancy</h3>
                    <Vacancy />
                <div className={"buttons"}>
                    <button id={"btn-edit-funnel"}>Edit funnel</button>
                    <button id={"btn-download-report"}>Download report</button>
                </div>
        </div>
    )
}

export default Vacancies