/* eslint-disable */
declare module "@tidbits/react-tidbits/theme" {
  export type ResponsiveCSSValue = number | number[] | string | string[];

  export type SpacerConst =
    | "spacer0"
    | "spacer5"
    | "spacer10"
    | "spacer15"
    | "spacer20"
    | "spacer25"
    | "spacer30"
    | "spacer40"
    | "spacer70"
    | "tight"
    | "standardSmBp"
    | "standard"
    | "disassociate"
    | "unrelated"
    | "header"
    | "footer";

  export type Spacer = SpacerConst | SpacerConst[];

  export type TextStyleBase =
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body"
    | "bodyBpSm"
    | "bodyViewS"
    | "bodySmall"
    | "bodyXs"
    | "menuListItem"
    | "emailBody"
    | "kpi";

  export type TextStyleVariant = "Regular" | "Medium" | "Emph";

  export type TextStyle =
    | "h1Regular"
    | "h1Medium"
    | "h1Emph"
    | "h1ElevatedRegular"
    | "h1ElevatedEmph"
    | "h2Regular"
    | "h2Medium"
    | "h2Emph"
    | "h3Regular"
    | "h3Medium"
    | "h3Emph"
    | "h4Regular"
    | "h4Medium"
    | "h4Emph"
    | "h5Regular"
    | "h5Medium"
    | "h5Emph"
    | "h6Regular"
    | "h6Medium"
    | "h6Emph"
    | "bodyRegular"
    | "bodyMedium"
    | "bodyEmph"
    | "bodyViewSRegular"
    | "bodyViewSMedium"
    | "bodyViewSEmph"
    | "bodySmallRegular"
    | "bodySmallMedium"
    | "bodySmallEmph"
    | "bodyXsRegular"
    | "bodyXsEmph"
    | "menuListItemRegular"
    | "menuListItemEmph"
    | "emailBodyRegular"
    | "emailBodyEmph"
    | "kpiRegular";

  export type Breakpoint = "sm" | "md" | "lg" | "xl";

  export type TextStyles = TextStyle | TextStyle[];

  export interface ResponsiveASCBreakpoint {
    minWidth: number;
    maxWidth: number;
    contentWidth: number | string;
    paddingX: number | string;
  }

  export interface SystemColors {
    bg: string;
    bgPlaceholder: string;
    ctrl: string;
    ctrlDisabled: string;
    ctrlDisabledLabel: string;
    ctrlHover: string;
    footerBg: string;
    keyline: string;
    label: string;
    labelCaption: string;
    labelPlaceholder: string;
    labelLegal: string;
    navBg: string;
    navLabel: string;
    navLabelDisabled: string;
    navLabelHover: string;
    navLabelSelected: string;
    title: string;
    badInputBdr: string;
    badInputBg: string;
    badInputLabel: string;
    error: string;
    errorBdr: string;
    errorBg: string;
    info: string;
    infoBdr: string;
    infoBg: string;
    success: string;
    successBdr: string;
    successBg: string;
    warning: string;
    warningBdr: string;
    warningBg: string;
    clrBlue: string;
    clrGreen: string;
    clrOrange: string;
    clrPurple: string;
    clrTeal: string;
    clrGray: string;
    clrIndigo: string;
    clrPink: string;
    clrRed: string;
    clrYellow: string;
    focus: string;
  }

  export interface Colors extends SystemColors {
    [colorName: string]: string;
  }

  export type FontWeight = "light" | "regular" | "medium" | "semibold" | "bold";
  export type LineSpacing = { top: number; bottom: number };

  export interface ReactTidbitsTheme {
    space: number[] & Record<SpacerConst, number>;
    breakpoints: number[] & Record<Breakpoint, number>;
    mediaQueries: string[] & Record<Breakpoint, string>;
    colors: Colors;
    responsiveASC?: Record<Breakpoint, ResponsiveASCBreakpoint>;
    fontUrl: string;
    font: string;
    fontWeights: number[] & Record<FontWeight, number>;
    fontSizes: number[] & Partial<Record<TextStyleBase, number>>;
    lineHeights: number[] & Partial<Record<TextStyleBase, number>>;
    lineSpacings: Partial<Record<TextStyleBase, LineSpacing>>;
    textStyles: any[];
    copyTextStyle: ResponsiveCSSValue;
    radii: number[] & { default: number };
    radius: string;
    popover: {
      boxShadow: string;
    };
  }

  export const dark: ReactTidbitsTheme;
  const theme: ReactTidbitsTheme;

  export default theme;
}

declare module "@tidbits/react-tidbits/global" {
  import { DefaultTheme, GlobalStyleComponent } from "styled-components";

  export const GlobalStyle: GlobalStyleComponent<{}, DefaultTheme>;
}

declare module "@tidbits/react-tidbits/Box" {
  import {
    ResponsiveCSSValue,
    Spacer,
    TextStyles,
  } from "@tidbits/react-tidbits/theme";
  import { DefaultTheme, StyledComponent } from "styled-components";

  export interface SystemPaddingProps {
    p?: ResponsiveCSSValue;
    padding?: ResponsiveCSSValue;
    px?: ResponsiveCSSValue;
    paddingX?: ResponsiveCSSValue;
    py?: ResponsiveCSSValue;
    paddingY?: ResponsiveCSSValue;
    pt?: ResponsiveCSSValue;
    paddingTop?: ResponsiveCSSValue;
    pb?: ResponsiveCSSValue;
    paddingBottom?: ResponsiveCSSValue;
    pl?: ResponsiveCSSValue;
    paddingLeft?: ResponsiveCSSValue;
    pr?: ResponsiveCSSValue;
    paddingRight?: ResponsiveCSSValue;
  }

  export interface SystemMarginProps {
    m?: ResponsiveCSSValue;
    margin?: ResponsiveCSSValue;
    mb?: ResponsiveCSSValue;
    marginBottom?: ResponsiveCSSValue;
    mt?: ResponsiveCSSValue;
    marginTop?: ResponsiveCSSValue;
    ml?: ResponsiveCSSValue;
    marginLeft?: ResponsiveCSSValue;
    mr?: ResponsiveCSSValue;
    marginRight?: ResponsiveCSSValue;
    mx?: ResponsiveCSSValue;
    marginX?: ResponsiveCSSValue;
    my?: ResponsiveCSSValue;
    marginY?: ResponsiveCSSValue;
  }

  export interface SpaceProps extends SystemPaddingProps, SystemMarginProps {}

  export interface SystemColorProps {
    bg?: ResponsiveCSSValue;
    backgroundColor?: ResponsiveCSSValue;
    color?: ResponsiveCSSValue;
  }

  export interface SystemBackgroundImageProps {
    backgroundImage?: ResponsiveCSSValue;
    backgroundSize?: ResponsiveCSSValue;
    backgroundRepeat?: ResponsiveCSSValue;
  }

  export interface SystemSpaceProps {
    sa?: Spacer;
    spaceAbove?: Spacer;
    sb?: Spacer;
    spaceBelow?: Spacer;
  }

  export interface SystemBordersProps {
    border?: ResponsiveCSSValue;
    borderLeft?: ResponsiveCSSValue;
    borderRight?: ResponsiveCSSValue;
    borderTop?: ResponsiveCSSValue;
    borderBottom?: ResponsiveCSSValue;
    borderColor?: ResponsiveCSSValue;
    borderRadius?: ResponsiveCSSValue;
    borderStyle?: ResponsiveCSSValue;
  }

  export interface SystemBoxProps
    extends SpaceProps,
      SystemColorProps,
      SystemBackgroundImageProps,
      SystemSpaceProps,
      SystemBordersProps {
    alignContent?: ResponsiveCSSValue;
    alignItems?: ResponsiveCSSValue;
    alignSelf?: ResponsiveCSSValue;
    gridColumn?: ResponsiveCSSValue;
    gridColumnStart?: ResponsiveCSSValue;
    gridColumnEnd?: ResponsiveCSSValue;
    gridRow?: ResponsiveCSSValue;
    gridRowStart?: ResponsiveCSSValue;
    gridRowEnd?: ResponsiveCSSValue;
    gridArea?: ResponsiveCSSValue;
    bottom?: ResponsiveCSSValue;
    cursor?: ResponsiveCSSValue;
    display?: ResponsiveCSSValue;
    flex?: ResponsiveCSSValue;
    flexBasis?: ResponsiveCSSValue;
    flexDirection?: ResponsiveCSSValue;
    flexGrow?: ResponsiveCSSValue;
    flexShrink?: ResponsiveCSSValue;
    flexFlow?: ResponsiveCSSValue;
    flexWrap?: ResponsiveCSSValue;
    fontFamily?: ResponsiveCSSValue;
    fontSize?: ResponsiveCSSValue;
    width?: ResponsiveCSSValue;
    height?: ResponsiveCSSValue;
    justifyContent?: ResponsiveCSSValue;
    justifySelf?: ResponsiveCSSValue;
    justifyItems?: ResponsiveCSSValue;
    placeContent?: ResponsiveCSSValue;
    placeSelf?: ResponsiveCSSValue;
    placeItems?: ResponsiveCSSValue;
    left?: ResponsiveCSSValue;
    minWidth?: ResponsiveCSSValue;
    maxWidth?: ResponsiveCSSValue;
    maxHeight?: ResponsiveCSSValue;
    minHeight?: ResponsiveCSSValue;
    order?: ResponsiveCSSValue;
    overflow?: ResponsiveCSSValue;
    position?: ResponsiveCSSValue;
    right?: ResponsiveCSSValue;
    transition?: ResponsiveCSSValue;
    textAlign?: ResponsiveCSSValue;
    textStyle?: TextStyles;
    textTransform?: ResponsiveCSSValue;
    textOverflow?: ResponsiveCSSValue;
    top?: ResponsiveCSSValue;
    transform?: ResponsiveCSSValue;
    verticalAlign?: ResponsiveCSSValue;
    visibility?: ResponsiveCSSValue;
    whiteSpace?: ResponsiveCSSValue;
    wordBreak?: ResponsiveCSSValue;
    zIndex?: ResponsiveCSSValue;
    opacity?: ResponsiveCSSValue;
  }

  const Box: StyledComponent<"div", DefaultTheme, SystemBoxProps>;
  export type BoxProps = React.ComponentProps<typeof Box>;
  export default Box;
}

declare module "@tidbits/react-tidbits/Text" {
  import { SystemBoxProps } from "@tidbits/react-tidbits/Box";
  import { DefaultTheme, StyledComponent } from "styled-components";
  import { ResponsiveCSSValue } from "@tidbits/react-tidbits/theme";
  import React from "react";

  export interface SystemTextProps {
    truncate?: boolean;
    fontWeight?: ResponsiveCSSValue;
    lineHeight?: ResponsiveCSSValue;
    letterSpacing?: ResponsiveCSSValue;
  }

  const Text: StyledComponent<
    "p",
    DefaultTheme,
    SystemBoxProps & SystemTextProps
  >;
  export type TextProps = React.ComponentProps<typeof Text>;
  export default Text;
}

declare module "@tidbits/react-tidbits/Content" {
  import Box from "@tidbits/react-tidbits/Box";
  const Content: typeof Box;
  export type ContentProps = typeof Box;
  export default Content;
}

declare module "@tidbits/react-tidbits/Grid" {
  import { DefaultTheme, StyledComponent } from "styled-components";
  import { SystemBoxProps } from "@tidbits/react-tidbits/Box";
  import { ResponsiveCSSValue } from "@tidbits/react-tidbits/theme";

  export interface SystemGridProps {
    gap?: ResponsiveCSSValue;
    gridGap?: ResponsiveCSSValue;
    gridColumnGap?: ResponsiveCSSValue;
    gridRowGap?: ResponsiveCSSValue;
    gridAutoFlow?: ResponsiveCSSValue;
    gridAutoColumns?: ResponsiveCSSValue;
    gridAutoRows?: ResponsiveCSSValue;
    gridTemplateColumns?: ResponsiveCSSValue;
    gridTemplateRows?: ResponsiveCSSValue;
    gridTemplateAreas?: ResponsiveCSSValue;
  }

  const Grid: StyledComponent<
    "div",
    DefaultTheme,
    SystemBoxProps & SystemGridProps
  >;
  export type GridProps = React.ComponentProps<typeof Grid>;
  export default Grid;
}

declare module "@tidbits/react-tidbits/ArtworkGrid" {
  import Grid from "@tidbits/react-tidbits/Grid";
  import Text from "@tidbits/react-tidbits/Text";
  import Box from "@tidbits/react-tidbits/Box";

  export const Item: typeof Box;
  export const Artwork: typeof Box;
  export const Title: typeof Text;
  export const Status: typeof Text;
  export const Data: typeof Box;

  const ArtworkGrid: typeof Grid & {
    Item: typeof Box;
    Artwork: typeof Box;
    Title: typeof Text;
    Status: typeof Text;
    Data: typeof Box;
  };

  export default ArtworkGrid;
}

declare module "@tidbits/react-tidbits/Img" {
  import { DefaultTheme, StyledComponent } from "styled-components";
  import { ResponsiveCSSValue, Spacer } from "@tidbits/react-tidbits/theme";

  export interface SystemImgProps {
    sa?: Spacer;
    spaceAbove?: Spacer;
    sb?: Spacer;
    spaceBelow?: Spacer;
    m?: ResponsiveCSSValue;
    margin?: ResponsiveCSSValue;
    mb?: ResponsiveCSSValue;
    marginBottom?: ResponsiveCSSValue;
    mt?: ResponsiveCSSValue;
    marginTop?: ResponsiveCSSValue;
    ml?: ResponsiveCSSValue;
    marginLeft?: ResponsiveCSSValue;
    mr?: ResponsiveCSSValue;
    marginRight?: ResponsiveCSSValue;
    mx?: ResponsiveCSSValue;
    marginX?: ResponsiveCSSValue;
    my?: ResponsiveCSSValue;
    marginY?: ResponsiveCSSValue;
    p?: ResponsiveCSSValue;
    padding?: ResponsiveCSSValue;
    px?: ResponsiveCSSValue;
    paddingX?: ResponsiveCSSValue;
    py?: ResponsiveCSSValue;
    paddingY?: ResponsiveCSSValue;
    pt?: ResponsiveCSSValue;
    paddingTop?: ResponsiveCSSValue;
    pb?: ResponsiveCSSValue;
    paddingBottom?: ResponsiveCSSValue;
    pl?: ResponsiveCSSValue;
    paddingLeft?: ResponsiveCSSValue;
    pr?: ResponsiveCSSValue;
    paddingRight?: ResponsiveCSSValue;
    bg?: ResponsiveCSSValue;
    backgroundColor?: ResponsiveCSSValue;
    background?: ResponsiveCSSValue;
    backgroundSize?: ResponsiveCSSValue;
    display?: ResponsiveCSSValue;
    color?: ResponsiveCSSValue;
    cursor?: ResponsiveCSSValue;
    position?: ResponsiveCSSValue;
    top?: ResponsiveCSSValue;
    bottom?: ResponsiveCSSValue;
    left?: ResponsiveCSSValue;
    right?: ResponsiveCSSValue;
    width?: ResponsiveCSSValue;
    minWidth?: ResponsiveCSSValue;
    maxWidth?: ResponsiveCSSValue;
    fontSize?: ResponsiveCSSValue;
    fontFamily?: ResponsiveCSSValue;
    border?: ResponsiveCSSValue;
    borderRadius?: ResponsiveCSSValue;
    borderColor?: ResponsiveCSSValue;
    borderTop?: ResponsiveCSSValue;
    borderRight?: ResponsiveCSSValue;
    borderBottom?: ResponsiveCSSValue;
    borderLeft?: ResponsiveCSSValue;
    borderStyle?: ResponsiveCSSValue;
    flex?: ResponsiveCSSValue;
    order?: ResponsiveCSSValue;
    alignSelf?: ResponsiveCSSValue;
    height?: ResponsiveCSSValue;
    maxHeight?: ResponsiveCSSValue;
    minHeight?: ResponsiveCSSValue;
    textAlign?: ResponsiveCSSValue;
    alignItems?: ResponsiveCSSValue;
    alignContent?: ResponsiveCSSValue;
    justifyContent?: ResponsiveCSSValue;
    flexWrap?: ResponsiveCSSValue;
    flexBasis?: ResponsiveCSSValue;
    flexDirection?: ResponsiveCSSValue;
    justifySelf?: ResponsiveCSSValue;
    overflow?: ResponsiveCSSValue;
    verticalAlign?: ResponsiveCSSValue;
    zIndex?: ResponsiveCSSValue;
  }

  const Img: StyledComponent<"img", DefaultTheme, SystemImgProps>;
  export type ImgProps = React.ComponentProps<typeof Img>;
  export default Img;
}

declare module "@tidbits/react-tidbits/Spinner" {
  import { DefaultTheme, StyledComponent } from "styled-components";
  import { SystemBoxProps } from "@tidbits/react-tidbits/Box";

  export interface SystemSpinnerProps {
    visible: boolean;
  }

  export const Spinner: StyledComponent<
    "div",
    DefaultTheme,
    SystemBoxProps & SystemSpinnerProps
  >;

  export const InlineSpinner: StyledComponent<
    "span",
    DefaultTheme,
    SystemBoxProps & SystemSpinnerProps
  >;
}

declare module "@tidbits/react-tidbits/Panel" {
  import { DefaultTheme, StyledComponent } from "styled-components";
  import { SystemBoxProps } from "@tidbits/react-tidbits/Box";

  export interface SystemPanelVariant {
    variant?: "info" | "success" | "error" | "warning" | "standard";
  }

  const Panel: StyledComponent<
    "div",
    DefaultTheme,
    SystemBoxProps & SystemPanelVariant
  >;

  export default Panel;
}

declare module "@tidbits/react-tidbits/Banner" {
  import { SystemPanelVariant } from "@tidbits/react-tidbits/Panel";
  import { DefaultTheme, StyledComponent } from "styled-components";
  import { SystemBoxProps } from "@tidbits/react-tidbits/Box";
  import { ResponsiveCSSValue } from "@tidbits/react-tidbits/theme";

  interface SystemBannerProps extends SystemPanelVariant {
    iconComponent?: React.ComponentType;
    iconTop?: ResponsiveCSSValue;
    iconLeft?: ResponsiveCSSValue;
    iconSize?: ResponsiveCSSValue;
    dismissIconSize?: ResponsiveCSSValue;
    dismissIconRight?: ResponsiveCSSValue;
    dismissIconTop?: ResponsiveCSSValue;
    visible?: boolean;
    dismissable?: boolean;
    onDismiss?: () => void;
  }

  export const Page: StyledComponent<
    "div",
    DefaultTheme,
    SystemBoxProps & SystemBannerProps
  >;

  export const Inline: StyledComponent<
    "div",
    DefaultTheme,
    SystemBoxProps & SystemBannerProps
  >;
}

declare module "@tidbits/react-tidbits/Link" {
  import { DefaultTheme, StyledComponent } from "styled-components";
  import { SystemBoxProps } from "@tidbits/react-tidbits/Box";
  import { ResponsiveCSSValue } from "@tidbits/react-tidbits/theme";

  export interface SystemLinkProps {
    hoverColor?: ResponsiveCSSValue;
    hoverBg?: ResponsiveCSSValue;
    hoverTextDecoration?: ResponsiveCSSValue;
    href?: string;
  }

  const Link: StyledComponent<
    "a",
    DefaultTheme,
    SystemBoxProps & SystemLinkProps
  >;
  export type LinkProps = React.ComponentProps<typeof Link>;
  export default Link;
}

declare module "@tidbits/react-tidbits/HeadingLink" {
  import Link from "@tidbits/react-tidbits/Link";

  const HeadingLink: typeof Link;
  export default HeadingLink;
}

declare module "@tidbits/react-tidbits/Footer" {
  import BaseLink from "@tidbits/react-tidbits/Link";
  import Box from "@tidbits/react-tidbits/Box";

  export const Link: typeof BaseLink;

  const Footer: typeof Box & {
    Link: typeof BaseLink;
  };

  export default Footer;
}

declare module "@tidbits/react-tidbits/Breadcrumbs" {
  import { SystemLinkProps } from "@tidbits/react-tidbits/Link";
  import { DefaultTheme, StyledComponent } from "styled-components";
  import { SystemBoxProps } from "@tidbits/react-tidbits/Box";
  import { SystemTextProps } from "@tidbits/react-tidbits/Text";

  interface SystemBreadcrumbsProps {
    clickable?: boolean;
  }

  type BreadcrumbsBase = StyledComponent<
    "div",
    DefaultTheme,
    SystemBoxProps & SystemBreadcrumbsProps
  >;

  export const LinkCrumb: StyledComponent<
    "a",
    DefaultTheme,
    { clickable: boolean } & SystemLinkProps & SystemBoxProps
  >;
  export const TextCrumb: StyledComponent<
    "p",
    DefaultTheme,
    { clickable: boolean } & SystemTextProps & SystemBoxProps
  >;
  type Crumb = LinkCrumb | TextCrumb;

  const Breadcrumbs: BreadcrumbsBase & { Crumb: Crumb };
  export const Crumb: Crumb;
  export default Breadcrumbs;
}

declare module "@tidbits/react-tidbits/List" {
  import { DefaultTheme, StyledComponent } from "styled-components";
  import { SystemBoxProps } from "@tidbits/react-tidbits/Box";
  import { SystemTextProps } from "@tidbits/react-tidbits/Text";

  interface SystemListProps {
    listStyle?: "none" | "ordered" | "unordered" | "noBullet";
  }

  export const Piped: StyledComponent<
    "ul",
    DefaultTheme,
    SystemBoxProps & SystemTextProps
  >;
  export const Inline: StyledComponent<
    "ul",
    DefaultTheme,
    SystemBoxProps & SystemTextProps
  >;
  export const UL: StyledComponent<
    "ul",
    DefaultTheme,
    SystemBoxProps & SystemTextProps & SystemListProps
  >;
  export const OL: StyledComponent<
    "ol",
    DefaultTheme,
    SystemBoxProps & SystemTextProps & SystemListProps
  >;
  export const LI: StyledComponent<
    "li",
    DefaultTheme,
    SystemBoxProps & SystemTextProps
  >;
}

declare module "@tidbits/react-tidbits/HR" {
  import { DefaultTheme, StyledComponent } from "styled-components";
  import { SystemBoxProps } from "@tidbits/react-tidbits/Box";
  const HR: StyledComponent<"hr", DefaultTheme, SystemBoxProps>;
  export default HR;
}

declare module "@tidbits/react-tidbits/Breakpoint" {
  export interface BreakpointRenderProps {
    bpName: string;
    width: number;
    bpOptions: string[];
  }

  export interface BreakpointBaseProps {
    ssr?: boolean;
    defaultWidth?: number;
  }

  type BreakpointCallback<E> = (breakpoint: BreakpointRenderProps) => E;

  export interface BreakpointProps<E = JSX.Element>
    extends BreakpointBaseProps {
    children: BreakpointCallback<E>;
  }

  const Breakpoint: <E = JSX.Element>(props: BreakpointProps<E>) => E;
  export default Breakpoint;
}

declare module "@tidbits/react-tidbits/Sticky" {
  export interface StickyRenderProps {
    pinned: boolean;
  }

  export interface StickyBaseProps {
    enabled: boolean;
    zIndex?: ResponsiveCSSValue;
    backgroundColor?: ResponsiveCSSValue;
  }

  type StickCallBack<E> = (sticky: StickyRenderProps) => E;

  export interface StickyProps<E = JSX.Element> extends StickyBaseProps {
    children: StickCallBack<E>;
  }

  const Sticky: <E = JSX.Element>(props: StickyProps<E>) => E;
  export default Sticky;
}

declare module "@tidbits/react-tidbits/BreakpointContext" {
  import {
    BreakpointBaseProps,
    BreakpointRenderProps,
  } from "@tidbits/react-tidbits/Breakpoint";
  import { Context, ReactNode } from "react";

  const BreakpointContext: React.Context<BreakpointRenderProps>;

  const Consumer: typeof BreakpointContext.Consumer;
  const Provider: (
    props: BreakpointBaseProps & { children?: ReactNode }
  ) => ReturnType<typeof BreakpointContext.Provider>;

  interface WithBreakpointProps {
    breakpoint: BreakpointRenderProps;
  }

  export const withBreakpoint: <
    P extends WithBreakpointProps = WithBreakpointProps
  >(
    Component: React.ComponentType<P>
  ) => (props: Omit<P, keyof WithBreakpointProps>) => React.ReactNode;

  export const useBreakpoint: () => BreakpointRenderProps;

  const Context: { Provider: typeof Provider; Context: typeof Context };
  export default Context;
}

declare module "@tidbits/react-tidbits/Button/base" {
  import { DefaultTheme, StyledComponent } from "styled-components";
  import { SystemBoxProps } from "@tidbits/react-tidbits/Box";
  import { SystemTextProps } from "@tidbits/react-tidbits/Text";
  import { ResponsiveCSSValue } from "@tidbits/react-tidbits/theme";

  export interface SystemInteractiveTextProps {
    hoverColor?: ResponsiveCSSValue;
    hoverBg?: ResponsiveCSSValue;
    hoverBorderColor?: ResponsiveCSSValue;
  }

  export const InteractiveText: StyledComponent<
    "p",
    DefaultTheme,
    SystemBoxProps & SystemTextProps & SystemInteractiveTextProps
  >;
}

declare module "@tidbits/react-tidbits/Button" {
  import { SystemInteractiveTextProps } from "@tidbits/react-tidbits/Button/base";
  import { DefaultTheme, StyledComponent } from "styled-components";
  import { SystemBoxProps } from "@tidbits/react-tidbits/Box";
  import { SystemTextProps } from "@tidbits/react-tidbits/Text";

  export interface SystemButtonProps {
    variant?: "standard" | "destructive" | "disabled";
    large?: boolean;
    primary?: boolean;
  }

  const Button: StyledComponent<
    "button",
    DefaultTheme,
    SystemBoxProps &
      SystemTextProps &
      SystemInteractiveTextProps &
      SystemButtonProps
  >;
  export type ButtonProps = React.ComponentProps<typeof Button>;
  export default Button;
}

declare module "@tidbits/react-tidbits/MenuList" {
  import Button from "@tidbits/react-tidbits/Button";
  import BaseHR from "@tidbits/react-tidbits/HR";
  import { SystemBoxProps } from "@tidbits/react-tidbits/Box";
  import { DefaultTheme, StyledComponent } from "styled-components";
  import {
    ResponsiveCSSValue,
    Spacer,
    TextStyles,
  } from "@tidbits/react-tidbits/theme";

  export interface SystemMenuListItemProps {
    // MODIFICATION: Added href attribute
    href?: string;
    cursor?: ResponsiveCSSValue;
    color?: ResponsiveCSSValue;
    hoverBg?: ResponsiveCSSValue;
    hoverColor?: ResponsiveCSSValue;
    textStyle?: TextStyles;
    sa?: Spacer;
    spaceAbove?: Spacer;
    sb?: Spacer;
    spaceBelow?: Spacer;
    m?: ResponsiveCSSValue;
    margin?: ResponsiveCSSValue;
    mb?: ResponsiveCSSValue;
    marginBottom?: ResponsiveCSSValue;
    mt?: ResponsiveCSSValue;
    marginTop?: ResponsiveCSSValue;
    ml?: ResponsiveCSSValue;
    marginLeft?: ResponsiveCSSValue;
    mr?: ResponsiveCSSValue;
    marginRight?: ResponsiveCSSValue;
    mx?: ResponsiveCSSValue;
    marginX?: ResponsiveCSSValue;
    my?: ResponsiveCSSValue;
    marginY?: ResponsiveCSSValue;
    p?: ResponsiveCSSValue;
    padding?: ResponsiveCSSValue;
    px?: ResponsiveCSSValue;
    paddingX?: ResponsiveCSSValue;
    py?: ResponsiveCSSValue;
    paddingY?: ResponsiveCSSValue;
    pt?: ResponsiveCSSValue;
    paddingTop?: ResponsiveCSSValue;
    pb?: ResponsiveCSSValue;
    paddingBottom?: ResponsiveCSSValue;
    pl?: ResponsiveCSSValue;
    paddingLeft?: ResponsiveCSSValue;
    pr?: ResponsiveCSSValue;
    paddingRight?: ResponsiveCSSValue;
    width?: ResponsiveCSSValue;
    minWidth?: ResponsiveCSSValue;
    display?: ResponsiveCSSValue;
    border?: ResponsiveCSSValue;
    borderRadius?: ResponsiveCSSValue;
    borderColor?: ResponsiveCSSValue;
    borderTop?: ResponsiveCSSValue;
    borderRight?: ResponsiveCSSValue;
    borderBottom?: ResponsiveCSSValue;
    borderLeft?: ResponsiveCSSValue;
    borderStyle?: ResponsiveCSSValue;
    liProps?: React.ComponentPropsWithoutRef<"li">;
    selected?: boolean;
  }

  export const Item: StyledComponent<
    "button",
    DefaultTheme,
    SystemMenuListItemProps
  >;

  interface SystemMenuListButtonItemProps {
    buttonProps?: typeof Button;
    disableKb?: boolean;
  }

  export const ButtonItem: StyledComponent<
    "li",
    DefaultTheme,
    SystemBoxProps & SystemMenuListButtonItemProps
  >;

  export const HR: typeof BaseHR;

  const Outer: StyledComponent<"div", DefaultTheme, SystemBoxProps> & {
    ButtonItem: typeof ButtonItem;
    Item: typeof Item;
    HR: typeof HR;
  };

  export default Outer;
}

declare module "@tidbits/react-tidbits/MiniOverlay" {
  import { DefaultTheme, StyledComponent } from "styled-components";
  import { SystemBoxProps } from "@tidbits/react-tidbits/Box";
  import { SystemTextProps } from "@tidbits/react-tidbits/Text";

  interface MiniOverlayProps {
    controlButton: JSX.Element;
    overlayContent: JSX.Element;
  }

  export const MiniOverlay: StyledComponent<
    "div",
    DefaultTheme,
    SystemBoxProps & MiniOverlayProps
  >;

  export const MiniLink: StyledComponent<
    "a",
    DefaultTheme,
    SystemBoxProps & SystemTextProps & FocusStyleProps
  >;
}

declare module "@tidbits/react-tidbits/TopHeader" {
  import BaseLink, { SystemLinkProps } from "@tidbits/react-tidbits/Link";
  import MenuList from "@tidbits/react-tidbits/MenuList";
  import { MiniOverlay } from "@tidbits/react-tidbits/MiniOverlay";
  import { DefaultTheme, StyledComponent } from "styled-components";
  import { SystemBoxProps } from "@tidbits/react-tidbits/Box";
  import { SystemTextProps } from "@tidbits/react-tidbits/Text";

  export const Banner: typeof BaseLink;
  export const BannerText: StyledComponent<
    "h1",
    DefaultTheme,
    SystemBoxProps & SystemTextProps
  >;

  export interface SystemTopHeaderLinksProps {
    maxLinks?: number;
    overflowLabel?: string;
    mini?: boolean;
  }

  export interface SystemTopHeaderLinkProps {
    active?: boolean;
  }

  export const Links: StyledComponent<
    "ul",
    DefaultTheme,
    SystemBoxProps & SystemTopHeaderLinksProps
  >;
  export const Link: StyledComponent<
    "a",
    DefaultTheme,
    SystemTopHeaderLinkProps & SystemLinkProps & SystemBoxProps
  >;

  export interface SystemTopHeaderUserProps {
    mini?: boolean;
    childDropdown?: JSX.Element;
  }

  export const User: StyledComponent<
    "div",
    DefaultTheme,
    SystemBoxProps & SystemTopHeaderUserProps
  >;

  export const UserMenu: typeof MenuList;

  interface SystemTopHeaderProps {
    variant?: "full" | "mini";
    banner?: JSX.Element;
    links?: JSX.Element;
    user?: JSX.Element;
    containerProps?: typeof Box; // as header
  }

  type TopHeaderComponentType = (p: SystemTopHeaderProps) => JSX.Element;

  export const MiniUser: typeof MiniOverlay;

  const TopHeader: TopHeaderComponentType & {
    Banner: typeof Banner;
    Links: typeof Links;
    Link: typeof Link;
    User: typeof User;
    UserMenu: typeof UserMenu;
    MiniUser: typeof MiniUser;
    BannerText: typeof BannerText;
  };

  export default TopHeader;
}

declare module "@tidbits/react-tidbits/utils/createSvg" {
  import { DefaultTheme, StyledComponent } from "styled-components";
  import { ResponsiveCSSValue, Spacer } from "@tidbits/react-tidbits/theme";

  export interface SystemIconProps {
    sa?: Spacer;
    spaceAbove?: Spacer;
    sb?: Spacer;
    spaceBelow?: Spacer;
    m?: ResponsiveCSSValue;
    margin?: ResponsiveCSSValue;
    mb?: ResponsiveCSSValue;
    marginBottom?: ResponsiveCSSValue;
    mt?: ResponsiveCSSValue;
    marginTop?: ResponsiveCSSValue;
    ml?: ResponsiveCSSValue;
    marginLeft?: ResponsiveCSSValue;
    mr?: ResponsiveCSSValue;
    marginRight?: ResponsiveCSSValue;
    mx?: ResponsiveCSSValue;
    marginX?: ResponsiveCSSValue;
    my?: ResponsiveCSSValue;
    marginY?: ResponsiveCSSValue;
    p?: ResponsiveCSSValue;
    padding?: ResponsiveCSSValue;
    px?: ResponsiveCSSValue;
    paddingX?: ResponsiveCSSValue;
    py?: ResponsiveCSSValue;
    paddingY?: ResponsiveCSSValue;
    pt?: ResponsiveCSSValue;
    paddingTop?: ResponsiveCSSValue;
    pb?: ResponsiveCSSValue;
    paddingBottom?: ResponsiveCSSValue;
    pl?: ResponsiveCSSValue;
    paddingLeft?: ResponsiveCSSValue;
    pr?: ResponsiveCSSValue;
    paddingRight?: ResponsiveCSSValue;
    display?: ResponsiveCSSValue;
    position?: ResponsiveCSSValue;
    minWidth?: ResponsiveCSSValue;
    maxWidth?: ResponsiveCSSValue;
    width?: ResponsiveCSSValue;
    color?: ResponsiveCSSValue;
    bg?: ResponsiveCSSValue;
    border?: ResponsiveCSSValue;
    borderRadius?: ResponsiveCSSValue;
    borderColor?: ResponsiveCSSValue;
    borderTop?: ResponsiveCSSValue;
    borderRight?: ResponsiveCSSValue;
    borderBottom?: ResponsiveCSSValue;
    borderLeft?: ResponsiveCSSValue;
    borderStyle?: ResponsiveCSSValue;
    order?: ResponsiveCSSValue;
    alignSelf?: ResponsiveCSSValue;
    height?: ResponsiveCSSValue;
    minHeight?: ResponsiveCSSValue;
    maxHeight?: ResponsiveCSSValue;
    flexBasis?: ResponsiveCSSValue;
    justifySelf?: ResponsiveCSSValue;
    top?: ResponsiveCSSValue;
    left?: ResponsiveCSSValue;
    right?: ResponsiveCSSValue;
    bottom?: ResponsiveCSSValue;
    opacity?: ResponsiveCSSValue;
  }

  const I: React.FC<
    Omit<Omit<React.ComponentPropsWithRef<"svg">, "width">, "height">
  >;

  const Icon: StyledComponent<typeof I, DefaultTheme, SystemIconProps>;
  export type IconProps = React.ComponentProps<typeof Icon>;
  export default Icon;
}

declare module "@tidbits/react-tidbits/Icons/ProfileIcon" {
  import Icon from "@tidbits/react-tidbits/utils/createSvg";
  const ProfileIcon: typeof Icon;
  export default ProfileIcon;
}

declare module "@tidbits/react-tidbits/Icons/ProfileThinIcon" {
  import Icon from "@tidbits/react-tidbits/utils/createSvg";
  const ProfileThinIcon: typeof Icon;
  export default ProfileThinIcon;
}

declare module "@tidbits/react-tidbits/Icons/HelpThinIcon" {
  import Icon from "@tidbits/react-tidbits/utils/createSvg";
  const HelpThinIcon: typeof Icon;
  export default HelpThinIcon;
}

declare module "@tidbits/react-tidbits/Icons/ChartBarFilledIcon" {
  import Icon from "@tidbits/react-tidbits/utils/createSvg";
  const ChartBarFilledIcon: typeof Icon;
  export default ChartBarFilledIcon;
}

declare module "@tidbits/react-tidbits/Icons/Circle_moonIcon" {
  import Icon from "@tidbits/react-tidbits/utils/createSvg";
  const Circle_moonIcon: typeof Icon;
  export default Circle_moonIcon;
}

declare module "@tidbits/react-tidbits/Icons/Circle_moon_filledIcon" {
  import Icon from "@tidbits/react-tidbits/utils/createSvg";
  const Circle_moon_filledIcon: typeof Icon;
  export default Circle_moon_filledIcon;
}

declare module "@tidbits/react-tidbits/Icons/CheckmarkIcon" {
  import Icon from "@tidbits/react-tidbits/utils/createSvg";
  const CheckmarkIcon: typeof Icon;
  export default CheckmarkIcon;
}

declare module "@tidbits/react-tidbits/Icons/CheckmarkCircleIcon" {
  import Icon from "@tidbits/react-tidbits/utils/createSvg";
  const CheckmarkCircleIcon: typeof Icon;
  export default CheckmarkCircleIcon;
}

declare module "@tidbits/react-tidbits/Icons/CheckmarkFilledIcon" {
  import Icon from "@tidbits/react-tidbits/utils/createSvg";
  const CheckmarkFilledIcon: typeof Icon;
  export default CheckmarkFilledIcon;
}

declare module "@tidbits/react-tidbits/Icons/StarIcon" {
  import Icon from "@tidbits/react-tidbits/utils/createSvg";
  const StarIcon: typeof Icon;
  export default StarIcon;
}

declare module "@tidbits/react-tidbits/Icons/StarFilledIcon" {
  import Icon from "@tidbits/react-tidbits/utils/createSvg";
  const StarFilledIcon: typeof Icon;
  export default StarFilledIcon;
}

declare module "@tidbits/react-tidbits/Icons/SearchAltIcon" {
  import Icon from "@tidbits/react-tidbits/utils/createSvg";
  const SearchAltIcon: typeof Icon;
  export default SearchAltIcon;
}

declare module "@tidbits/react-tidbits/Icons/UpIcon" {
  import Icon from "@tidbits/react-tidbits/utils/createSvg";
  const UpIcon: typeof Icon;
  export default UpIcon;
}

declare module "@tidbits/react-tidbits/Icons/DownIcon" {
  import Icon from "@tidbits/react-tidbits/utils/createSvg";
  const DownIcon: typeof Icon;
  export default DownIcon;
}

declare module "@tidbits/react-tidbits/Icons/LeftIcon" {
  import Icon from "@tidbits/react-tidbits/utils/createSvg";
  const LeftIcon: typeof Icon;
  export default LeftIcon;
}

declare module "@tidbits/react-tidbits/Icons/HamburgerIcon" {
  import Icon from "@tidbits/react-tidbits/utils/createSvg";
  const HamburgerIcon: typeof Icon;
  export default HamburgerIcon;
}

declare module "@tidbits/react-tidbits/Icons/DownloadIcon" {
  import Icon from "@tidbits/react-tidbits/utils/createSvg";
  const DownloadIcon: typeof Icon;
  export default DownloadIcon;
}

declare module "@tidbits/react-tidbits/Icons/PlusAltThinIcon" {
  import Icon from "@tidbits/react-tidbits/utils/createSvg";
  const PlusAltThinIcon: typeof Icon;
  export default PlusAltThinIcon;
}

declare module "@tidbits/react-tidbits/Icons/DeleteIcon" {
  import Icon from "@tidbits/react-tidbits/utils/createSvg";
  const DeleteIcon: typeof Icon;
  export default DeleteIcon;
}

declare module "@tidbits/react-tidbits/Icons/WarningTriangleFilledIcon" {
  import Icon from "@tidbits/react-tidbits/utils/createSvg";
  const WarningTriangleFilledIcon: typeof Icon;
  export default WarningTriangleFilledIcon;
}

declare module "@tidbits/react-tidbits/Icons/AlertFilledIcon" {
  import Icon from "@tidbits/react-tidbits/utils/createSvg";
  const AlertFilledIcon: typeof Icon;
  export default AlertFilledIcon;
}

declare module "@tidbits/react-tidbits/Icons/CloseSquareFilledIcon" {
  import Icon from "@tidbits/react-tidbits/utils/createSvg";
  const CloseSquareFilledIcon: typeof Icon;
  export default CloseSquareFilledIcon;
}

declare module "@tidbits/react-tidbits/Icons/AppleIcon" {
  import Icon from "@tidbits/react-tidbits/utils/createSvg";
  const AppleIcon: typeof Icon;
  export default AppleIcon;
}

declare module "@tidbits/react-tidbits/Icons/RightIcon" {
  import Icon from "@tidbits/react-tidbits/utils/createSvg";
  const RightIcon: typeof Icon;
  export default RightIcon;
}

declare module "@tidbits/react-tidbits/HoverText" {
  const HoverText: StyledComponent<"span", DefaultTheme, {}, never>;
  export default HoverText;
}

declare module "@tidbits/react-tidbits/TabbedHeader" {
  import { SystemLinkProps } from "@tidbits/react-tidbits/Link";
  import { DefaultTheme, StyledComponent } from "styled-components";
  import { SystemBoxProps } from "@tidbits/react-tidbits/Box";
  import { BreakpointBaseProps } from "@tidbits/react-tidbits/Breakpoint";
  import { SystemTextProps } from "@tidbits/react-tidbits/Text";

  export type TabbedHeaderVariant = "primary" | "secondary";

  export const Title: StyledComponent<
    "h1",
    DefaultTheme,
    SystemBoxProps & SystemTextProps
  >;

  export const Tabs: StyledComponent<
    "ul",
    DefaultTheme,
    SystemBoxProps & SystemTextProps & { variant?: TabbedHeaderVariant }
  >;

  export const HeaderLinksMenu: StyledComponent<
    "button",
    DefaultTheme,
    SystemBoxProps & SystemTextProps & { variant?: TabbedHeaderVariant }
  >;

  export const TabOuter: StyledComponent<"li", DefaultTheme, SystemBoxProps>;

  export const TabInner: StyledComponent<
    "a",
    DefaultTheme,
    SystemBoxProps &
      SystemLinkProps & { active?: boolean; variant?: TabbedHeaderVariant }
  >;

  export const Tab: StyledComponent<
    "a",
    DefaultTheme,
    SystemBoxProps &
      SystemLinkProps & {
        active?: boolean;
        variant?: TabbedHeaderVariant;
        liProps?: typeof TabOuter;
      }
  >;

  // HeaderLinkMenu with additional Breakpoint props
  type HeaderLinkMenuWithBreakpoint = StyledComponent<
    "ul",
    DefaultTheme,
    SystemBoxProps &
      SystemTextProps & { variant?: TabbedHeaderVariant } & BreakpointBaseProps
  >;

  // Tabs, with additional Breakpoint props
  type TabsWithBreakpoint = StyledComponent<
    "button",
    DefaultTheme,
    SystemBoxProps &
      SystemTextProps & { variant?: TabbedHeaderVariant } & BreakpointBaseProps
  >;

  export const ResponsiveTabs: HeaderLinkMenuWithBreakpoint;

  export const TabbedHeader: typeof Box & {
    Tabs: typeof Tabs;
    Tab: typeof Tab;
    Title: typeof Title;
    ResponsiveTabs: typeof ResponsiveTabs;
  };

  export default TabbedHeader;
}

declare module "@tidbits/react-tidbits/OpenState" {
  export interface OpenStateProps {
    isHidden: boolean;
    children: ({
      show,
      hide,
      setHidden,
      isHidden,
    }: {
      show: () => void;
      hide: () => void;
      setHidden: (hidden: boolean) => void;
      isHidden: boolean;
    }) => JSX.Element;
  }

  export const OpenState: FC<OpenStateProps>;
  export const OpenStateContext: ContextType<Context<boolean | null>>;
  export const OpenStateContextProvider: FC<{
    isHidden: OpenStateProps["isHidden"];
    children: OpenStateProps["children"] | JSX.Element;
  }>;
}

declare module "@tidbits/react-tidbits/utils/kb" {
  export const KEY_SPACE: number;
  export const KEY_ENTER: number;
  export const KEY_ESC: number;
  export const KEY_BACKSPACE: number;
  export const KEY_UP: number;
  export const KEY_DOWN: number;
  export const KEY_LEFT: number;
  export const KEY_RIGHT: number;

  interface KeyCodeEvent {
    keyCode: number;
  }

  export const isKbInteraction: (e: KeyCodeEvent) => boolean;
  export const isKbDismiss: (e: KeyCodeEvent) => boolean;

  export const keyUpEvent: (e: KeyCodeEvent) => boolean;
  export const keyDownEvent: (e: KeyCodeEvent) => boolean;
  export const keyLeftEvent: (e: KeyCodeEvent) => boolean;
  export const keyRightEvent: (e: KeyCodeEvent) => boolean;
}

declare module "@tidbits/react-tidbits/Popover" {
  import { PopperProps } from "react-popper";
  import { Boundary } from "popper.js";
  import { OpenState } from "@tidbits/react-tidbits/OpenState";
  import {
    isKbDismiss,
    isKbInteraction,
  } from "@tidbits/react-tidbits/utils/kb";
  import { DefaultTheme, StyledComponent } from "styled-components";
  import { BoxProps, SystemBoxProps } from "@tidbits/react-tidbits/Box";
  import { ResponsiveCSSValue } from "@tidbits/react-tidbits/theme";

  export type PopoverPlacement = "top" | "right" | "bottom" | "left";

  export { OpenState, isKbInteraction, isKbDismiss };

  export const DropdownContainer: StyledComponent<
    "div",
    DefaultTheme,
    SystemBoxProps & { boxShadow?: ResponsiveCSSValue }
  >;

  export const TooltipContainer: typeof Box;

  export interface ArrowComponentProps {
    placement?: PopoverPlacement;
    bgColor?: string;
    borderColor?: string;
    size?: number;
  }

  export const MenuArrow: StyledComponent<
    "div",
    DefaultTheme,
    SystemBoxProps & ArrowComponentProps
  >;

  export const PlainArrow: typeof MenuArrow;
  export const DEFAULT_POPPER_PROPS: Omit<PopperProps, "children">;

  export type RefHandler = (ref: HTMLElement | SVGElement | null) => void;

  interface ReferenceChildrenProps {
    ref: RefHandler;
    show: () => void;
    hide: () => void;
  }

  export interface PopoverBaseProps<ContainerProps = {}>
    extends SystemBoxProps {
    target: (props: ReferenceChildrenProps) => React.ReactNode;
    hidden: boolean;
    arrowSize: number;
    ArrowComponent: React.ComponentType<ArrowComponentProps>;
    Container: React.ComponentType<ContainerProps>;
    zIndex?: number;
    placement?: PopoverPlacement;
    boundary?: Boundary | Element;
    positionFixed?: boolean;
    role?: string;
    popperProps?: Omit<PopperProps, "children">;
    portalContainer?: Element;
    unmountOnExit?: boolean;
    mountOnEnter?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
  }

  export const Base: React.FC<PopoverBaseProps<SystemBoxProps>>;

  export interface PopoverBaseImplProps<ContainerProps = SystemBoxProps>
    extends SystemBoxProps {
    target: (props: ReferenceChildrenProps) => React.ReactNode;
    zIndex?: number;
    placement?: PopoverPlacement;
    boundary?: Boundary | Element;
    positionFixed?: boolean;
    role?: string;
    popperProps?: Omit<PopperProps, "children">;
    portalContainer?: Element;
    unmountOnExit?: boolean;
    mountOnEnter?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
    hidden?: boolean;
    arrowSize?: number;
    ArrowComponent?: React.ComponentType<ArrowComponentProps>;
    Container?: React.ComponentType<ContainerProps>;
    onMouseEnter?: React.MouseEventHandler;
    onMouseLeave?: React.MouseEventHandler;
  }

  export const BaseDropdown: React.FC<PopoverBaseImplProps>;
  export const BaseTooltip: React.FC<PopoverBaseImplProps>;

  interface OuterClickHandlerProps {
    onClickAway: () => void;
    document?: HTMLDocument | Element;
    children: ({
      ref,
      targetRef,
    }: {
      ref: RefHandler;
      targetRef: RefHandler;
    }) => JSX.Element;
  }

  export const OuterClickHandler: React.FC<OuterClickHandlerProps>;

  export const ClickAwayOpenStateChildren: ({
    show,
    hide,
    setHidden,
    isHidden,
    containerRef,
    targetRef,
  }: {
    show: () => void;
    hide: () => void;
    setHidden: (hidden: boolean) => void;
    isHidden: boolean;
    containerRef: RefHandler;
    targetRef: RefHandler;
  }) => JSX.Element;

  interface ClickAwayOpenStateProps {
    isHidden: boolean;
    onClickAway: () => void;
    children: typeof ClickAwayOpenStateChildren;
  }

  export const ClickAwayOpenState: React.FC<ClickAwayOpenStateProps>;

  interface TooltipOrDropdownProps extends PopoverBaseImplProps {
    Container?: never;
    containerProps?: SystemBoxProps;
  }

  export const Tooltip: React.FC<TooltipOrDropdownProps>;
  export const Dropdown: React.FC<TooltipOrDropdownProps>;

  export const findFocusable: (el: HTMLElement) => HTMLElement | null;

  interface DropdownMenuChildrenProps {
    show: () => void;
    hide: () => void;
    isHidden: boolean;
    setHidden: (hidden: boolean) => void;
  }

  interface DropdownMenuTargetProps extends DropdownMenuChildrenProps {
    targetProps: { ref: Ref<HTMLElement>; onClick: () => void };
  }

  export interface DropdownMenuProps extends PopoverBaseImplProps {
    Container?: never;
    containerProps?: BoxProps;
    target: (DropdownMenuProps) => React.ReactNode;
    children: (DropdownMenuChildrenProps) => JSX.Element;
  }

  export const DropdownMenu: React.FC<DropdownMenuProps>;
}

declare module "@tidbits/react-tidbits/FilterButton" {
  import { DefaultTheme, StyledComponent } from "styled-components";
  import { InteractiveText } from "@tidbits/react-tidbits/Button/base";
  import { SystemBoxProps } from "@tidbits/react-tidbits/Box";

  export interface SystemFilterButtonProps {
    dismissable?: boolean;
    hasDownArrow?: boolean;
    onDismiss?: (e: MouseEvent<HTMLButtonElement>) => void;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    dismissProps?: React.ComponentProps<typeof InteractiveText>;
    disabled?: boolean;
  }

  const FilterButton: StyledComponent<
    "button",
    DefaultTheme,
    SystemBoxProps & SystemFilterButtonProps
  >;
  export type FilterButtonProps = React.ComponentProps<typeof FilterButton>;
  export default FilterButton;
}

declare module "@tidbits/react-tidbits/FilterMenu" {
  import { Text as TextInput } from "@tidbits/react-tidbits/Input";
  import { DefaultTheme, StyledComponent } from "styled-components";
  import Box, { SystemBoxProps } from "@tidbits/react-tidbits/Box";
  import Text from "@tidbits/react-tidbits/Text";

  export const FilterItem: typeof ItemInner;
  export const OptionGroup: typeof ItemInner;
  export const Item: typeof ItemInner;
  export const Search: typeof TextInput;
  export const Filters: typeof MenuList;
  export const Options: typeof MenuList;

  export { HR };

  const FilterMenu: StyledComponent<
    "div",
    DefaultTheme,
    SystemBoxProps & { variant: "mobile" | "default" }
  > & {
    HR: typeof HR;
    FilterItem: typeof FilterItem;
    OptionGroup: typeof OptionGroup;
    Item: typeof Item;
    Search: typeof Search;
    Filters: typeof Filters;
    Options: typeof Options;
    Categories: { filters: any[]; title: string; selectedValue: string };
    Category: typeof Box;
    Pulldown: { filters: any[]; value: string; onSelect: any };
    Title: typeof Text;
  };
  export default FilterMenu;
}

declare module "@tidbits/react-tidbits/Filter" {
  import * as React from "react";
  import { FilterButtonProps } from "@tidbits/react-tidbits/FilterButton";
  import { SystemBoxProps } from "@tidbits/react-tidbits/Box";

  export interface SelectedFilter {
    filter: string;
    option: Option;
  }

  export interface Option {
    value: string;
    title: string;
  }

  export interface TopLevelOption extends Option {
    options: Option[];
    enableSearch?: boolean;
    searchPlaceholder?: string;
  }

  export interface OptionsRenderProps {
    selected: null | Option;
    onSelected: (selected: Option) => void;
  }

  export interface FilterSpec<F extends string = string> {
    value: F;
    title: string;
    disabled?: boolean;
    optionsRender?: React.FC<OptionsRenderProps>;
    options: TopLevelOption[];
  }

  export interface FilterProps<S extends FilterSpec, F extends string = string>
    extends SystemBoxProps {
    addFilterLabel: string;
    dismissLabel: string;
    filters: S<F>[];
    selected?: null | { filter: F; value: string };
    groups?: Array<Array<F>>;
    renderSelected?: (
      filters: S<F>[],
      selected: null | SelectedFilter
    ) => string;
    hideOnSelected?: boolean;
    onSelected?: (selected: null | SelectedFilter) => void;
    onDeselected?: (selected: null | SelectedFilter) => void;
    portalContainer?: HTMLElement;
    sheetCategoriesTitle?: string;
    sheetTitle?: string;
    sheetDoneTitle?: string;
    sheetCancelTitle?: string;
  }

  const Filter: React.FC<FilterProps<FilterSpec> & Partial<FilterButtonProps>>;

  export default Filter;
}

declare module "@tidbits/react-tidbits/Table" {
  import { DefaultTheme, StyledComponent } from "styled-components";
  import {
    SpaceProps,
    SystemBordersProps,
    SystemColorProps,
    SystemPaddingProps,
    SystemSpaceProps,
  } from "@tidbits/react-tidbits/Box";
  import { ResponsiveCSSValue, TextStyles } from "@tidbits/react-tidbits/theme";

  export interface SystemTableProps extends SpaceProps, SystemSpaceProps {
    minWidth?: ResponsiveCSSValue;
    maxWidth?: ResponsiveCSSValue;
    width?: ResponsiveCSSValue;
    display?: ResponsiveCSSValue;
    position?: ResponsiveCSSValue;
    top?: ResponsiveCSSValue;
    bottom?: ResponsiveCSSValue;
    left?: ResponsiveCSSValue;
    right?: ResponsiveCSSValue;
    tableLayout?: ResponsiveCSSValue;
    cursor?: ResponsiveCSSValue;
  }

  export interface SystemTHeadProps extends SystemBordersProps {
    display?: ResponsiveCSSValue;
  }

  export const TBody: StyledComponent<"tbody", DefaultTheme>;
  export const THead: StyledComponent<"thead", DefaultTheme, SystemTHeadProps>;

  export interface SystemTHBaseProps
    extends SystemBordersProps,
      SystemColorProps,
      SystemPaddingProps {
    display?: ResponsiveCSSValue;
    textStyle?: TextStyles;
    textAlign?: ResponsiveCSSValue;
    textTransform?: ResponsiveCSSValue;
    boxShadow?: ResponsiveCSSValue;
    minWidth?: ResponsiveCSSValue;
    maxWidth?: ResponsiveCSSValue;
    width?: ResponsiveCSSValue;
    cursor?: ResponsiveCSSValue;
    position?: ResponsiveCSSValue;
    top?: ResponsiveCSSValue;
    bottom?: ResponsiveCSSValue;
    left?: ResponsiveCSSValue;
    right?: ResponsiveCSSValue;
    verticalAlign?: ResponsiveCSSValue;
    whiteSpace?: ResponsiveCSSValue;
  }

  type Order = { order?: "asc" | "desc" };

  export const THBase: StyledComponent<"th", DefaultTheme, SystemTHBaseProps>;

  export const TH: StyledComponent<
    "th",
    DefaultTheme,
    SystemTHBaseProps & Order
  >;

  interface HoverProps {
    hoverColor?: ResponsiveCSSValue;
    hoverBg?: ResponsiveCSSValue;
    hoverBorderColor?: ResponsiveCSSValue;
  }

  interface TRSelectedProps {
    hoverStyles?: boolean;
    selected?: boolean;
  }

  export interface SystemTRProps
    extends HoverProps,
      TRSelectedProps,
      SystemColorProps,
      SystemBordersProps {
    display?: ResponsiveCSSValue;
    cursor?: ResponsiveCSSValue;
  }

  export const TR: StyledComponent<"tr", DefaultTheme, SystemTRProps>;

  export interface SystemTDProps
    extends SystemPaddingProps,
      SystemColorProps,
      SystemBordersProps {
    display?: ResponsiveCSSValue;
    textStyle?: TextStyles;
    textAlign?: ResponsiveCSSValue;
    textTransform?: ResponsiveCSSValue;
    boxShadow?: ResponsiveCSSValue;
    cursor?: ResponsiveCSSValue;
    position?: ResponsiveCSSValue;
    top?: ResponsiveCSSValue;
    bottom?: ResponsiveCSSValue;
    left?: ResponsiveCSSValue;
    right?: ResponsiveCSSValue;
    width?: ResponsiveCSSValue;
    minWidth?: ResponsiveCSSValue;
    maxWidth?: ResponsiveCSSValue;
    verticalAlign?: ResponsiveCSSValue;
    whiteSpace?: ResponsiveCSSValue;
    alignItems?: ResponsiveCSSValue;
  }

  export const TD: StyledComponent<"td", DefaultTheme, SystemTDProps>;

  export const Placeholder: typeof Box;

  export const Table: StyledComponent<
    "table",
    DefaultTheme,
    SystemTableProps
  > & {
    TBody: typeof TBody;
    THead: typeof THead;
    THBase: typeof THBase;
    TH: typeof TH;
    TR: typeof TR;
    TD: typeof TD;
    Placeholder: typeof Placeholder;
  };

  export default Table;
}

declare module "@tidbits/react-tidbits/Artwork" {
  import Img, { SystemImgProps } from "@tidbits/react-tidbits/Img";
  import { DefaultTheme, StyledComponent } from "styled-components";

  export const Container: typeof Box;
  export const Circle: typeof Img;
  export const Square: StyledComponent<"img", DefaultTheme, SystemImgProps>;
  export const Rectangle: typeof Img;

  const Artwork: typeof Container & {
    Container: typeof Container;
    Circle: typeof Circle;
    Square: typeof Square;
    Rectangle: typeof Rectangle;
  };

  export default Container;
}

declare module "@tidbits/react-tidbits/BoundedGrid" {
  import * as React from "react";
  import Text from "@tidbits/react-tidbits/Text";
  import { SystemBoxProps } from "@tidbits/react-tidbits/Box";
  import { SystemGridProps } from "@tidbits/react-tidbits/Grid";

  export const Heading: typeof Text;
  export const Primary: typeof Text;
  export const Secondary: typeof Text;
  export const Item: typeof Box;

  interface BoundedGridProps {
    bound?: number;
    columns?: number[];
  }

  const BoundedGrid: React.FC<
    BoundedGridProps & SystemBoxProps & SystemGridProps
  > & {
    Heading: typeof Heading;
    Primary: typeof Primary;
    Secondary: typeof Secondary;
    Item: typeof Item;
  };
  export default BoundedGrid;
}

declare module "@tidbits/react-tidbits/Proportional" {
  import { DefaultTheme, StyledComponent } from "styled-components";
  import Box, { SystemBoxProps } from "@tidbits/react-tidbits/Box";
  import { SystemImgProps } from "@tidbits/react-tidbits/Img";

  interface ContainerProps {
    aspectRatio?: number;
  }

  interface ImageProps {
    crop?: boolean;
  }

  export const Container: StyledComponent<
    "div",
    DefaultTheme,
    ContainerProps & SystemBoxProps
  >;
  export const Square: typeof Container;
  export const Wide: typeof Container;
  export const Narrow: typeof Container;
  export const Containable: typeof Box;
  export const Image: StyledComponent<
    "div",
    DefaultTheme,
    ImageProps & SystemImgProps
  >;
  export const Artwork: typeof Image;
}

declare module "@tidbits/react-tidbits/Insights" {
  import Box from "@tidbits/react-tidbits/Box";
  import Text from "@tidbits/react-tidbits/Text";

  export const Insight: typeof Box;
  export const Icon: typeof Box;
  export const Content: typeof Box;
  export const Date: typeof Text;
  export const Title: typeof Text;
  export const Highlight: typeof Text;

  const Insights: typeof Grid & {
    Insight: typeof Insight;
    Icon: typeof Icon;
    Content: typeof Content;
    Date: typeof Date;
    Title: typeof Title;
    Highlight: typeof Text;
  };

  export default Insights;
}

declare module "@tidbits/react-tidbits/Form" {
  import { DefaultTheme, StyledComponent } from "styled-components";
  import { SystemBoxProps } from "@tidbits/react-tidbits/Box";
  import Text, { SystemTextProps } from "@tidbits/react-tidbits/Text";

  export const Label: StyledComponent<
    "label",
    DefaultTheme,
    SystemTextProps & SystemBoxProps & { inline?: boolean }
  >;
  export type LabelProps = React.ComponentProps<typeof Label>;
  export const Count: typeof Text;
  export const InputError: typeof Text;
}

declare module "@tidbits/react-tidbits/Input" {
  import { DefaultTheme, StyledComponent } from "styled-components";
  import { SystemBoxProps } from "@tidbits/react-tidbits/Box";
  import { ResponsiveCSSValue, TextStyles } from "@tidbits/react-tidbits/theme";
  import { SystemTextProps } from "@tidbits/react-tidbits/Text";

  export type InputVariant = "error" | "disabled" | undefined;

  export const isDisabled: (props: {
    variant?: string;
    disabled: boolean;
  }) => boolean;

  export const isError: (props: {
    variant?: string;
    disabled: boolean;
  }) => boolean;

  interface FormFieldStyles {
    display?: ResponsiveCSSValue;
    width?: ResponsiveCSSValue;
    height?: ResponsiveCSSValue;
    lineHeight?: ResponsiveCSSValue;
    textStyle?: TextStyles;
    borderRadius?: ResponsiveCSSValue;
    borderColor?: ResponsiveCSSValue;
    bg?: ResponsiveCSSValue;
    borderWidth?: ResponsiveCSSValue;
    borderStyle?: ResponsiveCSSValue;
    pl?: ResponsiveCSSValue;
    pr?: ResponsiveCSSValue;
    color?: ResponsiveCSSValue;
  }

  export const formFieldStyles: (props: {
    variant?: string;
    theme: DefaultTheme;
  }) => FormFieldStyles;

  export const BaseTextInput: typeof Box;

  export const WithIconWrapper: typeof Box;

  interface InputIconProps {
    color?: ResponsiveCSSValue;
    width?: ResponsiveCSSValue;
    height?: ResponsiveCSSValue;
    position?: ResponsiveCSSValue;
    top?: ResponsiveCSSValue;
    mt?: ResponsiveCSSValue;
    pl?: ResponsiveCSSValue;
    pr?: ResponsiveCSSValue;
    left?: ResponsiveCSSValue;
  }

  interface SystemInputTextProps {
    IconComponent?: React.ComponentType<InputIconProps>;
    clearable?: boolean;
    boxProps?: SystemBoxProps;
    variant?: InputVariant;
  }

  export const Text: StyledComponent<
    "input",
    DefaultTheme,
    SystemBoxProps & SystemInputTextProps
  >;
  export const TextArea: StyledComponent<
    "textarea",
    DefaultTheme,
    SystemBoxProps & SystemInputTextProps
  >;
  export const SelectBase: StyledComponent<
    "select",
    DefaultTheme,
    SystemBoxProps & SystemInputTextProps
  >;

  export const Select: typeof SelectBase;
  export const Checkbox: typeof Text;
  export const CircleCheckbox: typeof Text;
  export const Radio: typeof Text;

  export const File: never;

  export const SelectButton: StyledComponent<
    "button",
    DefaultTheme,
    SystemBoxProps & SystemTextProps
  >;

  export interface DropdownSelectProps {
    id: string;
    value?: string;
    name?: string;
    typeahead?: boolean;
    dropdownProps?: SystemBoxProps;
    menuListProps?: SystemBoxProps;
    disabled?: boolean;
    variant?: InputVariant;
    placeholder?: string;
    noResultsLabel?: string;
    onChange?: (value: string) => void;
    onFilterChange?: (filter) => void;
    filterEnabled?: boolean;
    selectedValuePlaceholder?: string;
    children?: React.ReactChild<HTMLOptionElement>;
  }

  export const DropdownSelect: StyledComponent<
    Omit<"button", "onChange">,
    DefaultTheme,
    DropdownSelectProps & SystemBoxProps
  >;

  interface SystemChipsProps {
    name?: string;
    value?: string[];
    id?: string;
    children?: React.ReactChild<HTMLOptionElement>;
    ChipComponent?: React.Component;
    disabled?: boolean;
    variant?: InputVariant;
    autocompleteOnly?: boolean;
    autocompleteExtraItems?: React.Component;
    isOptionVisible: (inputValue: string, child: React.ReactElement) => boolean;
    defaultValue?: string;
    allowDuplicates?: boolean;
    placeholder?: string;
    inputProps?: SystemBoxProps;
    menuListProps?: SystemBoxProps;
    dropdownProps?: SystemBoxProps;
    chipProps?: SystemBoxProps;
    isChipDisabled?: (chipValue: string) => boolean;
    chipTitleRender?: (chipValue: string) => string;
    showDropdownIfNoResults?: boolean;
    noResultsLabel?: string;
    addOnBlur?: boolean;
    delimiter?: string;
  }
  export const Chips: StyledComponent<
    "input",
    DefaultTheme,
    SystemChipsProps & SystemBoxProps
  >;
  export type ChipsProps = React.ComponentProps<typeof Chips>;
}

declare module "@tidbits/react-tidbits/animations" {
  interface AnimationProps {
    visible: boolean;
    duration?: number;
    easing?: string;
    // react-transition-group props
    appear?: boolean;
    unmountOnExit?: boolean;
    onEnter?: () => void;
    onEntering?: () => void;
    onEntered?: () => void;
    onExit?: () => void;
    onExiting?: () => void;
    onExited?: () => void;
  }
  type Animation = FC<AnimationProps>;
  export const SlideUp: Animation;
  export const SlideDown: Animation;
  export const Fade: Animation;
}

declare module "@tidbits/react-tidbits/AddSystemButton" {
  import { SystemLinkProps } from "@tidbits/react-tidbits/Link";
  import { DefaultTheme, StyledComponent } from "styled-components";
  import { SystemBoxProps } from "@tidbits/react-tidbits/Box";

  const AddSystemButton: StyledComponent<
    "button",
    DefaultTheme,
    SystemBoxProps & SystemLinkProps
  >;

  export default AddSystemButton;
}

declare module "@tidbits/react-tidbits/Modal" {
  import { DefaultTheme, StyledComponent } from "styled-components";
  import Box, { SystemBoxProps } from "@tidbits/react-tidbits/Box";
  import { FC, Ref } from "react";
  import { ResponsiveCSSValue } from "@tidbits/react-tidbits/theme";

  export const MODAL_REASON: { DISMISSED: "DISMISSED"; CONFIRMED: "CONFIRMED" };

  type StateType = React.FC<{
    children: React.FC<{
      show: () => void;
      hide: () => void;
      isHidden: boolean;
    }>;
  }>;

  export const ModalWindow: FC<{
    open: boolean;
    fullscreen?: boolean;
    closeOnEscape?: boolean;
    closeOnClickOutside?: boolean;
    closeModal?: (reason: keyof typeof MODAL_REASON) => void;
    focusableRef?: Ref<any>;
    zIndex?: string;
    maxWidth?: ResponsiveCSSValue;
    width?: ResponsiveCSSValue;
    portalContainer?: Element;
  }>;
  const ModalContent: typeof Box;
  const ModalDetachedWindow: typeof Box;
  const Header: StyledComponent<"h2", DefaultTheme, SystemBoxProps>;
  export const ModalBody: typeof Box;
  export const ModalFooter: typeof Box;

  const Modal: {
    Header: typeof Header;
    Window: typeof ModalWindow;
    Body: typeof ModalBody;
    Footer: typeof ModalFooter;
    State: StateType;
    Content: typeof ModalContent;
    DetachedWindow: typeof ModalDetachedWindow;
  };

  export default Modal;
}

declare module "@tidbits/react-tidbits/Ref" {
  const Ref: React.FC<{
    children: React.FC<{ ref: Ref<any>; setRef: Ref<any> }>;
  }>;
  export default Ref;
}

declare module "@tidbits/react-tidbits/DL" {
  import { DefaultTheme, StyledComponent } from "styled-components";
  import { SystemBoxProps } from "@tidbits/react-tidbits/Box";
  import { SystemTextProps } from "@tidbits/react-tidbits/Text";

  export const DT: StyledComponent<
    "dt",
    DefaultTheme,
    SystemBoxProps & SystemTextProps
  >;

  export const DD: StyledComponent<
    "dd",
    DefaultTheme,
    SystemBoxProps & SystemTextProps
  >;

  export const DL: StyledComponent<"dl", DefaultTheme, SystemBoxProps> & {
    DT: typeof DT;
    DD: typeof DD;
  };

  export default DL;
}

declare module "@tidbits/react-tidbits/layouts" {
  import { DefaultTheme, StyledComponent } from "styled-components";
  import { SystemSpaceProps } from "@tidbits/react-tidbits/Box";

  interface EvenGridProps extends SystemSpaceProps {
    cols: number[] | number;
    rowGap?: string;
    columnGap?: string;
  }

  export const EvenGrid: StyledComponent<"div", DefaultTheme, EvenGridProps>;
}

declare module "@tidbits/react-tidbits/ArtworkMenuList" {
  import { DefaultTheme, StyledComponent } from "styled-components";
  import MenuList, {
    SystemMenuListItemProps,
  } from "@tidbits/react-tidbits/MenuList";

  export interface ArtworkMenuListItemProps {
    iconComponent?: JSX.Element;
    artworkSrc: string;
    title: string;
    enableIcon: boolean;
    href?: string;
  }

  export const Item: StyledComponent<
    MenuList.Item,
    DefaultTheme,
    ArtworkMenuListItemProps & SystemMenuListItemProps
  >;

  export interface ArtworkMenuListProps {
    children: React.ReactNode;
    searchPlaceHolder;
    searchValue;
    onSearchChange;
    inputProps;
  }

  export default ArtworkMenuList as typeof MenuList & ArtworkMenuListProps;
  export const ArtworkMenuList: StyledComponent<
    MenuList,
    DefaultTheme,
    ArtworkMenuListProps
  >;
}

declare module "@tidbits/react-tidbits-geo" {
  type LonLat = [number, number] | [];

  export interface Country {
    id: string;
    fillColor?: string;
    strokeColor?: string;
    value?: Record<string, string>;
  }

  export interface Geography {
    properties: {
      id: string;
      name: string;
    };
  }

  export interface TooltipData {
    geography: Geography;
    value: Record<string, string>;
    fillColor: string;
    strokeColor: string;
  }

  export interface TooltipProps extends PopoverBaseImplProps {
    content: React.FC<TooltipData>;
  }

  export interface D3ZoomTransform {
    x: number;
    y: number;
    k: number;
  }

  // just defining a portion of the d3 zoom event that we need and not importing the whole typing
  export interface D3ZoomEvent {
    transform: D3ZoomTransform;
  }

  export interface GeoProps {
    iso?: string;
    zoomable?: boolean;
    bgColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    fillColor?: string;
    activeColor?: string;
    countries?: Country[];
    tooltipProps?: TooltipProps;
    zoomTo?: string | { lonLat: LonLat; k: number };
    onZoomEnd?: (zoomEvent: D3ZoomEvent) => void; // it actually takes a D3ZoomEvent
    onZoomStart?: (zoomEvent: D3ZoomEvent) => void; // it actually takes a D3ZoomEvent
    onClick?: (e: React.MouseEvent<"path", "click">, d: TooltipData) => void;
  }

  export interface Marker {
    lonLat: LonLat;
    value: string;
    size: number;
    fillColor?: string;
    hoverColor?: string;
    opacity?: number;
    [propName: string]: any;
  }

  export interface MarkersProps {
    markers: Marker[];
    sizeRange?: [number, number];
    tooltipProps?: TooltipProps;
    onMouseEnter?: (
      e: React.MouseEvent<"circle", "mouseEnter">,
      d: Marker
    ) => void;
    onMouseLeave?: (
      e: React.MouseEvent<"circle", "mouseLeave">,
      d: Marker
    ) => void;
    onMouseDown?: (
      e: React.MouseEvent<"circle", "mouseDown">,
      d: Marker
    ) => void;
  }

  export const Markers: React.FC<MarkersProps>;

  export const Geo: React.FC<
    GeoProps & { children?: ReturnType<typeof Markers> }
  >;
}

declare module "@tidbits/react-tidbits/MetricHeader" {
  import Box, { SystemBoxProps } from "@tidbits/react-tidbits/Box";
  import Text from "@tidbits/react-tidbits/Text";
  import { DefaultTheme, StyledComponent } from "styled-components";

  const Container: typeof Box;
  const FlexBox: typeof Box;
  const Title: typeof Text;
  const Total: typeof Text;
  const Delta: typeof Text;
  const DeltaSubtitle: typeof Text;
  const Subtitle: typeof Text;
  const Divider: typeof Box;

  interface MetricHeaderProps {
    variant?: "single" | "multi";
  }

  const MetricHeader: StyledComponent<
    "div",
    DefaultTheme,
    SystemBoxProps & MetricHeaderProps
  > & {
    Container: typeof Container;
    FlexBox: typeof FlexBox;
    Title: typeof Title;
    Total: typeof Total;
    Delta: typeof Delta;
    DeltaSubtitle: typeof DeltaSubtitle;
    Subtitle: typeof Subtitle;
    Divider: typeof Divider;
  };

  export default MetricHeader;
}

declare module "@tidbits/react-tidbits/InfoTooltip" {
  import { TooltipOrDropdownProps } from "@tidbits/react-tidbits/Popover";
  import * as React from "react";
  import Box from "@tidbits/react-tidbits/Box";

  interface InfoTooltipProps extends TooltipOrDropdownProps {
    containerProps: React.ComponentProps<typeof Box>;
    buttonProps: React.ComponentProps<>;
  }

  const InfoTooltip: React.FC<InfoTooltipProps> & {
    Content: typeof Box;
  };

  export default InfoTooltip;
}

declare module "@tidbits/react-tidbits/Pre" {
  import { DefaultTheme, StyledComponent } from "styled-components";
  import { SystemSpaceProps } from "@tidbits/react-tidbits/Box";

  const Pre: StyledComponent<"pre", DefaultTheme, SystemSpaceProps>;
  export default Pre;
}

declare module "@tidbits/react-tidbits/NavMenu" {
  import BaseLink from "@tidbits/react-tidbits/Link";
  import Text from "@tidbits/react-tidbits/Text";
  import Box, { SystemBoxProps } from "@tidbits/react-tidbits/Box";
  import { DefaultTheme, StyledComponent } from "styled-components";

  export const Title: typeof Text;
  export const Links: typeof Box;
  export const Link: typeof BaseLink;
  export const CTALink: typeof BaseLink;

  const NavMenu: StyledComponent<
    "div",
    DefaultTheme,
    SystemBoxProps & { variant: "side" | "popover" | "mobile" }
  > & {
    Title: typeof Title;
    Links: typeof Links;
    Link: typeof Link;
    CTALink: typeof CTALink;
  };

  export default NavMenu;
}

declare module "@tidbits/react-tidbits/Heading" {
  import { SystemBoxProps } from "@tidbits/react-tidbits/Box";
  import { DefaultTheme, StyledComponent } from "styled-components";
  import { SystemTextProps } from "@tidbits/react-tidbits/Text";

  export const H1: StyledComponent<
    "h1",
    DefaultTheme,
    SystemBoxProps & SystemTextProps
  >;
  export const H2: StyledComponent<
    "h2",
    DefaultTheme,
    SystemBoxProps & SystemTextProps
  >;
  export const H3: StyledComponent<
    "h3",
    DefaultTheme,
    SystemBoxProps & SystemTextProps
  >;
  export const H4: StyledComponent<
    "h4",
    DefaultTheme,
    SystemBoxProps & SystemTextProps
  >;
  export const H5: StyledComponent<
    "h5",
    DefaultTheme,
    SystemBoxProps & SystemTextProps
  >;
  export const H6: StyledComponent<
    "h6",
    DefaultTheme,
    SystemBoxProps & SystemTextProps
  >;
}

declare module "@tidbits/react-tidbits/SectionHeading" {
  import { DefaultTheme, StyledComponent } from "styled-components";
  import { SystemBoxProps } from "@tidbits/react-tidbits/Box";
  import { Box } from "@tidbits/react-tidbits";

  interface SystemSectionHeadingProps {
    isSearchMode?: boolean;
    onSearchToggle?: (isSearchMode: boolean) => void;
    titleComponent?: JSX.Element;
    renderSearch?: React.Component<{ closeSearch: () => void }>;
  }

  const SectionHeading: StyledComponent<
    "div",
    DefaultTheme,
    SystemBoxProps & SystemSectionHeadingProps
  > & {
    ToolPulldown: typeof Box;
    ToolButton: typeof Box;
  };

  export default SectionHeading;
}

declare module "@tidbits/react-tidbits/Icons" {
  import ProfileIcon from "@tidbits/react-tidbits/Icons/ProfileIcon";
  import ProfileThinIcon from "@tidbits/react-tidbits/Icons/ProfileThinIcon";
  import HelpThinIcon from "@tidbits/react-tidbits/Icons/HelpThinIcon";
  import ChartBarFilledIcon from "@tidbits/react-tidbits/Icons/ChartBarFilledIcon";
  import Circle_moonIcon from "@tidbits/react-tidbits/Icons/Circle_moonIcon";
  import Circle_moon_filledIcon from "@tidbits/react-tidbits/Icons/Circle_moon_filledIcon";
  import CheckmarkIcon from "@tidbits/react-tidbits/Icons/CheckmarkIcon";
  import CheckmarkCircleIcon from "@tidbits/react-tidbits/Icons/CheckmarkCircleIcon";
  import CheckmarkFilledIcon from "@tidbits/react-tidbits/Icons/CheckmarkFilledIcon";
  import StarIcon from "@tidbits/react-tidbits/Icons/StarIcon";
  import StarFilledIcon from "@tidbits/react-tidbits/Icons/StarFilledIcon";
  import SearchAltIcon from "@tidbits/react-tidbits/Icons/SearchAltIcon";
  import UpIcon from "@tidbits/react-tidbits/Icons/UpIcon";
  import DownIcon from "@tidbits/react-tidbits/Icons/DownIcon";
  import LeftIcon from "@tidbits/react-tidbits/Icons/LeftIcon";
  import HamburgerIcon from "@tidbits/react-tidbits/Icons/HamburgerIcon";
  import DownloadIcon from "@tidbits/react-tidbits/Icons/DownloadIcon";
  import PlusAltThinIcon from "@tidbits/react-tidbits/Icons/PlusAltThinIcon";
  import DeleteIcon from "@tidbits/react-tidbits/Icons/DeleteIcon";
  import WarningTriangleFilledIcon from "@tidbits/react-tidbits/Icons/WarningTriangleFilledIcon";
  import AlertFilledIcon from "@tidbits/react-tidbits/Icons/AlertFilledIcon";
  import CloseSquareFilledIcon from "@tidbits/react-tidbits/Icons/CloseSquareFilledIcon";
  import AppleIcon from "@tidbits/react-tidbits/Icons/AppleIcon";
  import RightIcon from "@tidbits/react-tidbits/Icons/RightIcon";
  export {
    ProfileIcon,
    ProfileThinIcon,
    HelpThinIcon,
    ChartBarFilledIcon,
    Circle_moonIcon,
    Circle_moon_filledIcon,
    CheckmarkIcon,
    CheckmarkCircleIcon,
    CheckmarkFilledIcon,
    StarIcon,
    StarFilledIcon,
    SearchAltIcon,
    UpIcon,
    DownIcon,
    LeftIcon,
    HamburgerIcon,
    DownloadIcon,
    PlusAltThinIcon,
    DeleteIcon,
    WarningTriangleFilledIcon,
    AlertFilledIcon,
    CloseSquareFilledIcon,
    AppleIcon,
    RightIcon,
  };
}

declare module "@tidbits/react-tidbits" {
  import theme from "@tidbits/react-tidbits/theme";
  import Box from "@tidbits/react-tidbits/Box";
  import Text from "@tidbits/react-tidbits/Text";
  import Content from "@tidbits/react-tidbits/Content";
  import Grid from "@tidbits/react-tidbits/Grid";
  import ArtworkGrid from "@tidbits/react-tidbits/ArtworkGrid";
  import Img from "@tidbits/react-tidbits/Img";
  import Spinner from "@tidbits/react-tidbits/Spinner";
  import Panel from "@tidbits/react-tidbits/Panel";
  import Banner from "@tidbits/react-tidbits/Banner";
  import Link from "@tidbits/react-tidbits/Link";
  import HeadingLink from "@tidbits/react-tidbits/HeadingLink";
  import Footer from "@tidbits/react-tidbits/Footer";
  import Breadcrumbs from "@tidbits/react-tidbits/Breadcrumbs";
  import List from "@tidbits/react-tidbits/List";
  import HR from "@tidbits/react-tidbits/HR";
  import Breakpoint from "@tidbits/react-tidbits/Breakpoint";
  import Sticky from "@tidbits/react-tidbits/Sticky";
  import BreakpointContext from "@tidbits/react-tidbits/BreakpointContext";
  import Button from "@tidbits/react-tidbits/Button";
  import MenuList from "@tidbits/react-tidbits/MenuList";
  import MiniOverlay from "@tidbits/react-tidbits/MiniOverlay";
  import TopHeader from "@tidbits/react-tidbits/TopHeader";
  import Icons from "@tidbits/react-tidbits/Icons";
  import HoverText from "@tidbits/react-tidbits/HoverText";
  import TabbedHeader from "@tidbits/react-tidbits/TabbedHeader";
  import OpenState from "@tidbits/react-tidbits/OpenState";
  import Popover from "@tidbits/react-tidbits/Popover";
  import FilterButton from "@tidbits/react-tidbits/FilterButton";
  import FilterMenu from "@tidbits/react-tidbits/FilterMenu";
  import Filter from "@tidbits/react-tidbits/Filter";
  import Table from "@tidbits/react-tidbits/Table";
  import Artwork from "@tidbits/react-tidbits/Artwork";
  import BoundedGrid from "@tidbits/react-tidbits/BoundedGrid";
  import Proportional from "@tidbits/react-tidbits/Proportional";
  import Insights from "@tidbits/react-tidbits/Insights";
  import Form from "@tidbits/react-tidbits/Form";
  import Input from "@tidbits/react-tidbits/Input";
  import animations from "@tidbits/react-tidbits/animations";
  import AddSystemButton from "@tidbits/react-tidbits/AddSystemButton";
  import Modal from "@tidbits/react-tidbits/Modal";
  import Ref from "@tidbits/react-tidbits/Ref";
  import DL from "@tidbits/react-tidbits/DL";
  import layouts from "@tidbits/react-tidbits/layouts";
  import ArtworkMenuList from "@tidbits/react-tidbits/ArtworkMenuList";
  import geo from "@tidbits/react-tidbits-geo";
  import MetricHeader from "@tidbits/react-tidbits/MetricHeader";
  import InfoTooltip from "@tidbits/react-tidbits/InfoTooltip";
  import Pre from "@tidbits/react-tidbits/Pre";
  import NavMenu from "@tidbits/react-tidbits/NavMenu";
  import Heading from "@tidbits/react-tidbits/Heading";
  import SectionHeading from "@tidbits/react-tidbits/SectionHeading";
  export {
    theme,
    global,
    Box,
    Text,
    Content,
    Grid,
    ArtworkGrid,
    Img,
    Spinner,
    Panel,
    Banner,
    Link,
    HeadingLink,
    Footer,
    Breadcrumbs,
    List,
    HR,
    Breakpoint,
    Sticky,
    BreakpointContext,
    Button,
    MenuList,
    MiniOverlay,
    TopHeader,
    Icons,
    HoverText,
    TabbedHeader,
    OpenState,
    utils,
    Popover,
    FilterButton,
    FilterMenu,
    Filter,
    Table,
    Artwork,
    BoundedGrid,
    Proportional,
    Insights,
    Form,
    Input,
    animations,
    AddSystemButton,
    Modal,
    Ref,
    DL,
    layouts,
    ArtworkMenuList,
    geo,
    MetricHeader,
    InfoTooltip,
    Pre,
    NavMenu,
    Heading,
    SectionHeading,
  };
}
