import { Card } from 'antd'
import styled from 'styled-components'

export const BaseCard = ({ children, backgroundColor }) => {
  return <StyledCard backgroundcolor={backgroundColor}>{children}</StyledCard>
}

const StyledCard = styled(Card)`
  background-color: ${(props) => props.backgroundcolor || `white`};
  border: 1px solid ${(props) => props.backgroundcolor || 'white'};
`
