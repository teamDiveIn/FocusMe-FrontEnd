import styled from 'styled-components'
import { Form, Radio } from 'antd'

export const StyledFormItem = styled(Form.Item)`
  label {
    width: 100px;
    color: ${(props) => props.theme.disabled};

    &::after {
      content: '';
    }
  }
`

export const StyledRadioButton = styled(Radio.Button)`
  background: transparent;

  && {
    width: 212px;
    border-radius: 8px;
    text-align: center;
  }

  && {
    border-left-width: 1px;
  }

  &&::before {
    display: none;
  }

  &.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
    background: transparent;
  }
`

export const StyledRadioGroup = styled(Radio.Group)`
  display: flex;
  justify-content: space-between;
`
