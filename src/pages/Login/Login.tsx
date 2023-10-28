import React, { useEffect } from "react";

import { useNavigation } from "@react-navigation/native";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Screen } from "../../components/Screen/Screen";
import { Text } from "../../components/Text/Text";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button/Button";
import { ILoginProps, LoginSchema } from "../../@types/types";
import { Icon } from "../../components/Icon";
import Logo from "../../assets/icons/Logo";
import { useAuth } from "../../store/useAuth";
import { Alert } from "react-native";

export const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginProps>({
    resolver: yupResolver(LoginSchema),
  });

  const navigation = useNavigation();
  const { userData } = useAuth();

  const signIn = (data: FieldValues) => {
    console.log(data);

    if (data.username == userData.name && data.password == userData.password) {
      navigation.navigate("TabBar");
    }
  };

  useEffect(() => {
    Alert.alert("Usuario e Senha", "usurario:lucas - senha:1234567");
  }, []);

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
      {errors?.username && (
        <Text color="Alert">{errors["username"]?.message}</Text>
      )}
      <Input
        style={{ marginTop: 25 }}
        control={control}
        placeholder="Sua Senha"
        name="password"
        secureTextEntry
        rightComponent={<Icon name="eye" size={20} />}
      />
      {errors?.password && (
        <Text color="Alert">{errors["password"]?.message}</Text>
      )}
      <Button
        text="Entrar"
        style={{ marginTop: 30 }}
        onPressIn={handleSubmit(signIn)}
      />
    </Screen>
  );
};
