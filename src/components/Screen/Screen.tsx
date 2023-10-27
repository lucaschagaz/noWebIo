import React from "react";
import { Box } from "../Box/Box";
import {
  ScrollViewComponent,
  ViewComponent,
} from "./ScreenComponent/ScreenComponent";

export interface IScreenProps {
  children: React.ReactNode;
  scrolable?: boolean;
}

export const Screen = ({ children, scrolable }: IScreenProps) => {
  const Component = scrolable ? ScrollViewComponent : ViewComponent;
  return (
    <Component>
      <Box
        style={{
          marginHorizontal: 28,
          marginTop: 52,
        }}
      >
        {children}
      </Box>
    </Component>
  );
};
