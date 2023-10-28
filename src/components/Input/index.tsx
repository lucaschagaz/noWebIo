import React, { useRef, useState } from "react";

import { Wrapper, TextInput } from "./styles";
import { useTheme } from "styled-components";
import { TextInputProps, View } from "react-native";
import { Control, Controller } from "react-hook-form";
import { Text } from "../Text/Text";
import { Box } from "../Box/Box";

interface IInputProps extends TextInputProps {
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
  control: Control<any> | any;
  name: string;
}
export const Input = ({
  leftComponent,
  rightComponent,
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
        // <Box style={{ flex: 1 }}>
        <Wrapper style={style}>
          {leftComponent && leftComponent}
          <TextInput
            placeholderTextColor={colors.Icon}
            onChangeText={(text) => onChange(text)}
            value={value}
            {...rest}
          />
          {rightComponent && rightComponent}
        </Wrapper>
        //   <Box
        //     style={{
        //       position: "absolute",
        //       marginTop: 40,
        //       flex: 1,
        //       width: 300,
        //     }}
        //   >
        //     {errors[name] ? (
        //       <Text
        //         color="Alert"
        //         variant="ParagraphTwo"
        //         style={{ paddingLeft: 10, paddingTop: 5 }}
        //       >
        //         {String(errors[name]?.message)}
        //       </Text>
        //     ) : (
        //       <></>
        //     )}
        //   </Box>
        // </Box>
      )}
    />
  );
};

{
}
