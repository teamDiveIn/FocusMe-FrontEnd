import React from 'react'
import { Form } from 'antd'
import RulesValidator from '../../../utils/utils.rules.validator'

export const BaseForm = ({
  name,
  onFinish,
  children,
  size = 'large',
  scrollToFirstError = true,
  validateMessages,
  ...rest
}) => {
  return (
    <Form
      name={name}
      size={size}
      validateMessages={validateMessages ?? RulesValidator.defaultValidateMessages}
      onFinish={(value) => {
        if (onFinish) onFinish(value)
      }}
      {...rest}
    >
      {children}
    </Form>
  )
}
