import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import DanQing from "../pages/DanQing";
import PhotoPicker from "../pages/photoPicker";

const MainNavigator = createStackNavigator(
  {
    PhotoPicker: PhotoPicker,
    DanQing: DanQing
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

const DanqingNav = createAppContainer(MainNavigator);

export default DanqingNav;
