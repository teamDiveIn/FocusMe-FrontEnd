import styled from 'styled-components'

export const StyledCardWrapper = styled.div`
  position: relative;

  transition: transform 0.2s;
  &:hover {
    transform: translateY(-5px) scale(1.03);
  }
`

export const StyledImgCard = styled.img`
  width: 320px;
  position: absolute;
  bottom: 0;
`

export const StyledCardContent = styled.div`
  width: 320px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.primaryDark};
  border-radius: 50px;
  box-shadow: 0px 4px 20px rgba(0, 3, 32, 0.5);
`
