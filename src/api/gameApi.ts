import axios from 'axios'

export const gameApi = axios.create({ baseURL: 'http://localhost:8080' })
