export type FlexProps = {
  alignItems?: FlexAlign;
  justifyContent?: FlexAlign;
  alignSelf?: FlexAlign;
  justifySelf?: FlexAlign;
  width?: Width;
  gap?: string;
  height?: Height;
  aspectRatio?: string;
  flexDirection?: FlexDirection;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: string;
  margin?: string;
  marginLeft?: string;
  marginRight?: string;
  marginTop?: string;
  marginBottom?: string;
  padding?: string;
  paddingLeft?: string;
  paddingRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  boxShadow?: string;
  position?: Position;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  children?: any;
};

type Position = "absolute" | "relative" | "fixed" | "sticky";

type FlexAlign =
  | "center"
  | "flex-start"
  | "flex-end"
  | "space-between"
  | "space-evenly"
  | "space-around"
  | "stretch";
type FlexDirection = "row" | "column" | "row-reverse" | "column-reverse";
type Width =
  | "0%"
  | "20%"
  | "25%"
  | "40%"
  | "50%"
  | "60%"
  | "75%"
  | "80%"
  | "100%"
  | string;
type Height =
  | "0%"
  | "20%"
  | "25%"
  | "40%"
  | "50%"
  | "60%"
  | "75%"
  | "80%"
  | "100%"
  | string;
