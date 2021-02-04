import * as B from 'src/components'
import { Link, Route } from 'react-router-dom'
import { Input, Button, Typography } from 'antd'
import theme from 'src/styles/theme'
import * as S from './style'
import { Fade } from 'react-reveal'

const { Title } = Typography;

const NewPool = () => {
  return <B.BaseTemplate backgroundColor={theme.primaryOverlay} verticalCenter>
      <B.Box mlr={4} width="100%">
        <Fade bottom distance="20px" delay={150}>
          <B.BaseCard backgroundColor={theme.primaryDark} shadow>
            <B.Box p={2}>
              <B.BaseText type="white" size={24} block mb={4}>
                새 Pool 만들기
              </B.BaseText>

              
            </B.Box>
          </B.BaseCard>
        </Fade>
      </B.Box>
  </B.BaseTemplate>
}

export default NewPool
