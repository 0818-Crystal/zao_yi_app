import React from "react";
import { Icon } from "react-native-elements";
import {
  Dimensions,
  StyleSheet,
  View,
  ScrollView,
  ImageBackground,
  TouchableWithoutFeedback
} from "react-native";
import * as Animated from "react-native-animatable";
import bac from "../static/img/indexbac.png";
import danqing from "../static/img/danqing.png";
import danqing_1 from "../static/img/danqing_1.png";
import danqingtxt from "../static/img/danqingtxt.png";
import jiri from "../static/img/jiri.png";
import jiri_1 from "../static/img/jiri_1.png";
import jiritxt from "../static/img/jiritxt.png";
import bolan from "../static/img/bolan.png";
import bolan_1 from "../static/img/bolan_1.png";
import bolantxt from "../static/img/bolantxt.png";
import zaopu from "../static/img/zaopu.png";
import zaopu_1 from "../static/img/zaopu_1.png";
import zaoputxt from "../static/img/zaoputxt.png";

const { width, height } = Dimensions.get("window");
export default class Index extends React.Component {
  state = { currentPage: 0 };
  PAGES = [
    { title: "JiRi", logo: jiri, inverted: jiri_1, name: jiritxt },
    { title: "ZaoCard", logo: zaopu, inverted: zaopu_1, name: zaoputxt },
    { title: "BoLan", logo: bolan, inverted: bolan_1, name: bolantxt },
    {
      title: "PhotoPicker",
      logo: danqing,
      inverted: danqing_1,
      name: danqingtxt
    }
  ];
  scrollEnd = e => {
    var offsetX = e.nativeEvent.contentOffset.x;

    var currentPage = Math.round(offsetX / width);
    this.setState({
      currentPage: currentPage
    });
  };
  // onScroll = e => {
  //   var offsetX = e.nativeEvent.contentOffset.x;
  //   var progress = offsetX / width;
  //   console.log(progress);
  // };
  renderpages = (item, index) => {
    return (
      <ImageBackground style={styles.slider} key={index} source={bac}>
        <TouchableWithoutFeedback
          onPress={() => this.props.navigation.navigate(item.title)}
        >
          <Animated.Image
            source={item.logo}
            style={[
              styles.logo,
              this.state.currentPage === index && {
                transform: [{ rotateY: "0deg" }]
              }
            ]}
            transition={["rotateY"]}
            duration={1000}
          />
        </TouchableWithoutFeedback>
        <Animated.Image
          source={item.inverted}
          style={[
            styles.invert,
            this.state.currentPage === index && {
              opacity: 1,
              transform: [{ rotateY: "0deg" }]
            }
          ]}
          duration={2000}
          transition={["opacity", "rotateY"]}
        />
        <Animated.Image
          source={item.name}
          style={[
            { marginTop: 50, opacity: 0 },
            this.state.currentPage === index && {
              opacity: 1
            }
          ]}
          transition={["opacity"]}
          duration={2000}
        />
      </ImageBackground>
    );
  };
  render() {
    return (
      <View>
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          onMomentumScrollEnd={e => this.scrollEnd(e)}
          showsVerticalScrollIndicator={false}
        >
          {this.PAGES.map(this.renderpages)}
        </ScrollView>

        <Icon
          type="material"
          name="reorder"
          color="#ffffdc"
          size={25}
          containerStyle={styles.icon}
          onPress={() => this.props.navigation.toggleDrawer()}
        />
        <Icon
          type="material"
          name="today"
          color="#ffffdc"
          size={25}
          onPress={() => this.props.navigation.navigate("TodoPage")}
          containerStyle={[styles.assign]}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  logo: {
    width: 300,
    resizeMode: "contain",
    marginTop: 80,
    justifyContent: "center",
    transform: [{ rotateY: "60deg" }]
  },
  invert: {
    width: 280,
    resizeMode: "contain",
    opacity: 0,
    transform: [{ rotateY: "60deg" }]
  },
  touchView: {
    height: 200,
    width: 200,
    position: "absolute",
    top: height / 3,
    left: 100
  },
  slider: {
    alignItems: "center",
    justifyContent: "center",
    width: width,
    height: height
  },
  icon: {
    position: "absolute",
    zIndex: 2000,
    left: 20,
    top: 25
  },
  assign: {
    position: "absolute",
    zIndex: 2000,
    right: 20,
    top: 25
  }
});
