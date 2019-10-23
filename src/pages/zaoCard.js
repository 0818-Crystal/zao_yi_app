import React from "react";
import Carousel, { Pagination } from "react-native-snap-carousel";

import {
  Image,
  ImageBackground,
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback
} from "react-native";
import card1 from "../static/img/zaopucard1.png";
import card2 from "../static/img/zaopucard2.png";
import card3 from "../static/img/zaopucard3.png";
import bac1 from "../static/img/card1bac.jpg";
import bac2 from "../static/img/card2bac.jpg";
import bac3 from "../static/img/card3bac.jpg";

const { width, height } = Dimensions.get("window");

export default class ZaoCard extends React.Component {
  state = {
    slider1ActiveSlide: 0
  };
  CARDS = [
    { title: "TwoEyes", cardimg: card1, bac: bac1 },
    { title: "ThreeEyes", cardimg: card2, bac: bac2 },
    { title: "FourEyes", cardimg: card3, bac: bac3 }
  ];
  _renderItem = ({ item, index }) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.navigation.navigate(item.title)}
      >
        <Image source={item.cardimg} style={{ height: 550, width: 300 }} />
      </TouchableWithoutFeedback>
    );
  };
  render() {
    return (
      <ImageBackground
        style={styles.background}
        source={this.CARDS[this.state.slider1ActiveSlide].bac}
      >
        <Carousel
          layout={"stack"}
          layoutCardOffset={18}
          data={this.CARDS}
          renderItem={this._renderItem}
          sliderWidth={width - 50}
          itemWidth={width}
          loop={true}
          slideStyle={{
            height: 600,
            padding: 30,
            marginTop: 50
          }}
          onSnapToItem={index => this.setState({ slider1ActiveSlide: index })}
        />
        <Pagination
          dotsLength={this.CARDS.length}
          activeDotIndex={this.state.slider1ActiveSlide}
          containerStyle={styles.paginationContainer}
          dotColor={"rgba(255, 255, 255, 0.92)"}
          dotStyle={styles.paginationDot}
          inactiveDotColor="black"
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  background: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: width,
    height: height
  },
  paginationContainer: {
    position: "absolute",
    bottom: 40
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 8
  }
});
