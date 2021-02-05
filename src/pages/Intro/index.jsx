import * as B from 'src/components'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import theme from 'src/styles/theme'
import './css/style.css'

const IntroPage = () => {
  return (
    <div>
      <B.BaseTemplate backgroundColor={theme.primaryOverlay} isIntro={true}></B.BaseTemplate>
      <section id="intro" className="clearfix" style={{ marginLeft: '10%', marginRight: '10%' }}>
        <div className="container d-flex h-100">
          <div className="row justify-content-center align-self-center">
            <div className="col-md-6 intro-info order-md-first order-last">
              <h2>
                AI와 함께 목표를 이루는 그날까지 <br />
                원격으로 스터디하자!{' '}
              </h2>
              <h3>혼자서 집중하기 어려울 땐? 다이브인! </h3>
              <div>
                <Link to="/login">
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{
                      fontSize: '16px',
                      width: '250px',
                      height: '60px',
                      borderRadius: '30px',
                      marginLeft: '15%',
                    }}
                  >
                    지금 집중 시작하기
                  </Button>
                </Link>
              </div>
              <div style={{ width: '100px', position: 'absolute', top: '10%', right: '40%' }}>
                <img src="/images/introPage/person.png" alt="" className="img-fluid" />
              </div>
            </div>

            <img src="/images/introPage/pattern2.png" alt="" className="img-fluid" />
          </div>
        </div>
      </section>
      <main id="main" style={{ marginLeft: '20%', marginRight: '20%' }}>
        <section id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-6">
                <div className="about-content">
                  <h2>About Us</h2>
                  <h3>Odio sed id eos et laboriosam consequatur eos earum soluta.</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                  <p>
                    Aut dolor id. Sint aliquam consequatur ex ex labore. Et quis qui dolor nulla
                    dolores neque. Aspernatur consectetur omnis numquam quaerat. Sed fugiat nisi.
                    Officiis veniam molestiae. Et vel ut quidem alias veritatis repudiandae ut
                    fugit. Est ut eligendi aspernatur nulla voluptates veniam iusto vel quisquam.
                    Fugit ut maxime incidunt accusantium totam repellendus eum error. Et repudiandae
                    eum iste qui et ut ab alias.
                  </p>
                  <ul>
                    <li>
                      <i className="ion-android-checkmark-circle"></i> Ullamco laboris nisi ut
                      aliquip ex ea commodo consequat.
                    </li>
                    <li>
                      <i className="ion-android-checkmark-circle"></i> Duis aute irure dolor in
                      reprehenderit in voluptate velit.
                    </li>
                    <li>
                      <i className="ion-android-checkmark-circle"></i> Ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                      voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="why-us" className="wow fadeIn">
          <div className="container-fluid" stlye={{ backgroundColor: '#ffff' }}>
            <header className="section-header">
              <h3>DIVE In</h3>
              <p>은 이런 분들에게 꼭 필요합니다!</p>
            </header>

            <div className="row">
              <div className="col-lg-6">
                <div className="why-us-img">
                  <img src="img/why-us.jpg" alt="" className="img-fluid" />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="why-us-content">
                  <p>
                    Molestiae omnis numquam corrupti omnis itaque. Voluptatum quidem impedit. Odio
                    dolorum exercitationem est error omnis repudiandae ad dolorum sit.
                  </p>
                  <p>
                    Explicabo repellendus quia labore. Non optio quo ea ut ratione et quaerat. Porro
                    facilis deleniti porro consequatur et temporibus. Labore est odio. Odio omnis
                    saepe qui. Veniam eaque ipsum. Ea quia voluptatum quis explicabo sed nihil
                    repellat..
                  </p>

                  <div className="features wow bounceInUp clearfix">
                    <i className="fa fa-diamond" style={{ color: '#f058dc' }}></i>
                    <h4>Corporis dolorem</h4>
                    <p>
                      Commodi quia voluptatum. Est cupiditate voluptas quaerat officiis ex alias
                      dignissimos et ipsum. Soluta at enim modi ut incidunt dolor et.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row counters">
              <div className="col-lg-3 col-6 text-center">
                <span data-toggle="counter-up">274</span>
                <p>Clients</p>
              </div>

              <div className="col-lg-3 col-6 text-center">
                <span data-toggle="counter-up">421</span>
                <p>Projects</p>
              </div>

              <div className="col-lg-3 col-6 text-center">
                <span data-toggle="counter-up">1,364</span>
                <p>Hours Of Support</p>
              </div>

              <div className="col-lg-3 col-6 text-center">
                <span data-toggle="counter-up">18</span>
                <p>Hard Workers</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
  /*
        return (
            <div>
                <S.StyledHeaderWrapper>
                    <S.StyledHeader backgroundcolor={"#001B2E"}>
                        <div>
                            <Link to="/">
                                <BaseLogo />
                            </Link>
                        </div>

                        {logged ? (
                            <B.TextRight>
                                <img src="/images/avatar.png" alt="avater" width={30} style={{ marginRight: "10px" }}></img>
                                <B.BaseText type="white" mr={2}>{user.nickname}</B.BaseText>
                                <B.BaseText type="white" clickable onClick={() => onLogout()}>
                                    로그아웃
                  </B.BaseText>
                            </B.TextRight>
                        ) : (
                                <B.TextRight>
                                    <B.BaseText></B.BaseText>
                                    <Link to="/login">
                                        <B.BaseText type="white">로그인</B.BaseText>
                                    </Link>
                                </B.TextRight>
                            )}
                    </S.StyledHeader>
                </S.StyledHeaderWrapper>
                <header id="header">
                    <div id="topbar">
                        <div class="container">
                            <div class="social-links">
                                <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
                                <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
                                <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
                                <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="logo float-left">
                            <h1 class="text-light"><a href="#intro" class="scrollto"><span>Rapid</span></a></h1>
                        </div>
                        <nav class="main-nav float-right d-none d-lg-block">
                            <ul>
                                <li class="active"><a href="#intro">Home</a></li>
                                <li><a href="#about">About Us</a></li>
                                <li><a href="#services">Services</a></li>
                                <li><a href="#portfolio">Portfolio</a></li>
                                <li><a href="#team">Team</a></li>
                                <li class="drop-down"><a href="">Drop Down</a>
                                    <ul>
                                        <li><a href="#">Drop Down 1</a></li>
                                        <li class="drop-down"><a href="#">Drop Down 2</a>
                                            <ul>
                                                <li><a href="#">Deep Drop Down 1</a></li>
                                                <li><a href="#">Deep Drop Down 2</a></li>
                                                <li><a href="#">Deep Drop Down 3</a></li>
                                                <li><a href="#">Deep Drop Down 4</a></li>
                                                <li><a href="#">Deep Drop Down 5</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Drop Down 3</a></li>
                                        <li><a href="#">Drop Down 4</a></li>
                                        <li><a href="#">Drop Down 5</a></li>
                                    </ul>
                                </li>
                                <li><a href="#footer">Contact Us</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
        )
        */
}

export default IntroPage
