import { View, Text } from "react-native";
import React from "react";
import { Screen } from "../../components/Screen/Screen";
import { Input } from "../../components/Input";
import { Icon } from "../../components/Icon";

export const Home = () => {
  return (
    <Screen>
      <Input
        leftComponent={<Icon name="lupa" />}
        placeholder="Buscar projeto"
        style={{ marginBottom: 36 }}
      />
    </Screen>
  );
};
