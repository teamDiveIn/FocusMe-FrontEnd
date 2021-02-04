import * as B from 'src/components'
import * as S from './style'
import { Link } from 'react-router-dom'
import { Typography } from 'antd'
import theme from 'src/styles/theme'
import { Bounce } from 'react-reveal'

const { Title } = Typography

const HomePage = () => {
  return (
    <B.BaseTemplate backgroundColor={theme.primaryOverlay} verticalCenter>
      <B.Box mlr={4} width="100%">
        <Bounce delay={50} duration={700}>
          <Link to="/newpool">
            <S.StyledCardWrapper>
              <S.StyledImgCard src="/images/pool/new-0.png" />
              <S.StyledCardContent>
                <B.Box p={2} width={300}>
                  <B.TextCenter>
                    <Title level={3} style={{ color: 'white' }}>
                      새로운 풀 만들기
                    </Title>
                  </B.TextCenter>
                </B.Box>
              </S.StyledCardContent>
            </S.StyledCardWrapper>
          </Link>
        </Bounce>
      </B.Box>

      <B.Box mlr={4} width="100%">
        <Bounce delay={150} duration={700}>
          <Link to="/pool/list">
            <S.StyledCardWrapper>
              <S.StyledImgCard src="/images/pool/new-1.png" />
              <S.StyledCardContent>
                <B.Box p={2} width={300}>
                  <B.TextCenter>
                    <Title level={3} style={{ color: 'white' }}>
                      기존 풀 입장하기
                    </Title>
                  </B.TextCenter>
                </B.Box>
              </S.StyledCardContent>
            </S.StyledCardWrapper>
          </Link>
        </Bounce>
      </B.Box>
    </B.BaseTemplate>
  )
}

export default HomePage
