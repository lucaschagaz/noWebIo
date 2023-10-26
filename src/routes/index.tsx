import { NavigationContainer } from "@react-navigation/native";

import { AuthStack } from "./stack.routes";

export const Routes = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};
