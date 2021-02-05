/* eslint no-undef: "off" */
import { useCallback, useState } from 'react'
import { message } from 'antd'
import { useEffect } from 'react'
import { nodeApiAxios } from 'src/lib/axios'
import { OpenVidu } from 'openvidu-browser'

export const useController = () => {
  const [visible, setVisible] = useState(true)

  const onToggleVisible = useCallback(() => {
    setVisible(!visible)
  }, [visible])

  const onClose = useCallback(() => {
    setVisible(false)
  }, [])

  //////////////////////////////////////////////////////////////////////////////////////////////////////
  const [, setOV] = useState()
  const [sessionData, setSessionData] = useState({
    sessionName: '',
    session: undefined,
    nickname: 'testNickname',
    mainStreamManager: undefined,
    publisher: undefined,
    subscribers: [],
    token: undefined,
  })

  useEffect(() => {
    const OV = new OpenVidu()
    setOV(OV)

    const mySession = OV.initSession()
    setSessionData({ ...sessionData, session: mySession })

    mySession.on('streamCreated', (event) => {
      const subscriber = mySession.subscribe(event.stream, undefined)
      const subscribers = sessionData.subscribers
      subscribers.push(subscriber)

      setSessionData({ ...sessionData, subscribers })
    })

    const deleteSubscriber = (streamManager) => {
      const subscribers = sessionData.subscribers
      let index = subscribers.indexOf(streamManager, 0)
      if (index > -1) {
        subscribers.splice(index, 1)
        setSessionData({ ...sessionData, subscribers })
      }
    }

    mySession.on('streamDestroyed', (event) => {
      deleteSubscriber(event.stream.streamManager)
    })

    async function run() {
      const sessionName = 'test'
      const { data } = await nodeApiAxios.post('/webrtc/token', {
        session: sessionName,
      })

      const { token } = data

      await mySession.connect(token, { clientData: {} })

      const publisher = OV.initPublisher(undefined, {
        audioSource: undefined, // The source of audio. If undefined default microphone
        videoSource: undefined, // The source of video. If undefined default webcam
        publishAudio: true, // Whether you want to start publishing with your audio unmuted or not
        publishVideo: true, // Whether you want to start publishing with your video enabled or not
        resolution: '640x480', // The resolution of your video
        frameRate: 30, // The frame rate of your video
        insertMode: 'APPEND', // How the video is inserted in the target element 'video-container'
        mirror: false, // Whether to mirror your local video or not
      })

      mySession.publish(publisher)

      // Set the main video in the page to display our webcam and store our Publisher
      setSessionData({
        ...sessionData,
        mainStreamManager: publisher,
        publisher,
        token,
        sessionName,
      })
    }

    run()
    // eslint-disable-next-line
  }, [])

  const leaveSession = useCallback(async () => {
    const mySession = sessionData.session

    if (mySession) {
      mySession.disconnect()
    }

    setOV(undefined)
    setSessionData({
      session: undefined,
      subscribers: [],
      mySessionId: 'SessionA',
      myUserName: 'Participant' + Math.floor(Math.random() * 100),
      mainStreamManager: undefined,
      publisher: undefined,
    })

    // TODO: 자리를 뜰 때 node서버에
    await nodeApiAxios.delete('/webrtc/token', {
      session: sessionData.sessionName,
      token: sessionData.token,
    })
  }, [sessionData.session, sessionData.token, sessionData.sessionName])

  //////////////////////////////////////////////////////////////////////////////////////////////////////

  // 테스트 웹 연결
  useEffect(() => {
    async function run() {
      // const { data } = await nodeApiAxios.post('/webrtc/token', {
      //   session: 'test',
      // })
      // console.log(data)
    }

    run()
  }, [])

  // Model URL
  const URL = 'https://teachablemachine.withgoogle.com/models/3p4QdqNUG/'
  let model, webcam, ctx, labelContainer, maxPredictions

  async function init() {
    const modelURL = URL + 'model.json'
    const metadataURL = URL + 'metadata.json'

    model = await tmPose.load(modelURL, metadataURL)
    maxPredictions = model.getTotalClasses()

    const sizeX = 280 // webcam 사이즈
    const sizeY = 270
    const flip = true // webcam 좌우 반전 flip 설정
    webcam = new tmPose.Webcam(sizeX, sizeY, flip) // webcam 생성

    try {
      await webcam.setup() // request access to the webcam
      await webcam.play()
      window.requestAnimationFrame(loop)

      // canvas에 웹캠 그리기
      const canvas = document.getElementById('my-canvas')
      if (!canvas) return

      canvas.width = sizeX
      canvas.height = sizeY
      ctx = canvas.getContext('2d')

      // 예측결과 표시할 div
      labelContainer = document.getElementById('label-container')
      for (let i = 0; i < maxPredictions; i++) {
        // and class labels
        labelContainer.appendChild(document.createElement('div'))
      }
    } catch (e) {
      message.error('카메라를 활성화해주세요')
    }
  }

  async function loop(timestamp) {
    webcam.update() // update the webcam frame
    await predict() // 추론 수행
    window.requestAnimationFrame(loop)
  }

  async function predict() {
    // Prediction #1: 입력 이미지에서 pose 추론
    // estimatePose can take in an image, video or canvas html element
    const { pose, posenetOutput } = await model.estimatePose(webcam.canvas)
    // Prediction 2: pose를 classification (어떤 포즈인지)
    const prediction = await model.predict(posenetOutput)

    // prediction에 결과 저장

    for (let i = 0; i < maxPredictions; i++) {
      const classPrediction = prediction[i].className + ': ' + prediction[i].probability.toFixed(2)
      labelContainer.childNodes[i].innerHTML = classPrediction
    }
    // 0번째 클래스 (집중하는 중)의 확률을 수로 받아오기
    //console.log(prediction[0].probability);

    // 각 부위의 x,y 좌표 받아오기
    // 0: nose 1: leftEye 2:rightEye 3:leftEar 4:rightEar 5:leftShoulder 6:rightShoulder
    //console.log(pose.keypoints[0].position);

    // 포즈 스켈레톤 그리기 (선택사항)
    drawPose(pose)
  }

  function drawPose(pose) {
    if (webcam.canvas) {
      ctx.drawImage(webcam.canvas, 0, 0)
      // 키포인트와 스켈레톤 그리기
      if (pose) {
        const minPartConfidence = 0.5
        tmPose.drawKeypoints(pose.keypoints, minPartConfidence, ctx)
        tmPose.drawSkeleton(pose.keypoints, minPartConfidence, ctx)
      }
    }
  }

  return { init, onToggleVisible, visible, onClose, leaveSession }
}
