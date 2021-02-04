import * as B from 'src/components'
import theme from 'src/styles/theme'
import { Fade } from 'react-reveal'
import { PoolListItemCard } from './PoolListItemCard'

const PoolListPage = () => {
  return (
    <B.BaseTemplate backgroundColor={theme.primaryOverlay} verticalCenter>
      <B.Box mlr={4} width="100%">
        <Fade bottom distance="20px" delay={150}>
          <B.BaseCard backgroundColor={theme.primaryDark} shadow>
            <B.Box p={2}>
              <B.BaseText type="white" size={24} block mb={4}>
                풀 목록
              </B.BaseText>

              <PoolListItemCard />
              <PoolListItemCard />
              <PoolListItemCard />
              <PoolListItemCard />
              <PoolListItemCard />
            </B.Box>
          </B.BaseCard>
        </Fade>
      </B.Box>
    </B.BaseTemplate>
  )
}

export default PoolListPage
