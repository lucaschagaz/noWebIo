import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
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
import { Icon } from "../../components/Icon";
import Logo from "../../assets/icons/Logo";

export const Login = () => {
  const { control, handleSubmit } = useForm<ILoginProps>({
    resolver: yupResolver(LoginSchema),
  });

  const navigation = useNavigation();

  const signIn = () => {
    navigation.navigate("TabBar");
  };

  return (
    <Screen scrolable>
      <Logo />
      <Text variant="headingOne" bold>
        Login
      </Text>
      <Text variant="headingTwo">Para entre informe nome e senha</Text>

      <Input
        style={{ marginTop: 40 }}
        control={control}
        placeholder="Nome do usuario"
        name="username"
      />
      <Input
        style={{ marginTop: 25 }}
        control={control}
        placeholder="Sua Senha"
        name="password"
        secureTextEntry
        rightComponent={<Icon name="eye" size={20} />}
      />
      <Button
        text="Entrar"
        style={{ marginTop: 30 }}
        onPressIn={handleSubmit(signIn)}
      />
    </Screen>
  );
};
