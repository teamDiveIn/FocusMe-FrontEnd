import { GutterPaddingProps, GutterMarginProps, MediaGutterProps, MediaHiddenProps } from '../../styles/styled.css';
interface Props extends GutterPaddingProps, GutterMarginProps, MediaGutterProps, MediaHiddenProps {
    width?: number | string;
    height?: number | string;
    backgroundColor?: string;
    display?: 'block' | 'inline' | 'flex';
    align?: 'center' | 'top' | 'bottom' | 'stretch';
    justify?: 'start' | 'end' | 'center' | 'space-between';
}
export declare const Box: import("styled-components").StyledComponent<"div", any, Props, never>;
export {};
