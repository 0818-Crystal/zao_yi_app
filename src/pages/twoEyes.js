import React from "react";
import { ImageBackground, Dimensions, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { Header, Left, Body, Right, Title } from "native-base";
import bac from "../static/img/twoeyes.jpg";
const { width, height } = Dimensions.get("window");

export default class TwoEyes extends React.Component {
  state = {
    paused: true
  };
  render() {
    return (
      <ImageBackground source={bac} style={styles.container}>
        <Header style={styles.header} androidStatusBarColor="#000">
          <Left>
            <Icon type="material" name="reorder" color="#cc695f" size={25} />
          </Left>

          <Right>
            <Icon type="material" name="share" color="#cc695f" size={25} />
          </Right>
        </Header>
        <Icon
          type="material"
          name="hearing"
          color={this.state.paused ? "grey" : "#48af4c"}
          raised
          size={25}
          onPress={() => this.setState({ paused: !this.state.paused })}
          containerStyle={styles.hearing}
          reverse
        />
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: width,
    height: height
  },
  header: {
    elevation: 20,
    backgroundColor: "#fff"
  },
  hearing: {
    position: "absolute",
    top: 70,
    right: 30
  }
});
