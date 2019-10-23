import React from "react";
import {
  ImageBackground,
  Image,
  ScrollView,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { Icon } from "react-native-elements";
import { Header, Left, Right } from "native-base";
import seven from "../static/img/seven.png";
import eight from "../static/img/eight.png";
import nine from "../static/img/nine.png";
import ten from "../static/img/ten.png";
import eleven from "../static/img/eleven.png";
import sevenbac from "../static/img/senvenbac.png";
import eightbac from "../static/img/eightbac.png";
import ninebac from "../static/img/ninebac.png";
import tenbac from "../static/img/tenbac.png";
import elevenbac from "../static/img/elevenbac.png";
import FlipCard from "react-native-flip-card";
import { Calendar } from "react-native-calendars";
const { width, height } = Dimensions.get("window");
class Date extends React.Component {
  render() {
    return (
      <FlipCard>
        <ImageBackground source={this.props.date} style={styles.date} />
        <ImageBackground source={this.props.datebac} style={styles.date} />
      </FlipCard>
    );
  }
}

export default class JiRi extends React.Component {
  state = { showCalendar: false };
  DATES = [
    {
      date: seven,
      datebac: sevenbac
    },
    {
      date: eight,
      datebac: eightbac
    },
    {
      date: nine,
      datebac: ninebac
    },
    {
      date: ten,
      datebac: tenbac
    },
    {
      date: eleven,
      datebac: elevenbac
    }
  ];
  layoutX = new Array();
  renderDate = (item, index) => {
    return <Date date={item.date} datebac={item.datebac} key={index} />;
  };
  renderCalendar = () => {
    return (
      <Calendar
        current={"2019-08-07"}
        minDate={"2019-01-01"}
        maxDate={"2019-12-31"}
        onDayPress={day => {
          this.setState({ showCalendar: false });
          this.myScrollView.scrollTo({
            x: width * (day.day - 7),
            y: 0,
            animated: true
          });
          console.log("selected day", day);
        }}
        onDayLongPress={day => {
          console.log("selected day", day);
        }}
        monthFormat={"yyyy MM"}
        onMonthChange={month => {
          console.log("month changed", month);
        }}
        firstDay={1}
        onPressArrowLeft={substractMonth => substractMonth()}
        onPressArrowRight={addMonth => addMonth()}
      />
    );
  };
  render() {
    return (
      <View>
        <Header style={styles.header} androidStatusBarColor="#000">
          <Left>
            <Icon
              type="material"
              name="reorder"
              color="#a77e56"
              size={25}
              onPress={() =>
                this.setState({ showCalendar: !this.state.showCalendar })
              }
            />
          </Left>
          <Right>
            <Icon type="material" name="share" color="#a77e56" size={25} />
          </Right>
        </Header>

        <ScrollView
          horizontal={true}
          style={styles.date}
          pagingEnabled
          ref={view => {
            this.myScrollView = view;
          }}
        >
          {this.DATES.map(this.renderDate)}
        </ScrollView>

        <TouchableOpacity
          style={{
            position: "absolute",
            top: 100,
            right: 0,
            zIndex: 99,
            elevation: 40
          }}
          onPress={() => this.props.navigation.navigate("TodoPage")}
        >
          {this.state.showCalendar ? null : (
            <Image
              source={require("../static/img/daily.png")}
              style={{ width: 150, resizeMode: "contain" }}
            />
          )}
        </TouchableOpacity>
        <View
          style={{ position: "absolute", top: 50, zIndex: 2999, width: width }}
        >
          {this.state.showCalendar ? this.renderCalendar() : null}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    elevation: 20,
    backgroundColor: "#f2f2f2"
  },
  date: {
    width: width,
    height: height
  }
});
