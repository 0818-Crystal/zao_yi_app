import React, { Component } from "react";
import { Container, Form, Item, Input, Label } from "native-base";
import { Icon, Text } from "react-native-elements";
import {
  ImageBackground,
  Dimensions,
  StyleSheet,
  View,
  TouchableOpacity
} from "react-native";
import bac from "../static/img/signinbac.jpg";

const { width, height } = Dimensions.get("window");
var userInfo;
export default class LoginIn extends Component {
  state = {
    username: "",
    password: "",
    token: ""
  };

  signIn() {
    const { username, password } = this.state;
    fetch("http://192.168.199.114:3000/user/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
      .then(response => response.json())
      .then(async result => {
        await console.log(result);
        await this.setState({ token: result.token });
        userInfo = this.state;
        if (result.token != null) {
          this.props.navigation.navigate("主页");
        } else if (result.msg === "Invalid credential") {
          alert("用户名或密码错误");
        }
      })

      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <Container>
        <ImageBackground source={bac} style={{ width: width, height: height }}>
          <Icon name="left" type="antdesign" color="#d86262" reverse />
          <View style={styles.title}>
            <Text style={styles.text}>欢迎回来</Text>
            <Text style={styles.text}>你好</Text>
          </View>
          <Form style={styles.form}>
            <Item floatingLabel>
              <Label>用 户 名</Label>
              <Input
                style={styles.label}
                onChangeText={text => {
                  this.setState({ username: text });
                }}
              />
            </Item>
            <Item floatingLabel>
              <Label>密 码</Label>
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
            <Text style={styles.sign}>登 录</Text>
          </View>
          <Icon
            name="right"
            type="antdesign"
            color="#312f3b"
            reverse
            size={30}
            containerStyle={{ position: "absolute", right: 30, bottom: 70 }}
            onPress={() => this.signIn()}
          />
          <View style={styles.bottom}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("SignUp");
              }}
            >
              <Text style={styles.bot}>注册</Text>
            </TouchableOpacity>

            <Text style={[styles.bot, { marginLeft: 250 }]}>忘记密码</Text>
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
    color: "#312f3b",
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
    marginHorizontal: 30,
    display: "flex"
  },
  label: {
    marginBottom: 20
  },
  form: {
    marginTop: 120,
    marginHorizontal: 30
  },
  title: {
    marginLeft: 60,
    marginTop: 70
  },
  text: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "600"
  },
  sign: {
    marginTop: 20,
    marginLeft: 15,
  
    fontSize: 20,
    color: "#312f3b",
    fontWeight: "700"
  }
});
export { userInfo };
