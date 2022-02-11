import React from "react";
import './funnel.scss'

type VacancyCard = {
    status: string,
    step: string,
    nameStep: string
}

const Vacancy = ({status, step, nameStep }: VacancyCard) => {
    return (
        <div className={"vacancy"}>
            <div className={"vacancy-item vacancy-column"} >
                <p>Vacancy</p>
                <p className={"vacancy-status"}>{status}</p>
            </div>
            <img className={"vacancy-column"} src={require("../../assets/funnel-image/devider.png")} alt={""}/>
            <div className={"vacancy-column"}>
                <div className={"vacancy-item"} >{step}</div>
                <div className={"vacancy-item name-step"} >{nameStep}</div>
            </div>

        </div>
    )
}

export default Vacancy



