import * as B from 'src/components'
import * as S from './style'
import { PoolCamCard } from './PoolCamCard'
import { useController } from './controller'
import { Component } from 'react'
import { useUserContext } from 'src/contexts/UserContext'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { fill } from 'lodash'
import { OpenVidu } from 'openvidu-browser'
import { nodeApiAxios } from 'src/lib/axios'

const withHooksHOC = (Component) => {
  return (props) => {
    const controller = useController()
    const { user } = useUserContext()

    return <Component user={user} controller={controller} {...props} />
  }
}

class PoolViewPage extends Component {
  constructor(props) {
    super(props)

    const { user, controller } = props
    const { sessionName } = controller

    this.state = {
      sessionName,
      nickname: user.nickname,
      session: undefined,
      mainStreamManager: undefined,
      publisher: undefined,
      subscribers: [],
      token: undefined,

      video: true,
      audio: true,
      listenMute: true,
    }
  }

  componentDidMount() {
    window.addEventListener('beforeunload', this.onbeforeunload)

    this.joinSession()
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.onbeforeunload)

    this.leaveSession()
  }

  onbeforeunload = (event) => {
    this.leaveSession()
  }

  deleteSubscriber = (streamManager) => {
    let subscribers = this.state.subscribers
    let index = subscribers.indexOf(streamManager, 0)
    if (index > -1) {
      subscribers.splice(index, 1)
      this.setState({
        subscribers: subscribers,
      })
    }
  }

  joinSession = async () => {
    this.OV = new OpenVidu()
    this.setState(
      {
        session: this.OV.initSession(),
      },
      async () => {
        var mySession = this.state.session

        mySession.on('streamCreated', (event) => {
          const subscriber = mySession.subscribe(event.stream, undefined)
          const subscribers = this.state.subscribers
          subscribers.push(subscriber)

          this.setState({
            subscribers: subscribers,
          })
        })

        mySession.on('streamDestroyed', (event) => {
          this.deleteSubscriber(event.stream.streamManager)
        })

        const { data } = await nodeApiAxios.post('/webrtc/token', {
          session: this.state.sessionName,
        })

        const { token } = data

        await mySession.connect(token, { clientData: {} })

        let publisher = this.OV.initPublisher(undefined, {
          audioSource: undefined, // The source of audio. If undefined default microphone
          videoSource: undefined, // The source of video. If undefined default webcam
          publishAudio: true, // Whether you want to start publishing with your audio unmuted or not
          publishVideo: true, // Whether you want to start publishing with your video enabled or not
          resolution: '280x270', // The resolution of your video
          frameRate: 30, // The frame rate of your video
          insertMode: 'APPEND', // How the video is inserted in the target element 'video-container'
          mirror: false, // Whether to mirror your local video or not
        })

        mySession.publish(publisher)

        this.setState({
          mainStreamManager: publisher,
          publisher: publisher,
          token,
        })
      },
    )
  }

  leaveSession = async () => {
    const mySession = this.state.session

    if (mySession) {
      mySession.disconnect()
      await nodeApiAxios.delete('/webrtc/token', {
        data: { session: this.state.sessionName, token: this.state.token },
      })
    }

    this.OV = null
    this.setState({
      session: undefined,
      subscribers: [],
      mySessionId: 'SessionA',
      myUserName: 'Participant' + Math.floor(Math.random() * 100),
      mainStreamManager: undefined,
      publisher: undefined,
    })
  }

  toggleVideo = () => {
    if (this.state.publisher) {
      this.state.publisher.publishVideo(!this.state.video)
    }

    this.setState({
      video: !this.state.video,
    })
  }

  toggleAudio = () => {
    if (this.state.publisher) {
      this.state.publisher.publishAudio(!this.state.audio)
    }

    this.setState({
      audio: !this.state.audio,
    })
  }

  toggleListenMute = () => {
    this.state.subscribers.map((sub) => sub.subscribeToAudio(!this.state.listenMute))

    this.setState({
      listenMute: !this.state.listenMute,
    })
  }

  render() {
    return (
      <B.BaseTemplate>
        <B.BaseText bold type="white" size={32} block mb={4}>
          영어 자격증 풀
        </B.BaseText>

        <S.StyledCardContainer>
          <S.StyledCardWrapper>
            <PoolCamCard streamManager={this.state.publisher} />
          </S.StyledCardWrapper>

          {fill(Array(5), 0).map((_, index) => (
            <S.StyledCardWrapper key={index}>
              <PoolCamCard
                streamManager={
                  this.state.subscribers.length > index ? this.state.subscribers[index] : undefined
                }
              />
            </S.StyledCardWrapper>
          ))}
        </S.StyledCardContainer>

        <S.StyledFooter>
          <B.Box
            style={{ width: 300, marginLeft: 'auto', marginRight: 'auto' }}
            display="flex"
            justify="space-between"
          >
            <S.ClickableImg
              src={`/images/pool/video-${this.state.video ? 'on' : 'off'}.png`}
              alt="control"
              onClick={this.toggleVideo}
            />
            <S.ClickableImg
              src={`/images/pool/mic-${this.state.audio ? 'on' : 'off'}.png`}
              alt="control"
              onClick={this.toggleAudio}
            />
            <S.ClickableImg
              src={`/images/pool/audio-${this.state.listenMute ? 'on' : 'off'}.png`}
              alt="control"
              onClick={this.toggleListenMute}
            />
          </B.Box>
        </S.StyledFooter>

        <S.StyledDrawer
          width="400"
          placement="right"
          closable={false}
          onClose={this.props.controller.onClose}
          visible={this.props.controller.visible}
        >
          <S.StyledDrawerButton onClick={() => this.props.controller.onToggleVisible()}>
            <B.BaseText size={24} style={{ lineHeight: 100 }}>
              {this.props.controller.visible ? <RightOutlined /> : <LeftOutlined />}
            </B.BaseText>
          </S.StyledDrawerButton>
          <B.Box mtb={4}>
            <B.TextCenter>
              <img src="/images/avatar.png" alt="avater" width={140} />
              <B.BaseText block mtb={2}>
                <img src="/images/achieve/2.png" alt="avater" width={32} />{' '}
                <B.BaseText pl={1} size="huge" bold>
                  {this.props.user.nickname}
                </B.BaseText>
              </B.BaseText>
            </B.TextCenter>
          </B.Box>
        </S.StyledDrawer>
      </B.BaseTemplate>
    )
  }
}

export default withHooksHOC(PoolViewPage)
