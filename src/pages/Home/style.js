import styled from 'styled-components'

export const StyledCardWrapper = styled.div`
  position: relative;

  transition: transform 0.2s;
  &:hover {
    transform: translateY(-5px) scale(1.05);
  }
`

export const StyledImgCard = styled.img`
  width: 350px;
`

export const StyledCardContent = styled.div`
  left: 175px;
  top: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`
