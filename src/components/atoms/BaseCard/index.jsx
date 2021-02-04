import { Card } from 'antd'
import styled from 'styled-components'

export const BaseCard = ({ children, backgroundColor, shadow, radius }) => {
  return (
    <StyledCard backgroundcolor={backgroundColor} shadow={shadow ? 'true' : undefined} radius={radius}>
      {children}
    </StyledCard>
  )
}

const StyledCard = styled(Card)`
  background-color: ${(props) => props.backgroundcolor || `white`};
  border: 1px solid ${(props) => props.backgroundcolor || 'white'};
  border-radius: ${(props) => props.radius || 0};

  ${(props) => props.shadow && `box-shadow: 0px 25px 25px rgba(0,0,0,0.25)`}
`
