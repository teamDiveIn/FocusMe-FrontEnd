import useAxios from 'axios-hooks'
import Axios from 'axios'
import storage from 'src/utils/utils.storage'

// const API_URL = `https://api.divein.club`
const AUTH_URL = `https://api.divein.club/api/auth`

const _authAxios = Axios.create({ baseURL: AUTH_URL })
_authAxios.interceptors.request.use(function (config) {
  const accessToken = storage.getItem('accessToken')
  if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`
  return config
})

export const authAxios = _authAxios

export const useAuthAxios = (url, { method, data: requestData }) => {
  const [{ data, loading, error, response }, execute] = useAxios(
    { url: AUTH_URL + url, method, data: requestData },
    { manual: true },
  )

  return [{ data, loading, error, response }, execute]
}

// export const NODE_API_URL = `http://localhost:3000`
export const NODE_API_URL = `https://webrtc.clubapply.com`

const _nodeApiAxios = Axios.create({ baseURL: NODE_API_URL })
_nodeApiAxios.interceptors.request.use(function (config) {
  const accessToken = storage.getItem('accessToken')
  if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`
  return config
})

export const nodeApiAxios = _nodeApiAxios