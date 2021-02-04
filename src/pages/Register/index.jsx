import * as B from 'src/components'
import React from 'react'
import { Row, Col, Input, Button } from 'antd'
import { useController } from './contoller'
import theme from 'src/styles/theme'
import * as S from './style'

const RegisterPage = () => {
  const { form, onSubmit } = useController()

  return (
    <B.BaseTemplate
      backgroundColor={theme.primaryOverlay}
      headerBackgroundColor={theme.primaryOverlay}
    >
      <B.Box mtb={6} mlr={4}>
        <B.BaseCard backgroundColor={theme.primaryDark} shadow>
          <B.Box p={2}>
            <B.BaseText type="white" size={24} block mb={4}>
              회원가입
            </B.BaseText>

            <B.BaseForm form={form} onFinish={onSubmit}>
              <Row gutter={20}>
                <Col sm={14}>
                  <S.StyledFormItem name="name" label="이름">
                    <Input />
                  </S.StyledFormItem>
                  <S.StyledFormItem name="nickname" label="닉네임">
                    <Input />
                  </S.StyledFormItem>
                  <S.StyledFormItem name="password" label="비밀번호">
                    <Input.Password />
                  </S.StyledFormItem>
                </Col>
                <Col sm={10}>
                  <B.TextCenter>
                    <img src="/images/avatar.png" alt="avater" width={140} />
                    <B.Box mtb={2}>
                      <Button ghost>프로필 업로드</Button>
                    </B.Box>
                  </B.TextCenter>
                </Col>
              </Row>
              <B.Box mt={4}>
                <B.TextRight>
                  <Button type="primary" htmlType="submit">
                    <B.BaseText bold plr={4}>
                      가입하기
                    </B.BaseText>
                  </Button>
                </B.TextRight>
              </B.Box>
            </B.BaseForm>
          </B.Box>
        </B.BaseCard>
      </B.Box>
    </B.BaseTemplate>
  )
}

export default RegisterPage
