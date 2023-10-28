import React, { useRef, useState } from "react";

import { Wrapper, TextInput } from "./styles";
import { useTheme } from "styled-components";
import { TextInputProps, View } from "react-native";
import { Control, Controller } from "react-hook-form";
import { Text } from "../Text/Text";
import { Box } from "../Box/Box";

interface IInputProps extends TextInputProps {
  leftComponent?: React.ReactNode;
  control: Control<any> | any;
  name: string;
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
      name={name}
      control={control}
      render={({ field: { onChange, value }, formState: { errors } }) => (
        <Box style={{ flex: 1, width: "100%" }}>
          <Wrapper style={style}>
            {leftComponent && leftComponent}
            <TextInput
              placeholderTextColor={colors.Icon}
              onChangeText={(text) => onChange(text)}
              value={value}
              {...rest}
            />
          </Wrapper>
          {/* <Box
            style={{
              // width: 200,
              // flex: 1,
              position: "absolute",
              // paddingTop: 40,
              // paddingLeft: 15,
            }}
          >
            {errors[name] ? (
              <Text color="Alert" variant="ParagraphTwo">
                {String(errors[name]?.message)}
              </Text>
            ) : (
              <View style={{ height: 16 }} />
            )}
          </Box> */}
        </Box>
      )}
    />
  );
};

{
}
