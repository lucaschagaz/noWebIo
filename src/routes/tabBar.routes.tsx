import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../pages/Home/Home";
import { NewDemand } from "../pages/NewDemand/NewDemand";
import { Icon } from "../components/Icon";
import { useTheme } from "styled-components";
import { Calendar } from "../pages/Calendar/Calendar";
import Profile from "../pages/Profile/Profile";
import { Messages } from "../pages/Messages/Messages";
import { useNavigation } from "@react-navigation/native";
import { AddButton } from "../components/AddButton/AddButton";
import { Login } from "../pages/Login/Login";

export const TabBar = () => {
  const Tab = createBottomTabNavigator();
  const { Navigator, Screen } = Tab;

  const { colors } = useTheme();

  const navigation = useNavigation();

  return (
    <Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors["PrimaryContrasct"],
          borderTopWidth: 0,
          height: 70,
        },
      }}
    >
      <Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              tab={focused}
              name="home"
              size={22}
              color={focused ? "Primary" : "Icon"}
            />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="calendar"
              size={22}
              color={focused ? "Primary" : "Icon"}
            />
          ),
        }}
        name="Calendar"
        component={Calendar}
      />
      <Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <AddButton
              onPress={() => navigation.navigate("NewDemand")}
              size="56"
              radius="18"
              background={focused ? "Primary_Hard" : "Primary"}
            />
          ),
        }}
        name="NewDemand"
        component={NewDemand}
      />
      <Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="message"
              size={22}
              color={focused ? "Primary" : "Icon"}
            />
          ),
        }}
        name="Message"
        component={Messages}
      />
      <Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="profile"
              size={22}
              color={focused ? "Primary" : "Icon"}
            />
          ),
        }}
        name="Profile"
        component={Login}
      />
    </Navigator>
  );
};
