import React from "react";
import { TouchableOpacity, ViewStyle } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// import { PhoneSchema } from "@utils/schemas";
// import { useLogged } from "@store/useLogged";
// import { AppScreenNavigatorProps } from "src/@types/navigation/types";
// import { IUserPhoneProps } from "src/@types/types";

import { useTheme } from "styled-components";
import { Screen } from "../../components/Screen/Screen";
import { Text } from "../../components/Text/Text";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button/Button";
import { ILoginProps, LoginSchema } from "../../@types/types";

export const Login = () => {
  const { control, handleSubmit } = useForm<ILoginProps>({
    resolver: yupResolver(LoginSchema),
  });

  //   const navigation = useNavigation<AppScreenNavigatorProps>();
  //   const registerRedirect = () => {
  //     navigation.navigate("Register");
  //   };
  //   const { setLogged } = useLogged();

  const { colors } = useTheme();

  return (
    <Screen scrolable>
      <Text variant="headingOne" bold>
        Login
      </Text>
      <Text variant="headingThree">Informe seu cpf e senha cadastrados</Text>

      <Input control={control} placeholder="Nome do usuario" name="username" />
      <Input
        control={control}
        placeholder="Sua Senha"
        name="password"
        // rightComponent={<Icon name="eye" size={20} color="GRAY" />}
      />

      <Button
        text="Entrar"
        style={{ marginTop: 10 }}
        // onPress={() => setLogged(true)}
        // onPress={() =>
        //   navigation.navigate("OTPCode", { type: "number", contact: phone })
        // }
        // onPressIn={handleSubmit(registerRedirect)}
      />
    </Screen>
  );
};

const $RegisterBox: ViewStyle = {
  flexDirection: "row",
  width: "100%",
  marginTop: 20,
  justifyContent: "center",
};

const $FlagBox: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  borderRightWidth: 1,
  height: "100%",
  paddingHorizontal: 5,
};

const $InputBoxStyleProps: ViewStyle = { flex: 1, width: "100%" };
