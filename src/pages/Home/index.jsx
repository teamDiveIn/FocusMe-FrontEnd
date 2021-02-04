import * as B from 'src/components'
import { Link, Route } from 'react-router-dom'
import { Input, Button, Typography } from 'antd'
import theme from 'src/styles/theme'
import { Fade } from 'react-reveal'

const { Title } = Typography;

const HomePage = () => {
  return <B.BaseTemplate backgroundColor={theme.primaryOverlay} verticalCenter>

    <B.Box mlr={4} width="100%">
      <Fade bottom distance="20px" delay={150}>
        <Link to="/newpool">
          <B.BaseCard backgroundColor={theme.primaryDark} shadow radius={"50px"}>
            <B.Box p={2}>
              <Title level={3} style={{ color: 'white' }}>새로운 풀 만들기</Title>
            </B.Box>
          </B.BaseCard>
        </Link>
      </Fade>
    </B.Box>

    <B.Box mlr={4} width="100%">
      <Fade bottom distance="20px" delay={150}>
        <Link to="/poollist">
          <B.BaseCard backgroundColor={theme.primaryDark} shadow radius={"50px"}>
            <B.Box p={2}>
              <Title level={3} style={{ color: 'white' }}>기존 풀 입장하기</Title>
            </B.Box>
          </B.BaseCard>
        </Link>
      </Fade>
    </B.Box>

  </B.BaseTemplate>
}

export default HomePage
