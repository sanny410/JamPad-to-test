import {applyMiddleware, compose, createStore} from 'redux'
import {reducer} from "./reducer";
import thunk from "redux-thunk";

export const defaultState = {
    hr_info: {},
    leaders: [],
    notLeaders: [],
    error: null,
    statistics: {}
}


export const store = createStore(reducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));





