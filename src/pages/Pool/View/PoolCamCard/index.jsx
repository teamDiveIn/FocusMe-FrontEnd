import * as B from 'src/components'
import * as S from './style'
import { ClockCircleOutlined } from '@ant-design/icons'
import { OpenViduVideo } from '../OvVideo'
import { useEffect, useState } from 'react'
import { differenceInSeconds } from 'date-fns'
import { useMemo } from 'react'

export const PoolCamCard = ({ streamManager, imageUrl }) => {
  const [nickname, setNickname] = useState('')
  const [startDate, setStartDate] = useState()
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    if (streamManager) {
      const connection = streamManager.stream.connection
      const clientData = JSON.parse(connection.data.split('%/%')[0]).clientData
      const serverData = JSON.parse(connection.data.split('%/%')[1]).serverData

      setStartDate(new Date(serverData.startedAt))

      setNickname(clientData.nickname)
    } else {
      setStartDate(undefined)
      setNickname('')
    }
  }, [streamManager])

  useEffect(() => {
    const key = setInterval(() => {
      if (startDate) {
        setDuration(differenceInSeconds(new Date(), startDate))
      } else {
        setDuration(0)
      }
    }, 1000)

    return () => {
      clearInterval(key)
    }
  }, [startDate])

  const durationString = useMemo(() => {
    let s = ''

    if (duration < 60) {
      s = `${duration}초 째 집중`
    } else if (duration < 3600) {
      s = `${Math.floor(duration / 60)}분 ${duration % 60}초 째 집중`
    }

    return s
  }, [duration])

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

          {duration > 0 && (
            <B.BaseText mt={1} block size="small" type="optional">
              <B.BaseText type="white" size="tiny">
                <ClockCircleOutlined />
              </B.BaseText>

              <B.BaseText pl={0.5}>{durationString}</B.BaseText>
            </B.BaseText>
          )}
        </S.StyledFooter>
      </S.StyledCard>
    </B.Box>
  )
}
