import styled from 'styled-components'

export const StyledContent = styled.div`
  background: linear-gradient(-45deg, #001b2e, #0e314a, #001b2e);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`

export const StyledBackgroundImageWrapper = styled.div`
  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: url(/images/login/back.png);
    background-size: cover;
    background-position: center;
    opacity: 0.05;
  }
`
