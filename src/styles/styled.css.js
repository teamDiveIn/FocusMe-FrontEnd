import { css } from 'styled-components'
import { media, mediaUp } from './media'

export const gutterMargin = (props) => css`
  ${props.m !== undefined ? `margin: ${props.m * 10}px;` : ``}
  ${props.mlr !== undefined
    ? `margin-left: ${props.mlr * 10}px; margin-right: ${props.mlr * 10}px;`
    : ``}
    ${props.mtb !== undefined
    ? `margin-top: ${props.mtb * 10}px; margin-bottom: ${props.mtb * 10}px;`
    : ``}
    ${props.ml !== undefined ? `margin-left: ${props.ml * 10}px;` : ``}
    ${props.mt !== undefined ? `margin-top: ${props.mt * 10}px;` : ``}
    ${props.mr !== undefined ? `margin-right: ${props.mr * 10}px;` : ``}
    ${props.mb !== undefined ? `margin-bottom: ${props.mb * 10}px;` : ``}
`

export const gutterPadding = (props) => css`
  ${props.p !== undefined ? `padding: ${props.p * 10}px;` : ``}
  ${props.plr !== undefined
    ? `padding-left: ${props.plr * 10}px; padding-right: ${props.plr * 10}px;`
    : ``}
    ${props.ptb !== undefined
    ? `padding-top: ${props.ptb * 10}px; padding-bottom: ${props.ptb * 10}px;`
    : ``}
    ${props.pl !== undefined ? `padding-left: ${props.pl * 10}px;` : ``}
    ${props.pt !== undefined ? `padding-top: ${props.pt * 10}px;` : ``}
    ${props.pr !== undefined ? `padding-right: ${props.pr * 10}px;` : ``}
    ${props.pb !== undefined ? `padding-bottom: ${props.pb * 10}px;` : ``}
`
export const mediaGutter = (props) => css`
  ${props.xs !== undefined &&
  media.xs`
    ${gutterMargin(props.xs)}
    ${gutterPadding(props.xs)}
  `}

  ${props.sm !== undefined &&
  media.sm`
    ${gutterMargin(props.sm)}
    ${gutterPadding(props.sm)}
  `}

  ${props.md !== undefined &&
  media.md`
    ${gutterMargin(props.md)}
    ${gutterPadding(props.md)}
  `}

  ${props.lg !== undefined &&
  media.lg`
    ${gutterMargin(props.lg)}
    ${gutterPadding(props.lg)}
  `}

  ${props.xl !== undefined &&
  media.xl`
    ${gutterMargin(props.xl)}
    ${gutterPadding(props.xl)}
  `}
`

export const mediaHidden = (props) => css`
  ${props.hiddenXsDown &&
  media.xs`
    display: none;
  `}

  ${props.hiddenSmDown &&
  media.sm`
    display: none;
  `}

  ${props.hiddenMdDown &&
  media.md`
    display: none;
  `}

  ${props.hiddenLgDown &&
  media.lg`
    display: none;
  `}

  ${props.hiddenXlDown &&
  media.xl`
      display: none;
    `}

  ${props.hidden && `display: none;`}

  ${props.hiddenXsUp &&
  mediaUp.xs`
    display: none;
  `}

  ${props.hiddenSmUp &&
  mediaUp.sm`
      display: none;
    `}

  ${props.hiddenMdUp &&
  mediaUp.md`
      display: none;
    `}

  ${props.hiddenLgUp &&
  mediaUp.lg`
      display: none;
    `}

  ${props.hiddenXlUp &&
  mediaUp.xl`
      display: none;
    `}
`
