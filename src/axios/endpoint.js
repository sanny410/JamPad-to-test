import axios from "axios";


const endpoint ={
    login: (data) => axios.post('/hrs/login', data)
}

export default endpoint;