import * as B from 'src/components'
import * as S from './style'
import { PoolCamCard } from './PoolCamCard'
import { useController } from './controller'
import { useEffect } from 'react'

const PoolViewPage = () => {
  const { init } = useController()
  useEffect(() => {
    init()
    // eslint-disable-next-line
  }, [])
  return (
    <B.BaseTemplate>
      <B.BaseText bold type="white" size={32} block mb={4}>
        영어 자격증 방
      </B.BaseText>

      <S.StyledCardContainer>
        <S.StyledCardWrapper>
          <PoolCamCard me />
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

      <S.StyledFooter>Hi Faker</S.StyledFooter>
    </B.BaseTemplate>
  )
}

export default PoolViewPage
