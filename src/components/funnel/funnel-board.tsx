import React from "react";
import './funnel.scss'
import {EmployeeCard, EmployeeCardNotLeader} from "./employee-card";


const FunnelBoard = () => {
    return (
        <div className={"funnel-information"}>
            <div className={"funnel-progress-statistics"}>
                <div className={"progress-statistics"}>
                    <div className={"title-block"}>
                        <h2 className={"funnel-title"}>Funnel-progress statistics</h2>
                    </div>
                    <img id={"graph"} src={require("../../assets/funnel-image/graph.jpg")} alt={""}/>
                </div>
                <div className={"current-stage-info"}>
                <h3 className={"funnel-subtitle"}>At the current stage:</h3>
                <div className={"current-stage"}>
                    <div className={"current-stage-item"}>
                        <div>
                            <img className={"icon"} src={require("../../assets/funnel-image/icone-passed.png")} alt={""}/>
                        </div>
                        <div className={"col"}>
                            <p className={"score"}>
                                77
                            </p>
                            <p className={"state"}>
                                Passed
                            </p>
                        </div>
                    </div>
                    <div className={"current-stage-item"}>
                        <div>
                            <img className={"icon"} src={require("../../assets/funnel-image/icon-unsuccerssful.png")} alt={""}/>
                        </div>
                        <div className={"col"}>
                            <p className={"score"}>
                                707
                            </p>
                            <p className={"state"}>
                                Unsuccessful
                            </p>
                        </div>
                    </div>
                    <div className={"current-stage-item"}>
                        <div>
                            <img className={"icon"} src={require("../../assets/funnel-image/icon-overal.png")} alt={""}/>
                        </div>
                        <div className={"col"}>
                            <p className={"score"}>
                                784
                            </p>
                            <p className={"state"}>
                                Overall
                            </p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className={"leaderboard"}>
                <h2 className={"funnel-title"}>Leaderboard</h2>
                <h3 className={"funnel-subtitle"}>Three best-performing candidates are:</h3>
                <div className={"leaderboard-rate"}>
                    <div className={"leader-employees"}>
                        <EmployeeCard score={"97"} name={"John Smith"}/>
                        <EmployeeCard score={"83"} name={"Mitchel Darras"}/>
                        <EmployeeCard score={"71"} name={"Sofia Linder"}/>
                    </div>
                    <div className={"not-leader"}>
                        <h3 className={"funnel-subtitle"}>Also: </h3>
                        <EmployeeCardNotLeader score={"65"} name={"Saad Beil"}/>
                        <EmployeeCardNotLeader score={"58"} name={"Nimra Carty"}/>
                        <EmployeeCardNotLeader score={"52"} name={"Ada Wagner"}/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FunnelBoard