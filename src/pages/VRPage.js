import React, { Component } from "react";
import { Image, ScrollView, Dimensions, View } from "react-native";
import { Picker, Form } from "native-base";
import key0 from "../static/img/gate.png";
import key1 from "../static/img/dating1.jpg";
import key2 from "../static/img/dating2.jpg";
const { height, width } = Dimensions.get("window");

export default class VRPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: key0
    };
  }

  onValueChange(value) {
    this.setState({
      selected: value
    });
  }
  render() {
    return (
      <View>
        <ScrollView horizontal={true}>
          <Image
            source={this.state.selected}
            style={{ height: height, width: 2200 }}
          />
        </ScrollView>
        <Form style={{ position: "absolute", top: 0, zIndex: 2000 }}>
          <Picker
            mode="dropdown"
            style={{
              width: width,
              backgroundColor: "#dbd9d987"
            }}
            selectedValue={this.state.selected}
            onValueChange={this.onValueChange.bind(this)}
          >
            <Picker.Item label="正门前景" value={key0} />
            <Picker.Item label="前厅侧景" value={key1} />
            <Picker.Item label="前厅正景" value={key2} />
            <Picker.Item label="走廊" value="key3" />
          </Picker>
        </Form>
      </View>
    );
  }
}
