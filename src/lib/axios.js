import useAxios from 'axios-hooks'

// const API_URL = `https://api.divein.club`
const AUTH_URL = `https://api.divein.club/api/auth`

export const useAuthAxios = (url, { method, data: requestData }) => {
  const [{ data, loading, error, response }, execute] = useAxios(
    { url: AUTH_URL + url, method, data: requestData },
    { manual: true },
  )

  return [{ data, loading, error, response }, execute]
}
