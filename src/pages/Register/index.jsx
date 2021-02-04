import * as B from 'src/components'
import React from 'react'
import { Form, Input, Button } from 'antd'
import { useController } from './contoller'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  const { form, onSubmit } = useController()

  return (
    <B.BaseTemplate narrow>
      <B.BaseText size={20} mb={2} block>
        안녕하세요.{' '}
        <B.BaseText type="primary" bold>
          FocusOnMe
        </B.BaseText>
        에 오신 걸 환영합니다!
      </B.BaseText>
      <B.BaseForm form={form} onFinish={onSubmit} layout="vertical">
        <Form.Item name="name" label="이름">
          <Input />
        </Form.Item>
        <Form.Item name="nickname" label="닉네임">
          <Input />
        </Form.Item>
        <Form.Item name="password" label="비밀번호">
          <Input.Password />
        </Form.Item>
        <B.Box>
          <B.TextCenter>
            <Button type="primary" block htmlType="submit">
              회원가입
            </Button>
          </B.TextCenter>
        </B.Box>
        <B.Box mtb={2}>
          <B.TextCenter>
            <Link to="/login">
              <B.BaseText underline>혹시 이미 계정이 있으신가요?</B.BaseText>
            </Link>
          </B.TextCenter>
        </B.Box>
      </B.BaseForm>
    </B.BaseTemplate>
  )
}

export default RegisterPage
