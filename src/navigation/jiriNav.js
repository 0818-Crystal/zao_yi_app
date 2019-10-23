import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import TodoPage from "../pages/todoPage";
import JiRi from "../pages/JiRi";

const JiriNavigator = createStackNavigator(
  {
    JiRi: JiRi,
    TodoPage: TodoPage
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

const JiriNav = createAppContainer(JiriNavigator);

export default JiriNav;
