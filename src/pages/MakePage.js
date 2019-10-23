import React from "react";
import {
  ScrollView,
  Image,
  Text,
  StyleSheet,
  View,
  Dimensions
} from "react-native";
import { Icon } from "react-native-elements";
import { Picker, Form } from "native-base";
import man from "../static/img/man.png";
import woman from "../static/img/woman.png";
import zhuan from "../static/img/zhuan.png";
import qizao from "../static/img/qizao.png";
import qizao1 from "../static/img/qizao1.png";
import qizao2 from "../static/img/qizao2.png";
import paint from "../static/img/paint.png";
import paint_1 from "../static/img/paint_1.png";
import goutu from "../static/img/goutu.png";
import shibi from "../static/img/shibi.png";
import jizao from "../static/img/jizao.png";
import text from "../static/img/text.png";
import text1 from "../static/img/text1.png";
import text2 from "../static/img/text2.png";
import text3 from "../static/img/text3.png";
import text4 from "../static/img/text4.png";
import text6 from "../static/img/text6.png";
import text7 from "../static/img/text7.png";
import text8 from "../static/img/text8.png";
import paint1 from "../static/img/paint1.png";
import paint2 from "../static/img/paint2.png";
import paint3 from "../static/img/paint3.png";
import paint4 from "../static/img/paint4.png";
import paint5 from "../static/img/paint5.png";
import huabi from "../static/img/huabi.png";
import muchi from "../static/img/muchi.png";
import yanliao from "../static/img/yanliao.png";
import baijiu from "../static/img/baijiu.png";
import tiaose from "../static/img/tiaose.png";

const { width, height } = Dimensions.get("window");
export default class MakePage extends React.Component {
  state = {
    conversation: qizao1,
    paint: paint,
    selected: huabi
  };
  componentDidMount() {
    setInterval(() => {
      if (this.state.conversation === qizao1)
        this.setState({ conversation: qizao2, paint: paint_1 });
      else {
        this.setState({ conversation: qizao1, paint: paint });
      }
    }, 2000);
  }
  onValueChange(value) {
    this.setState({
      selected: value
    });
  }
  render() {
    return (
      <View>
        <ScrollView horizontal={true} style={styles.scroll}>
          <View style={styles.page}>
            <Image source={text1} style={styles.text1} />
            <View style={styles.page1bottom}>
              <Image source={man} style={styles.man} />
              <Image source={woman} style={styles.woman} />
            </View>
          </View>
          <View style={styles.page}>
            <Image source={text2} />
            <Image source={zhuan} style={styles.zhuan} />
          </View>
          <View style={styles.page}>
            <Image source={text3} style={styles.text1} />
            <Image source={this.state.conversation} />
            <Image source={qizao} style={styles.qizao} />
          </View>
          <View>
            <Image source={text8} />
            <Image source={this.state.paint} style={styles.paint} />
          </View>
          <View style={[styles.page, { flexDirection: "row" }]}>
            <Image source={text4} />
            <Image source={paint1} />
            <Image source={paint2} />
            <Image source={paint3} />
            <Image source={paint4} />
            <Image source={paint5} style={{ marginTop: 40 }} />
          </View>
          <View style={styles.page}>
            <Form style={{ position: "absolute", bottom: 0, zIndex: 2000 }}>
              <Picker
                mode="dropdown"
                style={{
                  width: width,
                  backgroundColor: "#dbd9d987"
                }}
                selectedValue={this.state.selected}
                onValueChange={this.onValueChange.bind(this)}
              >
                <Picker.Item label="画笔" value={huabi} />
                <Picker.Item label="木尺" value={muchi} />
                <Picker.Item label="颜料" value={yanliao} />
                <Picker.Item label="白酒" value={baijiu} />
                <Picker.Item label="调色器皿" value={tiaose} />
              </Picker>
            </Form>
            <Image source={this.state.selected} style={styles.selectedimg} />
          </View>
          <View style={[styles.page, { flexDirection: "row" }]}>
            <Image source={text} />
          </View>
          <View style={[styles.page, { flexDirection: "row" }]}>
            <Image
              source={goutu}
              style={{
                height: 800,
                resizeMode: "contain",
                marginTop: 100,
                marginRight: 100
              }}
            />
          </View>
          <View style={styles.page}>
            <Image source={shibi} style={styles.shibi} />
            <Image source={text6} style={styles.text6} />
          </View>
          <View style={styles.page}>
            <Image
              source={text7}
              style={{ width: 200, resizeMode: "contain" }}
            />
          </View>
          <View style={styles.page}>
            <Image
              source={jizao}
              style={{ width: 400, resizeMode: "contain" }}
            />
          </View>
          <View style={styles.page}>
            <Image source={require("../static/img/end.png")} />
          </View>
        </ScrollView>
        <Icon
          type="antdesign"
          name="left"
          color="#000"
          size={25}
          containerStyle={styles.icon}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    zIndex: 3000,
    left: 20,
    top: 25
  },
  text6: {
    width: 200,
    resizeMode: "contain",
    marginTop: 200
  },
  shibi: {
    position: "absolute",
    top: 0,
    height: 300,
    marginLeft: 50,
    resizeMode: "contain"
  },
  selectedimg: {
    height: 400,
    resizeMode: "contain"
  },
  paint: { marginTop: 50 },
  qizao: {
    height: 300,
    resizeMode: "contain"
  },
  zhuan: {
    marginTop: 100,
    height: 100,
    resizeMode: "contain"
  },
  text1: {
    height: 200,
    marginHorizontal: "auto",
    resizeMode: "contain"
  },
  page1bottom: {
    marginTop: 140,
    flexDirection: "row"
  },
  woman: {
    // borderWidth: 1,
    // borderColor: "red",
    height: 300,
    width: 200,
    resizeMode: "contain"
  },
  man: {
    // borderWidth: 1,
    // borderColor: "red",
    height: 300,
    width: 220,
    resizeMode: "contain"
  },
  page: {
    alignItems: "center",
    justifyContent: "center",
    height: height,
    width: width
  },
  scroll: {
    backgroundColor: "#f1edde"
  }
});
