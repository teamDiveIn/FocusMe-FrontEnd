import * as B from 'src/components'
import * as S from './style'
import { PoolCamCard } from './PoolCamCard'

const PoolViewPage = () => {
  return (
    <B.BaseTemplate>
      <B.BaseText bold type="white" size={32} block mb={4}>
        영어 자격증 방
      </B.BaseText>
      <S.StyledCardContainer>
        <S.StyledCardWrapper>
          <PoolCamCard />
        </S.StyledCardWrapper>
        <S.StyledCardWrapper>
          <PoolCamCard />
        </S.StyledCardWrapper>
        <S.StyledCardWrapper>
          <PoolCamCard />
        </S.StyledCardWrapper>
        <S.StyledCardWrapper>
          <PoolCamCard />
        </S.StyledCardWrapper>
        <S.StyledCardWrapper>
          <PoolCamCard />
        </S.StyledCardWrapper>
        <S.StyledCardWrapper>
          <PoolCamCard />
        </S.StyledCardWrapper>
      </S.StyledCardContainer>
    </B.BaseTemplate>
  )
}

export default PoolViewPage
