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
    width: 315px;
    height: 58px;
    border-radius: 8px;
    text-align: center;
    padding-top: 8px;
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

export const StyledSlider = styled(Slider)`

  $.ant-slider-rail{
    height: 20px;
    color: red;
  }

  &.ant-slider-track{
    height: 30px;
  }

`

export const StyledRadioGroup = styled(Radio.Group)`
  display: flex;
  justify-content: space-between;
`

export const StyledSelectGroup = styled(Radio.Group)`
  display: flex;
  justify-content: space-between;
`

