import React from "react";
import { createAppContainer, createBottomTabNavigator, createSwitchNavigator } from "react-navigation";

import HomeScreen from "./Page/Home";
import SettingsScreen from "./Page/Setting";
import StatisticsScreen from "./Page/Statistics";
import { EntryScreen } from "./Page/Guide";

const MainTabScreen = createBottomTabNavigator({
  Home: HomeScreen,
  Statistics: StatisticsScreen,
  Settings: SettingsScreen
});

const Root = createSwitchNavigator({
  EntryScreen,
  MainTabScreen
})

const AppContainer = createAppContainer(Root);

export {
  AppContainer
};
