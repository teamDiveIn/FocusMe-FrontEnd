import styled from 'styled-components'
import { Form } from 'antd'

export const StyledFormItem = styled(Form.Item)`
  label {
    width: 100px;
    color: ${(props) => props.theme.disabled};

    &::after {
      content: '';
    }
  }
`
