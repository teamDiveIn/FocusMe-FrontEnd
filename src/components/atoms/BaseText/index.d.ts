import {
  GutterPaddingProps,
  GutterMarginProps,
  MediaGutterProps,
  MediaHiddenProps,
} from '../../../styles/styled.css'
interface Props extends GutterPaddingProps, GutterMarginProps, MediaGutterProps, MediaHiddenProps {
  type?: 'primary' | 'optional' | 'subText' | 'danger' | 'white' | 'text'
  underline?: boolean
  lineThrough?: boolean
  bold?: boolean
  normal?: boolean
  block?: boolean
  clickable?: boolean
  size?: 'huge' | 'big' | 'medium' | 'small' | 'tiny' | number
}
export declare const BaseText: import('styled-components').StyledComponent<
  'span',
  any,
  Props,
  never
>
export {}
