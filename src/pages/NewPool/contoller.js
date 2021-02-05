import { useForm } from 'antd/lib/form/Form'
import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'

export const useController = () => {
  const [form] = useForm()
  const history = useHistory()

  const onSubmit = useCallback(async () => {
    const updatedForm = form.getFieldsValue(true)

    console.log(updatedForm)

    history.replace('/pool/view')
  }, [form, history])
  return { form, onSubmit }
}
