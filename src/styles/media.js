import { css } from 'styled-components'

const sizes = {
  xs: 576 - 1,
  sm: 768 - 1,
  md: 992 - 1,
  lg: 1200 - 1,
  xl: 1600 - 1,
}

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (first, ...interpolations) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(first, ...interpolations)};
    }
  `
  return acc
}, {})

export const mediaUp = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (first, ...interpolations) => css`
    @media (min-width: ${sizes[label] + 1}px) {
      ${css(first, ...interpolations)};
    }
  `
  return acc
}, {})
