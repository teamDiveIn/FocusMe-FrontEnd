import * as B from 'src/components'
import React from 'react'
import { Button } from 'antd'
import theme from 'src/styles/theme'
import { Link } from 'react-router-dom'
import { Fade } from 'react-reveal'

const RegisterCompletePage = () => {
  return (
    <B.BaseTemplate backgroundColor={theme.primaryOverlay} verticalCenter>
      <B.Box mlr={4} width="100%">
        <Fade bottom distance="10px">
          <B.BaseCard backgroundColor={theme.primaryDark} shadow>
            <B.Box p={4} ptb={10}>
              <B.TextCenter>
                <B.BaseText type="white" size={40} block mb={1}>
                  회원가입이 완료되었습니다.
                </B.BaseText>
                <B.BaseText type="white" size={18} block>
                  로그인 후 서비스를 이용해주세요.
                </B.BaseText>

                <B.Box mtb={4}>
                  <Link to="/login">
                    <Button type="primary" style={{ height: 50 }}>
                      <B.BaseText plr={4}>로그인하기</B.BaseText>
                    </Button>
                  </Link>
                </B.Box>
              </B.TextCenter>
            </B.Box>
          </B.BaseCard>
        </Fade>
      </B.Box>
    </B.BaseTemplate>
  )
}

export default RegisterCompletePage
