import React, { useRef, useState } from "react";

import { Wrapper, TextInput } from "./styles";
import { useTheme } from "styled-components";
import { TextInputProps } from "react-native";

interface IInputProps extends TextInputProps {
  leftComponent?: React.ReactNode;
}
export const Input = ({ leftComponent, style, ...rest }: IInputProps) => {
  const [search, setSearch] = useState("");

  const { colors } = useTheme();

  return (
    <Wrapper style={style}>
      {leftComponent && leftComponent}
      <TextInput
        placeholderTextColor={colors.Icon}
        value={search}
        onChangeText={(text) => {}}
        {...rest}
      />
    </Wrapper>
  );
};
