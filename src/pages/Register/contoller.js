import { useForm } from 'antd/lib/form/Form'
import { useCallback } from 'react'

export const useController = () => {
  const [form] = useForm()
  
  const onSubmit = useCallback(async () => {
    const updatedForm = form.getFieldsValue(true)

    console.log(updatedForm)
  }, [form])
  return { form , onSubmit}
}
