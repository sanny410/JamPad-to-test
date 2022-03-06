import {
    FUNNEL_LEADERS_DATA,
    FUNNEL_NOT_LEADERS_DATA,
    FUNNEL_STATISTICS,
    HR_INFO,
    LOGIN_FETCH_DATA,
    OPEN_VACANCIES
} from "./types";


export const loginFetchData = () => {
    return {
        type: LOGIN_FETCH_DATA,
    }
}

export const leaderFetchData = (leaders) => {
    return {
        type: FUNNEL_LEADERS_DATA,
        payload: leaders
    }
}

export const notLeaderFetchData = (notLeaders) => {
    return {
        type: FUNNEL_NOT_LEADERS_DATA,
        payload: notLeaders
    }

}

export const hrLoadInfo = (info) => {
    return {
        type: HR_INFO,
        payload: info
    }
}

export const FunnelStatisticsLoad = (stat) => {
    return {
        type: FUNNEL_STATISTICS,
        payload: stat
    }
}

    export const openVacanciesLoad = (vacancies) => {
    return {
        type: OPEN_VACANCIES,
        payload: vacancies
    }
}