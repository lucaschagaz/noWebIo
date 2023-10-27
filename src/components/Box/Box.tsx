import React from "react";
import { Wrapper } from "./styled";
import { ViewProps } from "react-native";

export interface IProps extends ViewProps {
  children: React.ReactNode;
}

export const Box = ({ children, ...rest }: IProps) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};
