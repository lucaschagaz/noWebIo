import React from "react";
import { Box } from "../Box/Box";
import {
  ScrollViewComponent,
  ViewComponent,
} from "./ScreenComponent/ScreenComponent";
import { Icon } from "../Icon";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";

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
  const { colors } = useTheme();
  const navigation = useNavigation();
  return (
    <Component backgroundColor={colors["PrimaryContrasct"]}>
      <Box
        style={{
          marginHorizontal: 28,
          marginTop: 52,
          marginBottom: 20,
        }}
      >
        {canGoBack && (
          <TouchableOpacity
            onPress={() =>
              navigation.canGoBack()
                ? navigation.goBack()
                : navigation.navigate("Home")
            }
          >
            <Icon name="leftSet" size={18} />
          </TouchableOpacity>
        )}
        {children}
      </Box>
    </Component>
  );
};
