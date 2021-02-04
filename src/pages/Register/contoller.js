import { useForm } from 'antd/lib/form/Form'
import { useCallback } from 'react'
// import { useHistory } from 'react-router-dom'
import { useAuthAxios } from 'src/lib/axios'

export const useController = () => {
  const [form] = useForm()
  // const history = useHistory()
  // const [{ data }, execute] = useAxios(
  //   { url: 'https://jsonplaceholder.typicode.com/todos/1', method: 'GET' },
  //   { manual: true },
  // )
  const [{ data }, execute] = useAuthAxios('/user', {
    method: 'POST',
    data: { user_id: 'hackatoner1', nickname: 'HEHE', password: '1234' },
  })

  console.log(data)

  const onSubmit = useCallback(async () => {
    const updatedForm = form.getFieldsValue(true)

    console.log(updatedForm)

    const result = await execute()

    console.log(result.data)

    // history.replace('/register/complete')
  }, [form, execute])
  return { form, onSubmit }
}
