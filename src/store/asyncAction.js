import {loginFetchData} from "./actions";
import axios from "axios";
import {useDispatch} from "react-redux";
import Redirect from "react";
import React from "react";

//
// export function fetchPosts() {
//     return async dispatch => {
//         const response = await fetch('https://api.jampad.ml/api/statistics/leaderboard',
//             {
//                 method: "GET",
//                 headers: {
//                     'Accept': 'application/json',
//                     'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImhyQGdtYWlsLmNvbSIsImV4cCI6MTY1MjY0MjY4OX0.EAEH8rKIiwEcOTin2entjDDa6dHh6JHsqqhWeO24kZ8'
//                 },
//                 }
//             )
//         const json = await response.json()
//         dispatch(funnelFetchData(json))
//     }
// }
//
// const LeadersFetch = async()  => {;
//     const response = await axios
//         .get("https://www.anapioficeandfire.com/api/books")
//         .catch((err) => {
//             console.log("Err", err)
//         })
//     console.log(response.data)
//     dispatch(funnelFetchData(response.data))
// }


//
// export function loginPost() {
//     return async dispatch => {
//         try {
//             const response = await fetch('https://api.jampad.ml/api/statistics/leaderboard', {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json; charset=utf-8",
//                     'Accept': 'application/json',
//                     "Cookie": "session=abcdefghijklmnopqrstu"
//                 },
//                 body: JSON.stringify(this.body)
//             })
//             const json = await response.json;
//             dispatch(loginFetchData(json))
//         }
//         catch (e) {
//             console.log(e.type)
//         }
//     }
// }
