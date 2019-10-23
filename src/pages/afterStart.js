import React from "react";
import { Image, Dimensions } from "react-native";
import * as Animated from "react-native-animatable";
import { Button } from "react-native-elements";
import bac from "../static/img/片头.gif";
const { width, height } = Dimensions.get("window");
export default class AfterStart extends React.Component {
  render() {
    return <Image style={{ width: width, height: height }} source={bac} />;
  }
}
