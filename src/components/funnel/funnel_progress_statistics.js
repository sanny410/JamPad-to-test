import React from "react";
import FunnelStatistics from "./funnelStatistics";

const FunnelProgressStatistics = () => {
    return (
        <div className={"funnel-progress-statistics"}>
            <div className={"progress-statistics"}>
                <div className={"title-block"}>
                    <h2 className={"funnel-title"}>Funnel-progress statistics</h2>
                </div>
                <img id={"graph"} src={require("../../assets/funnel-image/graph.jpg")} alt={""}/>
            </div>
            <div className={"current-stage-info"}>
                <h3 className={"funnel-subtitle"}>At the current stage:</h3>
                <FunnelStatistics />
            </div>
        </div>
    )
}

export default FunnelProgressStatistics;