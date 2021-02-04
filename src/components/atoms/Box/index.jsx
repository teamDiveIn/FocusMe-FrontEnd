import styled from 'styled-components'
import { gutterMargin, gutterPadding, mediaGutter, mediaHidden } from '../../styles/styled.css'
import { isNumber } from '../../utils'

export const Box = styled.div`
  && {
    ${gutterMargin}
    ${gutterPadding}
    ${mediaGutter}
    ${mediaHidden}

    ${(props) =>
      props.width !== undefined ? `width: ${props.width}${isNumber(props.width) ? 'px' : ''};` : ``}

    display: ${(props) =>
      (props.display === 'inline' && 'inline-block') ||
      (props.display === 'block' && 'block') ||
      (props.display === 'flex' && 'flex') ||
      'block'};

    align-items: ${(props) =>
      (props.align === 'top' && 'start') ||
      (props.align === 'center' && 'center') ||
      (props.align === 'bottom' && 'end') ||
      (props.align === 'stretch' && 'stretch') ||
      'normal'};

    justify-content: ${(props) =>
      (props.justify === 'start' && 'start') ||
      (props.justify === 'center' && 'center') ||
      (props.justify === 'end' && 'end') ||
      (props.justify === 'space-between' && 'space-between') ||
      'normal'};

    ${(props) =>
      props.height !== undefined
        ? `height: ${props.height}${isNumber(props.height) ? 'px' : ''};`
        : ``}

    ${(props) => props.hidden && 'display: hidden;'}

    ${(props) => props.backgroundColor && `background-color: ${props.backgroundColor};`}
  }
`
