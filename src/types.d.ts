declare module 'rc-animate'

declare module 'react-reveal' {
  import React from 'react'

  interface FadeProps {
    top?: boolean
    right?: boolean
    left?: boolean
    bottom?: boolean

    distance?: string
    delay?: number

    children?: React.ReactNode
  }

  export const Fade: React.FC<FadeProps>
}
