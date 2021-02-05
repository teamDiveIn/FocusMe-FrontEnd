import * as B from 'src/components'
import * as S from './style'
import { PoolCamCard } from './PoolCamCard'
import { useController } from './controller'
import { useEffect } from 'react'
import { useUserContext } from 'src/contexts/UserContext'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { UserVideo } from './UserVideo'

const PoolViewPage = () => {
  const { onClose, onToggleVisible, visible, sessionData } = useController()
  const { user } = useUserContext()

  useEffect(() => {
    // init()
    // eslint-disable-next-line
  }, [])

  return (
    <B.BaseTemplate>
      <B.BaseText bold type="white" size={32} block mb={4}>
        영어 자격증 방
      </B.BaseText>

      {sessionData && (
        <B.Box>
          <div id="video-container">
            {sessionData.publisher !== undefined ? (
              <div className="stream-container col-md-6 col-xs-6">
                <UserVideo streamManager={sessionData.publisher} />
              </div>
            ) : null}
            {sessionData.subscribers.map((sub, i) => (
              <div key={i} className="stream-container col-md-6 col-xs-6">
                <UserVideo streamManager={sub} />
              </div>
            ))}
          </div>
        </B.Box>
      )}

      <S.StyledCardContainer>
        <S.StyledCardWrapper>
          <PoolCamCard streamManager={sessionData.mainStreamManager} />
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

      <S.StyledFooter>
        <B.Box
          style={{ width: 300, marginLeft: 'auto', marginRight: 'auto' }}
          display="flex"
          justify="space-between"
        >
          <S.ClickableImg src="/images/pool/video-on.png" alt="control" />
          <S.ClickableImg src="/images/pool/mic-on.png" alt="control" />
          <S.ClickableImg src="/images/pool/audio-on.png" alt="control" />
        </B.Box>
      </S.StyledFooter>

      <S.StyledDrawer
        width="400"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <S.StyledDrawerButton onClick={() => onToggleVisible()}>
          <B.BaseText size={24} style={{ lineHeight: 100 }}>
            {visible ? <RightOutlined /> : <LeftOutlined />}
          </B.BaseText>
        </S.StyledDrawerButton>
        <B.Box mtb={4}>
          <B.TextCenter>
            <img src="/images/avatar.png" alt="avater" width={140} />
            <B.BaseText block mtb={2}>
              <img src="/images/achieve/2.png" alt="avater" width={32} />{' '}
              <B.BaseText pl={1} size="huge" bold>
                {user.nickname}
              </B.BaseText>
            </B.BaseText>
          </B.TextCenter>
        </B.Box>
      </S.StyledDrawer>
    </B.BaseTemplate>
  )
}

export default PoolViewPage
