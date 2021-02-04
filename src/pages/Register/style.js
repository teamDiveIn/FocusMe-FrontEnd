import styled from 'styled-components'
import { Form } from 'antd'

export const StyledFormItem = styled(Form.Item)`
  label {
    width: 100px;
    color: ${(props) => props.theme.disabled};

    &::before {
      width: 14px;
      height: 14px;

      border-radius: 7px;
      margin-right: 7px;

      border: solid 2px #5fb2ff;
      content: '';
    }

    &::after {
      content: '';
    }
  }
`
