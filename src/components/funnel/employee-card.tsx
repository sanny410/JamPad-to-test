import React from "react";
import './funnel.scss'

type Employee = {
    score: string,
    name: string
}

const EmployeeCard = ({score, name}: Employee) => {
    return (
        <div className={"leader-card"}>
            <p className={"score"}>{score}%</p>
            <p className={"state"}>Success rate</p>
            <p>{name}</p>
            <div className={"links"}>
                <a href={""}>Profile</a>
                <a href={""}>Results</a>
            </div>
        </div>
    )
}


const EmployeeCardNotLeader = ({score, name}: Employee) => {
    return (
        <div className={"notLeader-card"}>
            <div className={"score"}>{score}%</div>
            <div>
                <div className={"notLeader-card-info"}>
                    <div className={"name"}>{name}</div>
                    <div>
                        <a href={""}>Profile</a>
                        <a href={""}>Results</a>
                    </div>

                </div>
                <div>
                    <img src={require("../../assets/funnel-image/frame.png")}/>
                </div>
            </div>

        </div>
    )
}

export {EmployeeCard, EmployeeCardNotLeader}


