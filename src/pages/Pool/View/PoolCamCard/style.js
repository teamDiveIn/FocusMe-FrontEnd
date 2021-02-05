import styled from 'styled-components'

export const StyledCard = styled.div`
  color: white;
  background-color: ${(props) => props.theme.primaryDark};
  border-radius: 32px;

  position: relative;

  box-shadow: 0px 25px 20px -5px rgba(0, 0, 0, 0.24);
`

export const StyledVideoContent = styled.div`
  position: relative;
  min-height: 270px;
  padding-bottom: 50px;
`

export const StyledFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #0c3b61;
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;

  padding: 20px;
`

export const StyledSlider = styled.footer`
  background-color: ${(props) => props.theme.primary};
  height: 16px;
  width: 100%;
  border-radius: 8px;
`

export const StyledNicknameWrapper = styled.div`
  position: absolute;
  top: -50px;
  left: 0;
  background-color: #0c3b61;
  height: 50px;
  line-height: 50px;
  padding-left: 20px;
  padding-right: 20px;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  min-width: 120px;
  text-align: center;
`

export const StyledThumbnail = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;

  width: 280px;
  height: 270px;

  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
`
