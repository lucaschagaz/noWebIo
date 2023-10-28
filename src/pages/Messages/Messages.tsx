import React from "react";
import { Screen } from "../../components/Screen/Screen";
import { Text } from "../../components/Text/Text";

export const Messages = () => {
  return (
    <Screen scrolable>
      <Text variant="headingOne" bold>
        Messagens
      </Text>
      <Text>Você ainda não possui mensagens</Text>
    </Screen>
  );
};
