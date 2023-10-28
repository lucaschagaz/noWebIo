import React from "react";
import { Wrapper } from "./styled";
import { Text as RNText } from "../Text/Text";
import { ThemeColor } from "../../Styles/Theme/theme";
import { ActivityIndicator, TouchableOpacityProps } from "react-native";

interface IButtonProps extends TouchableOpacityProps {
  color?: keyof ThemeColor;
  text: string;
  loading?: boolean;
}

export const Button = ({
  color = "Primary",
  style,
  loading,
  text,
  ...rest
}: IButtonProps) => {
  return (
    <Wrapper color={color} {...rest} style={style}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <RNText variant="headingThree" bold color="PrimaryContrasct">
          {text}
        </RNText>
      )}
    </Wrapper>
  );
};
