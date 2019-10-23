import React from "react";
import { Icon } from "react-native-elements";
import { Header, Left, Body, Right, Title } from "native-base";
import {
  ImageBackground,
  StyleSheet,
  Dimensions,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Share
} from "react-native";
import Canvas, {
  Image as CanvasImage,
  Path2D,
  ImageData
} from "react-native-canvas";
import Color from "../pages/color";
import tinycolor from "tinycolor2";
import OriginModal from "../pages/originModal";
import PosterModal from "../pages/posterModal";

import { floodFillLinear } from "../utils/floodFillLinear";
const { width, height } = Dimensions.get("window");
var context;
var myCanvas;
export default class DanQing extends React.Component {
  state = {
    color: tinycolor("#70c1b3").toHsl(),
    showorigin: false,
    showposter: false
  };
  handleImage(canvas) {
    const image = new CanvasImage(canvas);
    image.crossOrigin = "";
    canvas.width = 400;
    canvas.height = 300;
    context = canvas.getContext("2d");
    image.src = "https://i.loli.net/2019/08/12/MF7kt3lKAPj1wi9.jpg";
    image.addEventListener("load", () => {
      context.drawImage(image, 0, 0, width, 300);
    });
    myCanvas = canvas;
  }
  async handleWire(e) {
    left = e.nativeEvent.locationX;
    top = e.nativeEvent.locationY;
    colorObject = tinycolor(this.state.color).toHexString();
    // var fillColor = [];
    // fillColor[0] = colorObject.r;
    // fillColor[1] = colorObject.g;
    // fillColor[2] = colorObject.b;
    // fillColor[3] = 255;
    // console.log(colorObject);
    // console.log(e.nativeEvent);

    context.lineTo(left, top);
    context.lineWidth = 30;
    context.lineCap = "round";
    context.strokeStyle = colorObject;
    context.stroke();
  }
  startDraw(e) {
    left = e.nativeEvent.locationX;
    top = e.nativeEvent.locationY;

    context.beginPath();
    context.moveTo(left, top);
  }

  changeState(colorVal) {
    this.setState({ color: colorVal });
  }
  async onShare() {
    try {
      const result = await Share.share({
        message: "灶诣 | 一个带你了解与探索灶文化与灶画艺术的APP"
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Header style={styles.header} androidStatusBarColor="#000">
          <Left>
            <Icon type="material" name="reorder" color="#789aa8" size={25} />
          </Left>

          <Right>
            <Icon
              type="material"
              name="share"
              color="#789aa8"
              size={25}
              onPress={this.onShare}
            />
          </Right>
        </Header>
        <View style={styles.draw_wrap}>
          <Canvas ref={this.handleImage} />
          <View
            style={styles.wire}
            onStartShouldSetResponder={() => true}
            onMoveShouldSetResponder={() => true}
            onResponderStart={this.startDraw.bind(this)}
            onResponderMove={this.handleWire.bind(this)}
          />
        </View>
        <View>
          <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
            <Icon
              type="material"
              name="search"
              color="black"
              size={25}
              containerStyle={{ margin: 10 }}
              onPress={() => this.setState({ showorigin: true })}
            />
            <Icon
              type="material"
              name="publish"
              color="black"
              containerStyle={{ margin: 10 }}
              size={25}
              onPress={() => this.setState({ showposter: true })}
            />
          </View>

          {this.state.showorigin ? <OriginModal /> : null}
          {this.state.showposter ? <PosterModal /> : null}
        </View>

        <Color changeState={this.changeState.bind(this)} />
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  wire: {
    position: "absolute",
    top: 0,
    left: 0,
    borderWidth: 2,
    height: 300,
    width: width,
    borderColor: "black"
  },
  draw_wrap: {
    justifyContent: "center",
    alignContent: "center"
  },
  container: {
    flex: 1,
    width: width,
    height: height
  },
  header: {
    elevation: 20,
    backgroundColor: "#fff"
  }
});
