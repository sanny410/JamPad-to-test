import React from "react";
import './funnel.scss'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {hrLoadInfo} from "../../store/actions";
import axios from "axios";


const Header = () => {

    const dispatch = useDispatch();
    const hrName = useSelector(state => state.hr_info);
    const {first_name, last_name} = hrName;

    const HRNameFetch = async()  => {
        const response = await axios
            .get('https://api.jampad.ml/api/hrs/', {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImhyQGdtYWlsLmNvbSIsImV4cCI6MTY1MjY0MjY4OX0.EAEH8rKIiwEcOTin2entjDDa6dHh6JHsqqhWeO24kZ8'
                }
            })
            .catch((err) => {
                console.log("Err", err)
            })

        dispatch(hrLoadInfo(response.data))
    }

        useEffect(() => {
            HRNameFetch()
        }, []);


        return (
        <header className={"header"}>
            <img id={"logo"} src={require("../../assets/funnel-image/logo.png")} alt=""/>
            <nav>
                <ul className={"menu"}>
                    <Link to={"/dashboard"}><li className={"menu-item"}>Dashboard</li></Link>
                    <Link to={"/funnel"}><li className={"menu-item"}>Vacancies</li></Link>
                    <a href={""}><li className={"menu-item"}>Testings</li></a>
                </ul>
            </nav>
            <div className="name-of-user">
                <img src={require("../../assets/funnel-image/notification.png")} alt=""/>
                <p id={"name-user"}>{first_name} {last_name}</p>
            </div>
        </header>
    )
}

export default Header;