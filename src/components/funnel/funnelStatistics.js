import React from "react";
import './funnel.scss'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {FunnelStatisticsLoad} from "../../store/actions";
import axios from "axios";


const FunnelStatistics = () => {

    const dispatch = useDispatch();
    const stat = useSelector(state => state.funnel.statistics);
    const {passed, unsuccessful, overall} = stat;

    const statisticsLoad = async()  => {
        const response = await axios
            .get('https://api.jampad.ml/api/statistics/funnel', {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImhyQGdtYWlsLmNvbSIsImV4cCI6MTY1NDExMjc4NH0.9H8LsfiAHytxnrKeEciOE_BfMFftFd8BIYarWYodu8Y'
                }
            })
            .catch((err) => {
                console.log("Err", err)
            })

        dispatch(FunnelStatisticsLoad(response.data))
    }

    useEffect(() => {
        statisticsLoad()
    }, []);


    return (
        <div className={"current-stage"}>
            <div className={"current-stage-item"}>
                <div>
                    <img className={"icon"} src={require("../../assets/funnel-image/icone-passed.png")}
                         alt={""}/>
                </div>
                <div className={"col"}>
                    <p className={"score"}>
                        {passed}
                    </p>
                    <p className={"state"}>
                        Passed
                    </p>
                </div>
            </div>
            <div className={"current-stage-item"}>
                <div>
                    <img className={"icon"}
                         src={require("../../assets/funnel-image/icon-unsuccerssful.png")} alt={""}/>
                </div>
                <div className={"col"}>
                    <p className={"score"}>
                        {unsuccessful}
                    </p>
                    <p className={"state"}>
                        Unsuccessful
                    </p>
                </div>
            </div>
            <div className={"current-stage-item"}>
                <div>
                    <img className={"icon"} src={require("../../assets/funnel-image/icon-overal.png")}
                         alt={""}/>
                </div>
                <div className={"col"}>
                    <p className={ "score"}>
                        {overall}
                    </p>
                    <p className={"state"}>
                        Overall
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FunnelStatistics;