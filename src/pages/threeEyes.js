import React from "react";
import {
  ImageBackground,
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
  View
} from "react-native";
import { Icon } from "react-native-elements";
import { Header, Left, Body, Right, Title } from "native-base";
import bac from "../static/img/threeeyes.jpg";
import Video from "react-native-video";
import voice from "../static/video/threeeyesvoice.mp3";
const { width, height } = Dimensions.get("window");

export default class ThreeEyes extends React.Component {
  state = {
    paused: true
  };
  render() {
    return (
      <ImageBackground source={bac} style={styles.container}>
        <Header style={styles.header} androidStatusBarColor="#000">
          <Left>
            <Icon type="material" name="reorder" color="#789aa8" size={25} />
          </Left>

          <Right>
            <Icon type="material" name="share" color="#789aa8" size={25} />
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
        <TouchableWithoutFeedback
          onPress={() => this.props.navigation.navigate("RotateModel")}
        >
          <View style={styles.touchView} />
        </TouchableWithoutFeedback>
        <Video source={voice} paused={this.state.paused} />
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  touchView: {
    height: 400,
    width: 200
  },
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
