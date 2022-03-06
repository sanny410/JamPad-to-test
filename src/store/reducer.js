import {
    FUNNEL_LEADERS_DATA,
    FUNNEL_NOT_LEADERS_DATA,
    FUNNEL_STATISTICS,
    HR_INFO,
    LOGIN_FETCH_DATA,
    OPEN_VACANCIES
} from "./types";
import {combineReducers} from "redux";
import {reducer as formReducer} from 'redux-form';

export const defaultState = {
    isAuth: false,
    hr_info: {},
    leaders: [],
    notLeaders: [],
    error: null,
    statistics: {},
    openVacancies: []
}

export const funnelReducer = (state = defaultState, action) => {
    switch (action.type) {
        case HR_INFO:
            return {
                ...state,
                hr_info: action.payload
            }

        case FUNNEL_LEADERS_DATA:
            return {
                ...state,
                leaders: action.payload
            }
        case FUNNEL_NOT_LEADERS_DATA:
            return {
                ...state,
                notLeaders: action.payload
            }
        case FUNNEL_STATISTICS:
            return {
                ...state,
                statistics: action.payload
            }

        case LOGIN_FETCH_DATA:
            return {
                ...state,
                isAuth: true
            }
        case OPEN_VACANCIES:
            return {
                ...state,
                openVacancies: action.payload
            }
        default: {
            return state
        }
    }
}

export const rootReducer = combineReducers({
    funnel: funnelReducer,
    form: formReducer
})





