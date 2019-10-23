import React, { Component } from "react";
import { Container, Form, Item, Input, Label, Toast } from "native-base";
import { Icon, Text } from "react-native-elements";
import { ImageBackground, Dimensions, StyleSheet, View } from "react-native";
import bac from "../static/img/signupbac.jpg";

const { width, height } = Dimensions.get("window");
export default class SignUp extends Component {
  state = {
    name: "",
    username: "",
    email: "",
    password: ""
  };

  createAcount() {
    const { name, username, email, password } = this.state;
    console.log(name, username, email, password);
    fetch("http://192.168.199.114:3000/user/create", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        username: username,
        email: email,
        password: password
      })
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        alert("注册成功");
      })
      .then(() => this.props.navigation.navigate("Index"))

      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <Container>
        <ImageBackground source={bac} style={{ width: width, height: height }}>
          <Icon name="left" type="antdesign" color="#312f3b" reverse />
          <View style={styles.title}>
            <Text style={styles.text}>注册</Text>
            <Text style={styles.text}>新用户</Text>
          </View>
          <Form style={styles.form}>
            <Item floatingLabel>
              <Label style={{ color: "#fff" }}>姓 名</Label>
              <Input
                style={styles.label}
                onChangeText={text => {
                  this.setState({ name: text });
                }}
              />
            </Item>
            <Item floatingLabel>
              <Label style={{ color: "#fff" }}>用 户 名</Label>
              <Input
                style={styles.label}
                onChangeText={text => {
                  this.setState({ username: text });
                }}
              />
            </Item>
            <Item floatingLabel>
              <Label style={{ color: "#fff" }}>邮 箱</Label>
              <Input
                style={styles.label}
                onChangeText={text => {
                  this.setState({ email: text });
                }}
              />
            </Item>
            <Item floatingLabel>
              <Label style={{ color: "#fff" }}>密 码</Label>
              <Input
                style={styles.label}
                secureTextEntry={true}
                onChangeText={text => {
                  this.setState({ password: text });
                }}
              />
            </Item>
          </Form>
          <View style={styles.comfirm}>
            <Text style={styles.sign}>注 册</Text>
          </View>
          <Icon
            name="right"
            type="antdesign"
            color="#312f3b"
            reverse
            size={30}
            containerStyle={{ position: "absolute", right: 30, bottom: 70 }}
            onPress={() => this.createAcount()}
          />
          <View style={styles.bottom}>
            <Text style={styles.bot}>登 录</Text>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  bot: {
    textDecorationLine: "underline",
    marginLeft: 15,
    fontFamily: "arial",
    fontSize: 15,
    color: "#fff",
    fontWeight: "700"
  },
  bottom: {
    position: "absolute",
    bottom: 30,
    left: 30,
    flexDirection: "row"
  },
  comfirm: {
    height: 30,
    textAlignVertical: "center",
    marginTop: 30,
    marginHorizontal: 30
    // display: "flex"
  },
  label: {
    color: "#fff",
    marginBottom: 20
  },
  form: {
    marginTop: 30,
    marginHorizontal: 30
  },
  title: {
    marginLeft: 60,
    marginTop: 50
  },
  text: {
    fontFamily: "arial",
    fontSize: 30,
    color: "#fff",
    fontWeight: "600"
  },
  sign: {
    marginTop: 20,
    marginLeft: 15,
    fontFamily: "arial",
    fontSize: 20,
    color: "#fff",
    fontWeight: "700"
  }
});
