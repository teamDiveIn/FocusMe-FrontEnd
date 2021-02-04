import React from 'react'
import { Layout } from 'antd'
import * as S from './style'
// import { Link } from 'react-router-dom'

export const BaseTemplate = ({
  children,
  narrow = false,
  noPadding = false,
  backgroundColor = '#FFFFFF',
}) => {
  console.log(children)
  return (
    <Layout style={{ backgroundColor }}>
      <S.StyledHeaderWrapper>
        <S.StyledHeader>
          <S.StyledHeaderBox></S.StyledHeaderBox>
          <div>{/* <Link to="/">
              <B.BaseLogo />
            </Link> */}</div>

          {/* <S.StyledHeaderBox>
            <B.TextRight>
              <B.BaseText type="primary" clickable onClick={() => onLogout()}>
                로그아웃
              </B.BaseText>
            </B.TextRight>
          </S.StyledHeaderBox> */}
        </S.StyledHeader>
      </S.StyledHeaderWrapper>

      <S.StyledContent
        narrow={narrow ? 'true' : undefined}
        nopadding={noPadding ? 'true' : undefined}
      >
        {children}
      </S.StyledContent>
      {/* <S.StyledDrawer
        visible={visible}
        onClose={() => setVisible(false)}
        closable={false}
        placement="left"
        title={
          <Link to="/">
            <B.BaseLogo onClick={() => setVisible(false)} />
          </Link>
        }
      >
        <Link to="/">
          <S.StyledDrawerItem onClick={() => setVisible(false)}>
            <Row justify="space-between" align="middle">
              <span>홈</span>
            </Row>
          </S.StyledDrawerItem>
        </Link>

        {logged ? (
          <S.StyledDrawerItem
            onClick={() => {
              onLogout()
              setVisible(false)
            }}
          >
            <Row justify="space-between" align="middle">
              <span>로그아웃</span>
            </Row>
          </S.StyledDrawerItem>
        ) : (
          <Link to="/login">
            <S.StyledDrawerItem>
              <Row justify="space-between" align="middle">
                <span>로그인</span>
              </Row>
            </S.StyledDrawerItem>
          </Link>
        )}
      </S.StyledDrawer> */}
    </Layout>
  )
}