export declare type GutterType = 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5 | 6 | 7 | 8 | 9 | 10;
export interface GutterMarginProps {
    m?: GutterType;
    mlr?: GutterType;
    mtb?: GutterType;
    ml?: GutterType;
    mt?: GutterType;
    mr?: GutterType;
    mb?: GutterType;
}
export declare const gutterMargin: (props: GutterMarginProps) => import("styled-components").FlattenSimpleInterpolation;
export interface GutterPaddingProps {
    p?: GutterType;
    plr?: GutterType;
    ptb?: GutterType;
    pl?: GutterType;
    pt?: GutterType;
    pr?: GutterType;
    pb?: GutterType;
}
export declare const gutterPadding: (props: GutterPaddingProps) => import("styled-components").FlattenSimpleInterpolation;
export interface MediaGutterProps {
    xs?: GutterMarginProps & GutterPaddingProps;
    sm?: GutterMarginProps & GutterPaddingProps;
    md?: GutterMarginProps & GutterPaddingProps;
    lg?: GutterMarginProps & GutterPaddingProps;
    xl?: GutterMarginProps & GutterPaddingProps;
}
export declare const mediaGutter: (props: MediaGutterProps) => import("styled-components").FlattenSimpleInterpolation;
export interface MediaHiddenProps {
    hiddenXsDown?: boolean;
    hiddenSmDown?: boolean;
    hiddenMdDown?: boolean;
    hiddenLgDown?: boolean;
    hiddenXlDown?: boolean;
    hidden?: boolean;
    hiddenXsUp?: boolean;
    hiddenSmUp?: boolean;
    hiddenMdUp?: boolean;
    hiddenLgUp?: boolean;
    hiddenXlUp?: boolean;
}
export declare const mediaHidden: (props: MediaHiddenProps) => import("styled-components").FlattenSimpleInterpolation;
