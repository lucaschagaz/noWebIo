import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../pages/Home/Home";
import { NewDemand } from "../pages/NewDemand/NewDemand";

const Tab = createBottomTabNavigator();

export const TabBar = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="NewDemand" component={NewDemand} />
      {/* <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Home} /> */}
    </Tab.Navigator>
  );
};
