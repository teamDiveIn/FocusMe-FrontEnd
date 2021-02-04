import Axios from 'axios'

const API_URL = ``

export const apiAxios = Axios.create({ baseURL: API_URL })
