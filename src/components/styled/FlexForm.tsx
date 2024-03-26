import { FlexProps } from "./types";
import styled from "@emotion/styled";

const FlexForm = styled.form(
  ({
    alignItems,
    justifyContent,
    gap,
    width,
    height,
    backgroundColor,
    borderRadius,
    flexDirection,
    margin,
    marginLeft,
    marginRight,
    marginTop,
    marginBottom,
    padding,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
  }: FlexProps) => ({
    display: "flex",
    alignItems,
    justifyContent,
    gap,
    borderRadius,
    width,
    flexDirection,
    backgroundColor,
    height,
    margin,
    marginLeft,
    marginRight,
    marginTop,
    marginBottom,
    padding,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
  })
);

export default FlexForm;
