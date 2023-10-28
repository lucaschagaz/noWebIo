import { createStackNavigator } from "@react-navigation/stack";

import { TabBar } from "./tabBar.routes";
import { NewDemand } from "../pages/NewDemand/NewDemand";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";

export const AuthStack = () => {
  const Stack = createStackNavigator();
  const { Navigator, Screen } = Stack;

  const auth = false;

  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
      {/* <Screen options={{ headerShown: false }} name="Home" component={Home} />
      <Screen
        options={{ headerShown: false }}
        name="NewDemand"
        component={NewDemand}
      /> */}
      <Screen options={{ headerShown: false }} name="Login" component={Login} />
      <Screen
        options={{ headerShown: false }}
        name="TabBar"
        component={TabBar}
      />
    </Navigator>
  );
};
