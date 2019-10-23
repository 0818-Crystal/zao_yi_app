import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import DrawerNav from "./drawerNav";
import SwitchNav from "./switchNav";

const MainNavigator = createSwitchNavigator({
  SwitchNav: SwitchNav,
  DrawerNav: DrawerNav
});

const Navigation = createAppContainer(MainNavigator);

export default Navigation;
