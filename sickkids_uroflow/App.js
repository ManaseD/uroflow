import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";

import LoadingPage from "./LoadingPage";
import LoginPage from "./LoginPage";
import HistoryPage from "./HistoryPage";
import ReplayPage from "./Replay";
import RecordPage from "./RecordPage";
import ProfilePage from "./ProfilePage";
import ResultPage from "./ResultPage"

console.disableYellowBox = true;

const getTabBarIcon = (navigation, focused, tintColor) => {
    const { routeName } = navigation.state;
    let iconName;
    switch (routeName) {
        case "History":
            iconName = "md-menu";
            break;
        case "Record":
            iconName = "md-headset";
            break;
        case "Profile":
            iconName = "md-person";
            break;
    }

    return <Ionicons name={iconName} size={25} color={tintColor} />;
};

const RecordStack = createStackNavigator({
    Record: RecordPage,
    Result: ResultPage
});

const HistoryStack = createStackNavigator({
    History: HistoryPage,
    Replay: ReplayPage
});


const ProfileStack = createStackNavigator({
    Profile: ProfilePage
});

const MainStack = createBottomTabNavigator(
    {
        History: HistoryStack,
        Record: RecordStack,
        Profile: ProfileStack
    },
    {
        initialRouteName: "Record",
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) =>
                getTabBarIcon(navigation, focused, tintColor)
        }),
        tabBarOptions: {
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
            style: {
                borderTopColor: 'transparent'
            }
        }
    }
);

const AuthStack = createStackNavigator({
    Login: LoginPage
})

const RootStack = createSwitchNavigator(
    {
        Load: LoadingPage,
        Login: AuthStack,
        Main: MainStack
    },
    {
        headerMode: "none"
    }
);

export default createAppContainer(RootStack);
