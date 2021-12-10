import axios from 'axios'


const api = axios.create({
    //dev:
    //baseURL: 'http://localhost:2000'
    //prod:
    baseURL: 'https://marketplace-alessandro-api.herokuapp.com'
})

export { api }