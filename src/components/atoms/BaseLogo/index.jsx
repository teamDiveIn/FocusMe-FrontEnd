import * as B from 'src/components'
import styled from 'styled-components'

const Circle = styled.div`
  width: 16px;
  height: 16px;
  background: white;
  border-radius: 50%;
  display: inline-block;
`

export const BaseLogo = () => {
  return (
    <B.Box display="flex" align="center">
      <Circle />
      <B.BaseText pl={1} bold size={16}>
        DIVE IN
      </B.BaseText>
    </B.Box>
  )
}
