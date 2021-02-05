import styled from 'styled-components'
import { Form, Radio, Slider } from 'antd'

export const StyledFormItem = styled(Form.Item)`
  label {
    width: 100px;
    color: ${(props) => props.theme.disabled};
    font-size: 16px;

    &::after {
      content: '';
    }
  }
`

export const StyledRadioButton = styled(Radio.Button)`
  background: transparent;

  && {
    flex: 1 1 auto;
    height: 50px;
    border-radius: 8px;
    text-align: center;
    line-height: 50px;
    border-left-width: 1px;
  }

  &&::before {
    display: none;
  }

  &.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
    background: transparent;
  }
`

export const StyledSlider = styled(Slider)`
  & {
    top: -14px;
  }
  & .ant-slider-rail {
    height: 32px;
  }

  & .ant-slider-track {
    height: 32px;
  }

  & .ant-slider-handle {
    width: 42px;
    height: 42px;
  }
`

export const StyledRadioGroup = styled(Radio.Group)`
  display: flex;
  justify-content: space-between;
`
