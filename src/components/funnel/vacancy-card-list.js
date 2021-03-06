import React from "react";
import './funnel.scss'


const OpenVacancy = ({vacancy, step, nameStep }) => {
    return (
        <div className={"vacancy-list-card"}>
            <img className={"icon-arrow-left"} src={require("../../assets/funnel-image/arrow-left.png")} alt={""} />
            <div className={"vacancy-open-info"}>
                <div className={"vacancy-name"}>{vacancy}</div>
                <div className={"vacancy-step"}>Step {step}: {nameStep}</div>
            </div>
        </div>
    )
}

export default OpenVacancy