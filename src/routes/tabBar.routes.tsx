import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../pages/Home/Home";
import { NewDemand } from "../pages/NewDemand/NewDemand";
import { Icon } from "../components/Icon";
import { useTheme } from "styled-components";
import Calendar from "../pages/Calendar/Calendar";
import Profile from "../pages/Profile/Profile";
import Messages from "../pages/Messages/Messages";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

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
            <>
              <Pressable
                onPress={() => navigation.navigate("NewDemand")}
                style={{
                  width: 56,
                  height: 56,
                  alignItems: "center",
                  justifyContent: "center",
                  // position: "absolute",
                  // bottom: 10,
                  borderRadius: 18,
                  backgroundColor: focused
                    ? colors["Primary_Hard"]
                    : colors["Primary"],
                }}
              >
                <Icon name="plus" size={18} color="PrimaryContrasct" />
              </Pressable>
            </>
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
        component={Profile}
      />
    </Navigator>
  );
};
