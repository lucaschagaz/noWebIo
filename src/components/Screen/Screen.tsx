import React from "react";
import { Box } from "../Box/Box";
import {
  ScrollViewComponent,
  ViewComponent,
} from "./ScreenComponent/ScreenComponent";
import { Icon } from "../Icon";
import { TouchableOpacity } from "react-native";

export interface IScreenProps {
  children: React.ReactNode;
  scrolable?: boolean;
  canGoBack?: boolean;
}

export const Screen = ({
  children,
  scrolable,
  canGoBack = false,
}: IScreenProps) => {
  const Component = scrolable ? ScrollViewComponent : ViewComponent;
  return (
    <Component>
      <Box
        style={{
          marginHorizontal: 28,
          marginTop: 52,
          marginBottom: 20,
        }}
      >
        {canGoBack && (
          <TouchableOpacity>
            <Icon name="leftSet" size={18} />
          </TouchableOpacity>
        )}
        {children}
      </Box>
    </Component>
  );
};
