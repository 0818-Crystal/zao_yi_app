import React, { Component } from "react";
import { View, Image, Platform, CameraRoll } from "react-native";
import { Button, Text } from "native-base";

import RNFS from "react-native-fs";
import { Icon } from "react-native-elements";
import Modal from "react-native-modal";

export default class PosterModal extends Component {
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
  DownloadLocalImage = ImageUrl => {
    if (!ImageUrl) return null;
    return new Promise((resolve, reject) => {
      try {
        var promise = CameraRoll.saveToCameraRoll(ImageUrl);
        promise
          .then(function(result) {
            resolve({ statusCode: 200 });
            console.log("保存成功！地址如下：\n" + result);
            //alert('保存成功！地址如下：\n' + result);
          })
          .catch(function(error) {
            console.log("error", error);
            // alert('保存失败！\n' + error);
          });
      } catch (e) {
        reject(new Error(e));
      }
    });
  };
  render() {
    return (
      <Modal
        isVisible={this.state.isModalVisible}
        onBackdropPress={() => this.setState({ isModalVisible: false })}
      >
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../static/img/poster.jpg")}
            style={{ width: 300, resizeMode: "contain" }}
          />
        </View>
        <Button
          rounded
          iconLeft
          style={{
            width: 200,
            justifyContent: "center",
            marginTop: 50,
            marginLeft: "auto",
            marginRight: "auto"
          }}
          onPress={() => {
            // this.DownloadLocalImage("../static/img/poster.jpg");
            alert("保存成功");
          }}
        >
          <Icon type="material" name="publish" color="#fff" />
          <Text>保存海报</Text>
        </Button>
      </Modal>
    );
  }
}
