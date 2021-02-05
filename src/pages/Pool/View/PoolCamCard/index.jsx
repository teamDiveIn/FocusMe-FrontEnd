import * as B from 'src/components'
import * as S from './style'
import { ClockCircleOutlined } from '@ant-design/icons'
import { OpenViduVideo } from '../OvVideo'

export const PoolCamCard = ({ streamManager, imageUrl }) => {
  return (
    <B.Box>
      <S.StyledCard>
        <S.StyledVideoContent>
          {streamManager !== undefined ? <OpenViduVideo streamManager={streamManager} /> : null}
          {imageUrl && <S.StyledThumbnail src={imageUrl} alt="thumbnail" />}
        </S.StyledVideoContent>

        <S.StyledFooter>
          <S.StyledNicknameWrapper>유저 닉네임 1</S.StyledNicknameWrapper>
          <S.StyledSlider />
          <B.BaseText mt={1} block size="small" type="optional">
            <B.BaseText type="white" size="tiny">
              <ClockCircleOutlined />
            </B.BaseText>

            <B.BaseText pl={0.5}>4시간 30분</B.BaseText>
          </B.BaseText>
        </S.StyledFooter>
      </S.StyledCard>
    </B.Box>
  )
}
