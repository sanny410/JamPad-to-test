import React from "react";
import "../funnel/funnel.scss"
import "./dashboard.scss"

const StageCard = ({icon, nameStage }) => {
    return (
        <div className={"stage"}>
            <img className={"icon-stage"} src={require(`../../assets/dashboard/${icon}.png`)} alt={""}/>
            <p>{nameStage}</p>
        </div>
    )
}

export default StageCard
