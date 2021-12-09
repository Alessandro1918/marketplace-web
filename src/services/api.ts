import axios from 'axios'


const api = axios.create({
    baseURL: 'http://localhost:2000'
})

//const token = 'APP_USR-8565598613236594-120822-9beaf2167c5702dcea7542486cffce5c-157958562'

//api.defaults.headers.common.authorization = `Bearer ${accessToken}`

export { api }