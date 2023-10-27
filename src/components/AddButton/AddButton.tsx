import React from "react";
import { ThemeColor } from "../../Styles/Theme/theme";
import { Pressable } from "./styled";
import { Icon } from "../Icon";
import { PressableProps } from "react-native";

export interface IPressablePorps extends PressableProps {
  size?: "56" | "48";
  radius?: "14" | "18";
  background?: keyof ThemeColor;
  color?: keyof ThemeColor;
  iconSize?: number;
}

export const AddButton = ({
  size = "56",
  radius = "18",
  color = "PrimaryContrasct",
  background = "Primary_opacity",
  iconSize = 18,
  style,
  ...rest
}: IPressablePorps) => {
  return (
    <Pressable
      size={size}
      radius={radius}
      style={style}
      background={background}
      {...rest}
    >
      <Icon name="plus" size={iconSize} color={color} />
    </Pressable>
  );
};
