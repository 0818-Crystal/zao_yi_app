import React from "react";
import AnimatedTabs from "react-native-animated-tabs";
import {
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  View
} from "react-native";
import { Icon } from "react-native-elements";
import vrcard from "../static/img/vrcard.png";
import makecard from "../static/img/makecard.png";
import personcard from "../static/img/personcard.png";
import vrbac from "../static/img/vrbac.png";
import makebac from "../static/img/makebac.png";
import personbac from "../static/img/personbac.png";
const { width, height } = Dimensions.get("window");

export default class BoLan extends React.Component {
  state = {
    activePanel: 0
  };
  CARDS = [
    {
      title: "VRPage",
      src: vrcard,
      bac: vrbac
    },
    {
      title: "MakePage",
      src: makecard,
      bac: makebac
    },
    {
      title: "PeopleCard",
      src: personcard,
      bac: personbac
    }
  ];
  renderCards = (item, index) => {
    return (
      <View style={{ flex: 1 }} key={index}>
        <Image source={item.src} style={styles.imgStyle} resizeMode="stretch" />
        <Icon
          name="down"
          type="antdesign"
          color="#fff"
          size={30}
          containerStyle={{ marginBottom: 40 }}
          onPress={() => {
            this.props.navigation.navigate(item.title);
          }}
        />
      </View>
    );
  };

  render() {
    return (
      <ImageBackground
        source={this.CARDS[this.state.activePanel].bac}
        style={{ width: width, height: height }}
      >
        <View style={{ flex: 1, marginTop: 40, marginLeft: 10 }}>
          <AnimatedTabs
            panelWidth={width / 1}
            activePanel={this.state.activePanel}
            onAnimateFinish={activePanel => this.setState({ activePanel })}
          >
            {this.CARDS.map(this.renderCards)}
          </AnimatedTabs>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  imgStyle: {
    flex: 1,
    width: width
  },
  iconleft: {
    position: "absolute",
    left: 10,
    zIndex: 999
  },
  iconright: {
    position: "absolute",
    right: 10,
    zIndex: 999
  }
});
