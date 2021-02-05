import { authAxios } from 'src/lib/axios'

export const loadUser = async () => {
  const data = await authAxios.post('/user/verify')
  console.log(data)
  return {}
}
