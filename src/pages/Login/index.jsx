import * as B from 'src/components'
import * as S from './style'
import { Form, Input, Button } from 'antd'
import theme from 'src/styles/theme'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { Fade } from 'react-reveal'
import { useController } from './controller'

const LoginPage = () => {
  const { onSubmit, form } = useController()
  return (
    <S.StyledContent>
      <S.StyledBackgroundImageWrapper>
        <B.Box style={{ position: 'relative' }}>
          <B.BaseTemplate verticalCenter backgroundColor="transparent">
            <B.Box display="flex" width="100%" style={{ justifyContent: 'space-evenly' }}>
              <B.Box mr={2}>
                <Fade left distance="10px">
                  <B.BaseCard backgroundColor={theme.primaryDark} shadow radius="5px">
                    <B.BaseForm form={form} onFinish={onSubmit}>
                      <B.Box p={2}>
                        <B.BaseText type="white" size={28} block mb={4}>
                          <B.TextCenter>환영합니다!</B.TextCenter>
                        </B.BaseText>

                        <Form.Item name="id">
                          <Input
                            prefix={
                              <B.BaseText pr={1}>
                                <UserOutlined />
                              </B.BaseText>
                            }
                            placeholder="아이디"
                            style={{ borderRadius:"29px"}}
                          />
                        </Form.Item>

                        <Form.Item name="password">
                          <Input.Password
                            prefix={
                              <B.BaseText pr={1}>
                                <LockOutlined />
                              </B.BaseText>
                            }
                            placeholder="비밀번호"
                            style={{ borderRadius:"29px"}}
                          />
                        </Form.Item>

                        <B.Box mtb={4}>
                          <Button type="primary" htmlType="submit" block style={{ borderRadius:"29px"}}>
                            로그인
                          </Button>
                        </B.Box>

                        <B.Box mt={4}>
                          <B.TextCenter>
                            <Link to="/register">
                              <B.BaseText>혹시 DiveIn이 처음이신가요?</B.BaseText>
                            </Link>
                          </B.TextCenter>
                        </B.Box>
                      </B.Box>
                    </B.BaseForm>
                  </B.BaseCard>
                </Fade>
              </B.Box>

              <B.Box ml={2}>
                <Fade right distance="10px" delay={200}>
                  <B.Box display="flex" style={{ flexDirection: 'column' }} justify="center">
                    <img src="/images/Logo_t2.png" alt="logo" width="300px" />
                    <B.BaseText type="white" block size={16} mt={2} pl={2}>
                      혼자 집중하기 어려울 땐? 다이브 인!
                    </B.BaseText>
                  </B.Box>
                </Fade>
              </B.Box>
            </B.Box>
          </B.BaseTemplate>
        </B.Box>
      </S.StyledBackgroundImageWrapper>
    </S.StyledContent>
  )
}

export default LoginPage
