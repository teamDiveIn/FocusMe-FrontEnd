import React from 'react'

interface Props {
  children?: React.ReactNode
  narrow?: boolean
  noPadding?: boolean
  backgroundColor?: string
  headerBackgroundColor?: string
  noHeaderShadow?: boolean
}
export declare const BaseTemplate: ({
  backgroundColor,
  children,
  headerBackgroundColor,
  narrow,
  noHeaderShadow,
  noPadding,
}: Props) => JSX.Element
export {}
