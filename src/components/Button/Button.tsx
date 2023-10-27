import React from "react";
import { Wrapper } from "./styled";
import { Text as RNText } from "../Text/Text";
import { ThemeColor } from "../../Styles/Theme/theme";
import { TouchableOpacityProps } from "react-native";

interface IButtonProps extends TouchableOpacityProps {
  color?: keyof ThemeColor;
  text: string;
}

export const Button = ({
  color = "Primary",
  style,
  text,
  ...rest
}: IButtonProps) => {
  return (
    <Wrapper color={color} {...rest} style={style}>
      <RNText variant="headingThree" bold color="PrimaryContrasct">
        {text}
      </RNText>
    </Wrapper>
  );
};
