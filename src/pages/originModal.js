import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { Icon } from "react-native-elements";
import Modal from "react-native-modal";

export default class OriginModal extends Component {
  state = {
    isModalVisible: true
  };

  toggleModal = () => {
    console.log(this.state.isModalVisible);
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  closeModal = () => {
    this.setState({ isModalVisible: false });
  };

  render() {
    return (
      <Modal
        isVisible={this.state.isModalVisible}
        onBackdropPress={() => this.setState({ isModalVisible: false })}
      >
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../static/img/origin.jpg")}
            style={{ width: 300, resizeMode: "contain" }}
          />
        </View>
        <Icon
          type="antdesign"
          name="close"
          color="black"
          onPress={() => this.closeModal()}
          containerStyle={{ marginTop: 30 }}
        />
      </Modal>
    );
  }
}
