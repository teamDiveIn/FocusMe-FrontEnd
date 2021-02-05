import { message } from 'antd'
import { useForm } from 'antd/lib/form/Form'
import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuthAxios } from 'src/lib/axios'

export const useController = () => {
  const [form] = useForm()
  const history = useHistory()

  const [, register] = useAuthAxios('/user', {
    method: 'POST',
  })

  const onSubmit = useCallback(async () => {
    const updatedForm = form.getFieldsValue(true)

    const { id, nickname, password } = updatedForm

    try {
      await register({ data: { user_id: id, nickname, password } })
      history.replace('/register/complete')
    } catch (e) {
      const { msg, status } = e.response.data

      switch (status) {
        case 409:
          message.error('이미 존재하는 회원입니다.')
          break
        default:
          message.error(msg)
      }
    }
  }, [form, register, history])
  return { form, onSubmit }
}
