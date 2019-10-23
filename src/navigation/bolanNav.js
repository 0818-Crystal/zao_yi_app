import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import BoLan from "../pages/bolan";
import MakePage from "../pages/MakePage";
import VRPage from "../pages/VRPage";
import PeopleCard from "../pages/peopleCard";
const MainNavigator = createStackNavigator(
  {
    BoLan: BoLan,
    MakePage: MakePage,
    VRPage: VRPage,
    PeopleCard: PeopleCard
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

const BolanNav = createAppContainer(MainNavigator);

export default BolanNav;
