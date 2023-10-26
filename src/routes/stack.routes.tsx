import { createStackNavigator } from "@react-navigation/stack";

import { TabBar } from "./tabbar.routes";
import { NewDemand } from "../pages/NewDemand/NewDemand";
import { Home } from "../pages/Home/Home";

export const AuthStack = () => {
  const Stack = createStackNavigator();
  const { Navigator, Screen } = Stack;

  const auth = false;

  return (
    <Navigator>
      <Screen name="Home" component={Home} />
      <Screen name="NewDemand" component={NewDemand} />
      <Screen name="Tabbar" component={TabBar} />
    </Navigator>
  );
};
