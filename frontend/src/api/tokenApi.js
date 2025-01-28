import axios from 'axios'

const tokenApi = axios.create({
    baseURL: 'http://localhost:8000/api/token/',
    headers : {'Content-Type': 'application/json',}
})

export const getToken = async ({username, password}) => tokenApi.post('/', {username, password})