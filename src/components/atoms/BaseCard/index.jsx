import { Card } from 'antd'
import styled from 'styled-components'

export const BaseCard = ({ children, backgroundColor, shadow }) => {
  return (
    <StyledCard backgroundcolor={backgroundColor} shadow={shadow ? 'true' : undefined}>
      {children}
    </StyledCard>
  )
}

const StyledCard = styled(Card)`
  background-color: ${(props) => props.backgroundcolor || `white`};
  border: 1px solid ${(props) => props.backgroundcolor || 'white'};

  ${(props) => props.shadow && `box-shadow: 0px 25px 25px rgba(0,0,0,0.25)`}
`
