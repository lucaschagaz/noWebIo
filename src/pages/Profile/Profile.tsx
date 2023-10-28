import React from "react";
import { Screen } from "../../components/Screen/Screen";
import { Text } from "../../components/Text/Text";
import { Pressable } from "react-native";
import { useAuth } from "../../store/useAuth";

export const Profile = () => {
  const { userData } = useAuth();
  return (
    <Screen scrolable>
      <Text variant="headingOne">Perfil</Text>
    </Screen>
  );
};
