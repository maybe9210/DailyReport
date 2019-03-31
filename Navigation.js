import React from "react";
import { createBottomTabNavigator } from "react-navigation";

import HomeScreen from "./Page/Home";
import SettingsScreen from "./Page/Setting";
import StatisticsScreen from "./Page/Statistics";
import GuideScreen from "./Page/Guide";

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Guide: GuideScreen,
  Statistics: StatisticsScreen,
  Settings: SettingsScreen
});

export default TabNavigator;
