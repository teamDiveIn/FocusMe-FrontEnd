import { message } from 'antd'
import { useForm } from 'antd/lib/form/Form'
import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuthAxios } from 'src/lib/axios'

export const useController = () => {
  const [form] = useForm()
  const history = useHistory()

  const [, login] = useAuthAxios('/user/signin', {
    method: 'POST',
  })

  const onSubmit = useCallback(async () => {
    const updatedForm = form.getFieldsValue(true)

    const { id, password } = updatedForm

    try {
      const { data } = await login({ data: { user_id: id, password } })
      const { accessToken, refreshToken } = data.data
      console.log(accessToken, refreshToken)
      message.success('로그인')
      // history.replace('/register/complete')
    } catch (e) {
      const { msg, status } = e.response.data

      switch (status) {
        case 401:
          message.error('비밀번호가 잘못되었습니다')
          break
        case 404:
          message.error('존재하지 않는 아이디입니다.')
          break
        default:
          message.error(msg)
      }
    }
  }, [form, login, history])

  return { form, onSubmit }
}
