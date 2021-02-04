import styled from 'styled-components'
import { gutterMargin, gutterPadding, mediaGutter, mediaHidden } from '../../../styles/styled.css'
import { isNumber } from '../../../utils'

export const BaseText = styled.span`
  ${gutterMargin}
  ${gutterPadding}
    ${mediaGutter}
    ${mediaHidden}

  color: ${(props) =>
    (props.type === 'primary' && props.theme.primary) ||
    (props.type === 'subText' && props.theme.subText) ||
    (props.type === 'optional' && props.theme.optionalText) ||
    (props.type === 'danger' && props.theme.danger) ||
    (props.type === 'text' && props.theme.text) ||
    (props.type === 'white' && 'white') ||
    'inherit'};

  font-size: ${(props) =>
    (props.size === 'huge' && props.theme.huge + 'px') ||
    (props.size === 'big' && props.theme.big + 'px') ||
    (props.size === 'medium' && props.theme.medium + 'px') ||
    (props.size === 'small' && props.theme.small + 'px') ||
    (props.size === 'tiny' && props.theme.tiny + 'px') ||
    (isNumber(props.size) && props.size + 'px') ||
    'inherit'};

  ${(props) => props.underline && 'text-decoration: underline;'}
  ${(props) => props.lineThrough && 'text-decoration: line-through;'}

  ${(props) => props.bold && 'font-weight: bold;'}
  ${(props) => props.normal && 'font-weight: normal;'}

  ${(props) => props.block && 'display: block;'}
  ${(props) => props.clickable && 'cursor: pointer;'}
`
