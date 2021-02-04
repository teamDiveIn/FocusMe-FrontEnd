import * as B from 'src/components'
import { Link, Route } from 'react-router-dom'
import { Input, Button } from 'antd'
import theme from 'src/styles/theme'
import { Fade } from 'react-reveal'

const NewPool = () => {
  return <B.BaseTemplate backgroundColor={theme.primaryOverlay} verticalCenter>
      <B.Box mlr={4} width="100%">
        <Fade bottom distance="20px" delay={150}>
          <B.BaseCard backgroundColor={theme.primaryDark} shadow>
            <B.Box p={2}>
              
            </B.Box>
          </B.BaseCard>
        </Fade>
        
      </B.Box>
      <B.Box mlr={4} width="100%">
        <Fade bottom distance="20px" delay={150}>
          <B.BaseCard backgroundColor={theme.primaryDark} shadow>
            <B.Box p={2}>
              
            </B.Box>
          </B.BaseCard>
        </Fade>
        
      </B.Box>
  </B.BaseTemplate>
}

export default NewPool
