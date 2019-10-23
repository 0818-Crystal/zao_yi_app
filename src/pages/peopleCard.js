import React from "react";
import FlipCard from "react-native-flip-card";
import * as Animated from "react-native-animatable";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  ImageBackground,
  Dimensions,
  TouchableWithoutFeedback,
  Image
} from "react-native";
import ssg from "../static/img/shihunguan.png";
import shl from "../static/img/shenhualiang.png";
import wyc from "../static/img/wangyuanchang.png";
import ssgintro from "../static/img/ssg.png";
import shlintro from "../static/img/shl.png";
import wycintro from "../static/img/wyc.png";
import { Icon } from "react-native-elements";
import { Header, Left, Body, Title, Container, Right } from "native-base";
const { width, height } = Dimensions.get("window");
export default class PeopleCard extends React.Component {
  state = {
    selected: 0
  };
  people = [
    { name: "王元昌", color: "#497568", photo: wyc, intro: wycintro },
    { name: "张金寿", color: "#2775b6" },
    { name: "施顺观", color: "#15231b", photo: ssg, intro: ssgintro },
    { name: "陈余林", color: "#ddc871" },
    { name: "沈华良", color: "#b14b28", photo: shl, intro: shlintro },
    { name: "赵祥松", color: "#481e1c" },
    { name: "莫忠明", color: "#a4cab6" },
    { name: "沈坤良", color: "#648e93" },
    { name: "范根发", color: "#e4bf11" }
  ];
  renderNames = (item, index) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => this.setState({ selected: index })}
      >
        <Animated.View
          key={index}
          transition={["width"]}
          style={[
            styles.tag,
            { backgroundColor: item.color },
            this.state.selected == index ? styles.selected : null
          ]}
        >
          <Text
            style={{
              fontSize: 17,
              color: "white",
              marginTop: "auto",
              marginBottom: "auto",

              textAlign: "center",
              writingDirection: "ltr",

              textAlignVertical: "center"
            }}
          >
            {item.name}
          </Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  };
  render() {
    return (
      <ImageBackground
        source={require("../static/img/peoplebac.png")}
        style={{ width: width, height: height }}
      >
        <Header style={styles.header} androidStatusBarColor="#000">
          <Left>
            <Icon type="antdesign" name="left" color="#789aa8" size={25} />
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
        <View style={{ flexDirection: "row" }}>
          <ScrollView
            style={{ width: 130 }}
            showsVerticalScrollIndicator={false}
          >
            {this.people.map(this.renderNames)}
            {this.people.map(this.renderNames)}
            {this.people.map(this.renderNames)}
            {this.people.map(this.renderNames)}
            {this.people.map(this.renderNames)}
            {this.people.map(this.renderNames)}
            {this.people.map(this.renderNames)}
            {this.people.map(this.renderNames)}
            {this.people.map(this.renderNames)}
            {this.people.map(this.renderNames)}
            {this.people.map(this.renderNames)}
          </ScrollView>
          <FlipCard style={{ position: "absolute", top: 40, right: 20 }}>
            <Image
              source={this.people[this.state.selected].photo}
              style={{ width: 270, resizeMode: "contain", elevation: 30 }}
            />
            <Image
              source={this.people[this.state.selected].intro}
              style={{ width: 270, resizeMode: "contain", elevation: 30 }}
            />
          </FlipCard>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    elevation: 20,
    backgroundColor: "#fff"
  },
  tag: {
    alignItems: "center",
    marginVertical: "auto",
    height: 120,
    width: 25,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 0,
    marginTop: 40
  },
  selected: {
    width: 70
  }
});
