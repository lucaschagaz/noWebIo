import React from "react";
import { ScrollView } from "react-native";
import { Box } from "../../Box/Box";

export interface IProps {
  children: React.ReactNode;
}

export const ScrollViewComponent = ({ children }: IProps) => {
  return <ScrollView>{children}</ScrollView>;
};

export const ViewComponent = ({ children }: IProps) => {
  return <Box>{children}</Box>;
};
