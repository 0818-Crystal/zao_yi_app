import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import ZaoCard from "../pages/zaoCard";
import ThreeEyes from "../pages/threeEyes";
import TwoEyes from "../pages/twoEyes";
import FourEyes from "../pages/fourEyes";
import RotateModel from "../pages/rotateModel";

const ZaopuNavigator = createStackNavigator(
  {
    ZaoCard: ZaoCard,
    ThreeEyes: ThreeEyes,
    FourEyes: FourEyes,
    TwoEyes: TwoEyes,

    RotateModel: RotateModel
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

const ZaopuNav = createAppContainer(ZaopuNavigator);

export default ZaopuNav;
