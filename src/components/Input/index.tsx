import React, { useRef, useState } from "react";

import { Wrapper, TextInput } from "./styles";
import { useTheme } from "styled-components";
import { TextInputProps, View } from "react-native";
import { Control, Controller } from "react-hook-form";
import { Text } from "../Text/Text";
import { Box } from "../Box/Box";

interface IInputProps extends TextInputProps {
  leftComponent?: React.ReactNode;
  control?: Control<any> | any;
  name?: string;
}
export const Input = ({
  leftComponent,
  style,
  control,
  name,
  ...rest
}: IInputProps) => {
  // const [search, setSearch] = useState("");

  const { colors } = useTheme();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, formState: { errors } }) => (
        <>
          <Wrapper style={style}>
            {leftComponent && leftComponent}
            <TextInput
              placeholderTextColor={colors.Icon}
              onChangeText={(text) => onChange(text)}
              value={value}
              {...rest}
            />
          </Wrapper>
          errors[name] ? (
          <Text style={{ paddingTop: 2, paddingLeft: 5 }} color="Alert">
            {String(errors[name]?.message)}
          </Text>
          ) : (
          <View style={{ height: 16 }} />)
        </>
      )}
    />
  );
};

{
}
