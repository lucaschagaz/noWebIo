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
import { useAppSafeArea } from "../../hook/useAppSafeArea";

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
  const navigation = useNavigation();
  const { colors } = useTheme();
  const { bottom, top } = useAppSafeArea();

  return (
    <Component backgroundColor={colors.PrimaryContrasct}>
      <Box
        style={{
          marginHorizontal: 28,
          marginTop: top,
          marginBottom: bottom,
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
