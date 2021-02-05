import React from 'react'
import { Layout } from 'antd'
import * as B from 'src/components'
import * as S from './style'
import { Link } from 'react-router-dom'
import { BaseLogo } from 'src/components/atoms/BaseLogo'
import theme from 'src/styles/theme'
import { useUserContext } from 'src/contexts/UserContext'

export const BaseTemplate = ({
  children,
  narrow = false,
  noPadding = false,
  backgroundColor = theme.primaryOverlay,
  headerBackgroundColor,
  verticalCenter,
}) => {
  const { onLogout, logged, user } = useUserContext()
  return (
    <Layout style={{ backgroundColor }}>
      <S.StyledHeaderWrapper>
        <S.StyledHeader backgroundcolor={headerBackgroundColor}>
          <div>
            <Link to="/">
              <BaseLogo />
            </Link>
          </div>

          {logged ? (
            <B.TextRight>
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

      <S.StyledContent
        narrow={narrow ? 'true' : undefined}
        nopadding={noPadding ? 'true' : undefined}
        verticalcenter={verticalCenter ? 'true' : undefined}
      >
        {children}
      </S.StyledContent>
    </Layout>
  )
}
