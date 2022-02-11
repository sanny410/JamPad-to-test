import React from "react";
import './funnel.scss'
import OpenVacancy from "./vacancy-card-list";

const OpenVacancies = () => {
    return (
        <div className={"open-vacancies"}>
            <div className={"open-vacancies-title"}>
                <h2 className={"funnel-title"}>Open vacancy</h2>
                <div>
                    <input placeholder={"Search"} type={"text"} id={"search-vacancy"}/>
                    <img src={require("../../assets/funnel-image/line-min.png")} alt={""}/>
                </div>
                <img id={"icon-lupa"} src={require("../../assets/funnel-image/lupa.png")} alt={""}/>
            </div>
            <div className={"vacancy-list"}>
                <OpenVacancy step={"1"} vacancy={"General Manager"} nameStep={"Screening resume"}/>
                <OpenVacancy step={"4"} vacancy={"System Administrator"} nameStep={"Soft Skills "}/>
                <OpenVacancy step={"1"} vacancy={"General Manager"} nameStep={"Screening resume"}/>
                <OpenVacancy step={"1"} vacancy={"General Manager"} nameStep={"Screening resume"}/>
            </div>
            <button id={"btn-new-vacancy"}>+ New vacancy</button>
        </div>
)
}

export default OpenVacancies