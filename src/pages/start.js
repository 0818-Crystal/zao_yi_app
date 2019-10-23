import React from "react";
import { ImageBackground, Dimensions } from "react-native";
import bac from "../static/img/satrtlogo.jpg";
const { width, height } = Dimensions.get("window");
export default class Start extends React.Component {
  componentDidMount() {
    that = this;
    setTimeout(() => {
      that.props.navigation.navigate("LoginIn");
    }, 2000);
  }
  render() {
    return (
      <ImageBackground source={bac} style={{ width: width, height: height }} />
    );
  }
}
