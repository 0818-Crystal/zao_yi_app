import React, { Component } from "react";
import { Text, View } from "react-native";
import Modal from "react-native-modal";
import { Button, Textarea, Form } from "native-base";
import { Icon } from "react-native-elements";
import { userInfo } from "../pages/loginIn";

export default class TodoModal extends Component {
  state = {
    isModalVisible: true,
    text: ""
  };

  toggleModal = () => {
    console.log(this.state.isModalVisible);
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  closeModal = () => {
    const { text } = this.state;
    this.setState({ isModalVisible: false });

    token = userInfo.token;
    fetch("http://192.168.199.114:3000/todo/create", {
      method: "post",
      headers: {
        // Accept: "application/json",
        "Content-Type": "application/json",
        "x-auth": token
      },
      body: JSON.stringify({
        text: text
      })
    })
      .then(response => response.json())
      .then(async result => {
        this.props.onChange(result.todo);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Modal isVisible={this.state.isModalVisible}>
        <View style={{ height: 300 }}>
          <Form style={{ height: 250 }}>
            <Textarea
              rounded
              rowSpan={5}
              style={{ backgroundColor: "white", height: 200 }}
              bordered
              onChangeText={text => this.setState({ text })}
              placeholder="写下今日计划"
            />
          </Form>
          <Button
            rounded
            iconLeft
            style={{
              width: 200,
              justifyContent: "center",
              marginBottom: 30,
              marginLeft: "auto",
              marginRight: "auto"
            }}
            onPress={this.closeModal}
          >
            <Icon type="material" name="done" color="#fff" />
            <Text style={{ color: "white" }}> 完 成 </Text>
          </Button>
        </View>
      </Modal>
    );
  }
}
