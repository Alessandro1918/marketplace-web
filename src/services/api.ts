import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:2000'
})

const token = 'APP_USR-8565598613236594-120705-c3ea605372aeb7648af0fc7fcf0ac5db-157958562'
api.defaults.headers.common.authorization = `Bearer ${token}`

export { api }