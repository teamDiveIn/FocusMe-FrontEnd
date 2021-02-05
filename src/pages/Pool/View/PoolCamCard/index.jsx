import * as B from 'src/components'
import * as S from './style'
import { ClockCircleOutlined } from '@ant-design/icons'
import { OpenViduVideo } from '../OvVideo'
import { useEffect, useState } from 'react'

export const PoolCamCard = ({ streamManager, imageUrl }) => {
  const [nickname, setNickname] = useState('')
  useEffect(() => {
    if (streamManager) {
      const connection = streamManager.stream.connection
      const clientData = JSON.parse(connection.data.split('%/%')[0]).clientData

      setNickname(clientData.nickname)
    } else {
      setNickname('')
    }
  }, [streamManager])

  return (
    <B.Box>
      <S.StyledCard>
        <S.StyledVideoContent>
          {streamManager !== undefined ? <OpenViduVideo streamManager={streamManager} /> : null}
          {(!streamManager?.stream?.videoActive ?? false) && imageUrl && (
            <S.StyledThumbnail src={imageUrl} alt="thumbnail" />
          )}
        </S.StyledVideoContent>

        <S.StyledFooter>
          <S.StyledNicknameWrapper>{nickname}</S.StyledNicknameWrapper>
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
