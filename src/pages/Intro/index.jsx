import * as B from 'src/components'
import * as S from './style'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import theme from 'src/styles/theme'
import './css/style.css'
import { Fade } from 'react-reveal'

const IntroPage = () => {
  return (
    <div>
      <B.BaseTemplate
        backgroundColor={theme.primaryOverlay}
        isIntro={true}
        headerBackgroundColor={theme.primaryOverlay}
      ></B.BaseTemplate>
      <S.StyledSection id="intro" className="clearfix">
        <div className="container d-flex h-100" style={{ marginLeft: '10%', marginRight: '10%' }}>
          <div className="row justify-content-center align-self-center">
            <div className="col-md-6 intro-info order-md-first order-last">
              <Fade bottom distance="20px" delay={0} duration={700}>
                <h2>
                  효율적인 시간관리와 집중을 위해
                  <br />
                  AI가 늘 당신과 함께{' '}
                </h2>
                <h3>혼자서 집중하기 어려울 땐? 다이브인! </h3>
              </Fade>
              <Fade bottom distance="20px" delay={100} duration={700}>
                <Link to="/home">
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{
                      fontSize: '16px',
                      width: '250px',
                      height: '60px',
                      borderRadius: '30px',
                      marginLeft: '10%',
                    }}
                  >
                    지금 집중 시작하기
                  </Button>
                </Link>
              </Fade>
              <Fade right distance="20px" delay={1000} duration={700}>
                <div style={{ width: '100px', position: 'absolute', top: '10%', right: '30%' }}>
                  <img src="/images/introPage/person.png" alt="" className="img-fluid" />
                </div>
              </Fade>
            </div>
          </div>
        </div>
        <Fade bottom distance="20px" delay={200} duration={700}>
          <img
            src="/images/introPage/pattern2.png"
            alt=""
            className="img-fluid"
            style={{ width: '100%' }}
          />
        </Fade>
      </S.StyledSection>
      {/* <main id="main" style={{ marginLeft: '20%', marginRight: '20%' }}>
        <section id="about">
          <div className="container" style={{ height: '300px', textAlign: 'center' }}>
            <div className="about-content">
              <div style={{ display: 'block', marginBottom: '30px' }}>
                <img
                  src="/images/Logo_t3.png"
                  style={{
                    width: '300px',
                    display: 'inline',
                    verticalAlign: 'middle',
                    marginBottom: '30px',
                  }}
                  alt="logoimage"
                />
                <h3 style={{ display: 'inline', verticalAlign: 'middle', marginTop: '10px' }}>
                  은 이런 분들에게 도움이 될 수 있습니다!
                </h3>
              </div>
              <ul>
                <li>
                  <p>카페나 독서실, 모르는 사람들과 한 공간에 함께해야 집중이 잘 되는 카공족</p>
                </li>
                <li>
                  <p>공부하고자 하는 분야에 대해 정보가 부족해 도움이 필요한 입문자</p>
                </li>
                <li>
                  <p>친구들과 무조건 함께! 얼굴을 보며 공부해야 집중이 잘 되는 줌터디족</p>
                </li>
                <li>
                  <p>
                    더 나아가 서비스가 확장 된다면 초등학생들의 학습관 교정을 위한 공교육에도 활용될
                    수 있습니다
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="ourteam">
          <div className="container" style={{ height: '300px', textAlign: 'center' }}>
            <div className="row">
              <div className="col-lg-7 col-md-6">
                <div className="about-content">
                  <h2 style={{ position: 'relative', marginBottom: '50px' }}>
                    온라인 스터디룸인 POOL에 다이빙해 비슷한 목표를 가진 사람들과 마음껏
                    헤엄쳐보세요{' '}
                  </h2>
                  <p>다이브인의 자세한 기능이 궁금하다면?</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="ourteam">
          <div className="container" style={{ height: '300px', textAlign: 'center' }}>
            <div className="row">
              <div className="col-lg-7 col-md-6">
                <div className="about-content">
                  <h2 style={{ position: 'relative' }}>About Team</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main> */}
    </div>
  )
}

export default IntroPage
