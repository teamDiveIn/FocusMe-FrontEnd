import * as B from 'src/components'
import * as S from './style'
import { Link } from 'react-router-dom'
import { Typography } from 'antd'
import theme from 'src/styles/theme'
import { Fade } from 'react-reveal'

const { Title } = Typography

const HomePage = () => {
  return (
    <B.BaseTemplate backgroundColor={theme.primaryOverlay} verticalCenter>
      <B.Box mlr={4} width="100%">
        <Fade bottom distance="20px" delay={50} duration={700}>
          <Link to="/newpool">
            <S.StyledCardWrapper>
              <S.StyledCardContent>
                <B.Box p={2}>
                  <B.TextCenter>
                    <Title level={3} style={{ color: 'white' }}>
                      새로운 풀 만들기
                    </Title>
                  </B.TextCenter>
                </B.Box>
              </S.StyledCardContent>
              <S.StyledImgCard src="/images/pool/new-0.png" />
            </S.StyledCardWrapper>
          </Link>
        </Fade>
      </B.Box>

      <B.Box mlr={4} width="100%">
        <Fade bottom distance="20px" delay={150} duration={700}>
          <Link to="/pool/list">
            <S.StyledCardWrapper>
              <S.StyledCardContent>
                <B.Box p={2}>
                  <B.TextCenter>
                    <Title level={3} style={{ color: 'white' }}>
                      기존 풀 입장하기
                    </Title>
                  </B.TextCenter>
                </B.Box>
              </S.StyledCardContent>
              <S.StyledImgCard src="/images/pool/new-1.png" />
            </S.StyledCardWrapper>
          </Link>
        </Fade>
      </B.Box>
    </B.BaseTemplate>
  )
}

export default HomePage
