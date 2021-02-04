import * as B from 'src/components'
import React, { useState } from 'react'
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from 'antd'
import { useController } from './contoller'

const RegisterPage = () => {
  const { form, onSubmit } = useController()

  return (
    <B.BaseTemplate>
      <B.BaseForm form={form} onFinish={onSubmit}>
        <Form.Item name="name" label="이름">
          <Input />
        </Form.Item>
        <Form.Item label="닉네임">
          <Input />
        </Form.Item>
        <Form.Item label="비밀번호">
          <Input.Password />
        </Form.Item>
        <B.Box>
          <Button>Create Account</Button>
        </B.Box>
      </B.BaseForm>
    </B.BaseTemplate>
  )
}

export default RegisterPage
