import React, { Component } from "react";
import { ScrollView, ImageBackground, View, Text } from "react-native";
import {
  DrawerItems,
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";
import Index from "../pages/index";
import JiriNav from "./jiriNav";
import ZaopuNav from "./zaopuNav";
import BolanNav from "./bolanNav";
import DanqingNav from "./danqingNav";
import bac from "../static/img/drawerBac.png";
import { userInfo } from "../pages/loginIn";
const Dimensions = require("Dimensions");
const { width, height, scale } = Dimensions.get("window");

const RootDrawer = createDrawerNavigator(
  {
    主页: {
      screen: Index
    },
    吉日: JiriNav,
    灶谱: ZaopuNav,
    博览: BolanNav,
    丹青: DanqingNav
  },
  {
    contentComponent: props => {
      return (
        <ScrollView>
          <View
            style={{
              alignItems: "center"
            }}
          />
          <ImageBackground
            source={bac}
            style={{ width: width * 0.7, height: height }}
          >
            <View style={{ justifyContent: "center", margin: 50 }}>
              <Text style={{ fontSize: 25 }}>{userInfo.name}</Text>
            </View>
            <DrawerItems
              {...props}
              itemStyle={{
                justifyContent: "center",
                margin: 25
              }}
              labelStyle={{ fontFamily: "方正榜书行简体", fontSize: 25 }}
            />
          </ImageBackground>
          <View style={{ height: 240 }} />
        </ScrollView>
      );
    },
    initialRouteName: "主页",
    swipeEnabled: true,
    animationEnabled: true,
    lazy: false,
    tabBarPosition: "bottom"
  }
);

const DrawerNav = createAppContainer(RootDrawer);

export default DrawerNav;
