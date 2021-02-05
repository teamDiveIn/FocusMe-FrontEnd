import * as B from 'src/components'
import * as S from './style'
import { ClockCircleOutlined } from '@ant-design/icons'

export const PoolCamCard = ({ me }) => {
  return (
    <B.Box>
      <S.StyledCard>
        {me ? (
          <S.StyledVideoContent>
            <div id="label-container" style={{ display: 'none' }}></div>
            <canvas id="my-canvas" style={{ borderRadius: 32, width: 280, height: 270 }}></canvas>
          </S.StyledVideoContent>
        ) : (
          <S.StyledVideoContent>
            <canvas style={{ borderRadius: 32, width: 280, height: 270 }}></canvas>
          </S.StyledVideoContent>
        )}

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
