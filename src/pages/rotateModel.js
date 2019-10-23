import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  Dimensions,
  Slider
} from "react-native";
import { ModelView } from "react-native-3d-model-view";
const { width, height } = Dimensions.get("window");
export default class ModelScreen extends React.Component {
  state = {
    message: "",
    scale: 1
  };

  modelView = null;

  static navigationOptions = {
    title: "Model"
  };
  onLoadModelStart = () => {
    this.setState({ message: "Loading model..." });
    console.log("[react-native-3d-model-view]:", "Load model start.");
  };

  onLoadModelSuccess = () => {
    this.setState({ message: "加载模型成功!" });
    console.log("[react-native-3d-model-view]:", "加载模型成功!");
  };

  onLoadModelError = error => {
    this.setState({ message: "Loading model error :(" });
    console.log("[react-native-3d-model-view]:", "加载失败..");
  };

  render() {
    const { message } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.modelContainer}>
          <Text>{message}</Text>
          <Text style={{ fontFamily: "方正榜书行简体", fontSize: 20 }}>
            大小缩放：
          </Text>
          <Slider
            maximumValue={5}
            minimumValue={1}
            onValueChange={e => this.setState({ scale: e })}
          />
          <ModelView
            scale={this.state.scale}
            ref={modelView => {
              this.modelView = modelView;
            }}
            style={styles.modelView}
            source={{
              // model: require("../static/model/zao.obj"),
              // texture: require("../static/img/texture.png")
              // or
              // model:
              //   "https://github.com/BonnierNews/react-native-3d-model-view/blob/master/example/obj/Hamburger.obj?raw=true",
              // texture:
              //   "https://github.com/BonnierNews/react-native-3d-model-view/blob/master/example/obj/Hamburger.png?raw=true"
              model:
                "https://github.com/0818-Crystal/zao_yi/blob/master/w.obj?raw=true",
              texture:
                "https://github.com/0818-Crystal/zao_yi/blob/master/texture.png?raw=true"
              // or
              // zip: 'https://github.com/BonnierNews/react-native-3d-model-view/blob/master/example/obj/Hamburger.zip?raw=true'
              // unzippedFolderName: 'Hamburger'
              // or
              // zip: require('../obj/Hamburger.zip')
            }}
            onLoadModelStart={this.onLoadModelStart}
            onLoadModelSuccess={this.onLoadModelSuccess}
            onLoadModelError={this.onLoadModelError}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  modelContainer: {
    padding: 10,
    width: "100%"
  },
  modelView: {
    width: "100%",
    height: "100%",
    backgroundColor: "white"
  },
  buttonContainer: {
    paddingVertical: 10
  }
});
