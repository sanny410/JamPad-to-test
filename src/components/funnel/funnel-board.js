import React, {useEffect} from "react";
import './funnel.scss'
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {leaderFetchData, notLeaderFetchData} from "../../store/actions";
import FunnelStatistics from "./funnelStatistics";

function SortArraySuccessRateUp(prev, next) {
    return next['success_rate'] - prev['success_rate']
}



const Leaderboard  = () =>  {
    console.log('render')

    const dispatch = useDispatch();

    const leadersFetch = async()  => {
        const response = await axios
            .get('https://api.jampad.ml/api/statistics/leaderboard', {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImhyQGdtYWlsLmNvbSIsImV4cCI6MTY1NDExMjc4NH0.9H8LsfiAHytxnrKeEciOE_BfMFftFd8BIYarWYodu8Y'
                }
            })
            .catch((err) => {
                console.log("Err", err)
            })

        const leaders = (response.data).sort(SortArraySuccessRateUp);
        const notLeaderList = [];
        const leadersList = [];
        for (let i = 0; i <= 2; i++) {
            leadersList.push(leaders[i])
        }
        for (let i = 3; i <= 5; i++) {
            notLeaderList.push(leaders[i])
        }
        dispatch(leaderFetchData(leadersList));
        dispatch(notLeaderFetchData(notLeaderList))

        console.log(leadersList, notLeaderList)
    }

    useEffect(() => {
        leadersFetch()
    }, []);

    const leaders = useSelector(state => state.funnel.leaders);
    const notLeaders = useSelector(state => state.funnel.notLeaders);

    const employeeCard = leaders.map(item => {
        const {success_rate, first_name, last_name} = item;
        return (
            <div className={"leader-card"} key={last_name}>
                <p className={"score"}>{success_rate}%</p>
                <p className={"state"}>Success rate</p>
                <p>{first_name} {last_name}</p>
                <div className={"links"}>
                    <a href={""}>Profile</a>
                    <a href={""}>Results</a>
                </div>
            </div>
        )
    })

    const employeeCardNotLeader =  notLeaders.map(item => {
        const {success_rate, first_name, last_name} = item;
        return (
            <div className={"notLeader-card"} key={last_name}>
                <div className={"score"}>{success_rate}%</div>
                <div>
                    <div className={"notLeader-card-info"}>
                        <div className={"name"}>{first_name} {last_name}</div>
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
    });


        return (
            <div className={"leaderboard"}>
                <h2 className={"funnel-title"}>Leaderboard</h2>
                <h3 className={"funnel-subtitle"}>Three best-performing candidates are:</h3>
                <div className={"leaderboard-rate"}>
                    <div className={"leader-employees"}>
                        {employeeCard}
                    </div>
                    <div className={"not-leader"}>
                        <h3 className={"funnel-subtitle"}>Also: </h3>
                        {employeeCardNotLeader}
                    </div>
                </div>
            </div>
        )
}


export default Leaderboard;