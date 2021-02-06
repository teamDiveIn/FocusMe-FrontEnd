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

              <PoolListItemCard
                title="조용히 공부하실 분 들어오세요~"
                mode={1}
                peoplestatus="5 / 6"
                keyword="공부"
              />
              <PoolListItemCard
                title="저랑 코딩하실 분"
                mode={1}
                peoplestatus="2 / 6"
                keyword="개발"
              />
              <PoolListItemCard
                title="컴퓨터활용능력 1급 스터디"
                peoplestatus="5 / 6"
                keyword="시험"
              />
              <PoolListItemCard
                title="ㅇㅇ초등학교 4-2 공부방 *^^*"
                mode={1}
                peoplestatus="6 / 6"
                keyword="공부"
              />
              <PoolListItemCard title="집중력 고수들의 방" peoplestatus="2 / 3" keyword="자유" />
            </B.Box>
          </B.BaseCard>
        </Fade>
      </B.Box>
    </B.BaseTemplate>
  )
}

export default PoolListPage
