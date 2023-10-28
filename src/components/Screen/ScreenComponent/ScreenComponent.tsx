import React from "react";
import { ScrollView } from "react-native";
import { Box } from "../../Box/Box";

export interface IProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

export const ScrollViewComponent = ({ children, backgroundColor }: IProps) => {
  return <ScrollView style={{ backgroundColor }}>{children}</ScrollView>;
};

export const ViewComponent = ({ children, backgroundColor }: IProps) => {
  return <Box style={{ backgroundColor }}>{children}</Box>;
};
