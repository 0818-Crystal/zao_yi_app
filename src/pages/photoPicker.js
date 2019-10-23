import React from "react";
import {
  ScrollView,
  Image,
  TouchableOpacity,
  View,
  Text,
  StyleSheet
} from "react-native";
import { Header, Left, Body, Title, Container } from "native-base";
import { Icon } from "react-native-elements";
export default class PhotoPicker extends React.Component {
  render() {
    return (
      <Container>
        <Header style={styles.header} androidStatusBarColor="#000">
          <Left>
            <Icon type="material" name="reorder" color="#789aa8" size={25} />
          </Left>
          <Body>
            <Title style={{ color: "#789aa8" }}>选一幅喜欢的画</Title>
          </Body>
        </Header>
        <ScrollView>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              source={require("../static/img/kongque.png")}
              style={styles.image}
            />
            <Text style={styles.text}>《孔雀东南飞》</Text>
            <Image
              source={require("../static/img/zaojunfu.png")}
              style={styles.image}
            />
            <Text style={styles.text}>《灶君府》</Text>

            <Image
              source={require("../static/img/hehua.png")}
              style={styles.image}
            />
            <Text style={styles.text}>《荷花》</Text>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("DanQing")}
            >
              <Image
                source={require("../static/img/mudan.jpg")}
                style={styles.image}
              />
            </TouchableOpacity>
            <Text style={styles.text}>《牡丹花开》</Text>

            <Image
              source={require("../static/img/yuyue.png")}
              style={styles.image}
            />
            <Text style={styles.text}>《鱼跃龙门》</Text>
          </View>
        </ScrollView>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    elevation: 20,
    backgroundColor: "#fff"
  },
  image: {
    width: 350,
    height: 300,
    marginTop: 30
  },
  text: {
    marginTop: 20,
    fontSize: 20
  }
});
