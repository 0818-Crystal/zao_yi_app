import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import { ListItem, CheckBox, Body, Button, Text } from "native-base";
import TodoModal from "../pages/todoModal";
import AnimatedTabs from "react-native-animated-tabs";
import { Icon } from "react-native-elements";
import bac from "../static/img/todobac.png";
import { userInfo } from "../pages/loginIn";
const getDeviceHeight = () => Dimensions.get("window").height;
const getDeviceWidth = () => Dimensions.get("window").width;
const getPanelWidth = () => getDeviceWidth() / 1.3;

const panelsCount = 3;

export default class TodoPage extends Component {
  constructor() {
    super();

    this.state = {
      showModal: false,
      activePanel: 1,
      tasknum: 0,
      tasks: [],
      hascompleted: [],
      uncompleted: []
    };
  }
  iscompleted = todos => {
    var completedtask = [];
    var uncompletedtask = [];

    for (i in todos) {
      if (!todos[i].completed) {
        uncompletedtask.push(todos[i]);
      } else completedtask.push(todos[i]);
    }
    return {
      tasknum: uncompletedtask.length,
      uncompleted: uncompletedtask,
      hascompleted: completedtask,
      tasks: todos
    };
  };
  renderTodoCompleted = (item, index) => {
    if (item.completed)
      return (
        <ListItem key={index}>
          <CheckBox checked={true} />
          <Body>
            <Text>{item.text}</Text>
          </Body>
        </ListItem>
      );
  };
  renderTodoUnCompleted = (item, index) => {
    if (!item.completed)
      return (
        <ListItem key={index}>
          <CheckBox
            checked={item.completed}
            onPress={() => {
              newtasks = this.state.tasks;
              newtasks[index].completed = true;
              this.setState({
                tasks: newtasks,
                tasknum: this.state.tasknum - 1
              });
            }}
          />
          <Body>
            <Text>{item.text}</Text>
          </Body>
        </ListItem>
      );
  };
  showModal = () => {
    this.setState({ showModal: true });
  };
  renderTodoAll = (item, index) => {
    return (
      <ListItem key={index}>
        <CheckBox checked={item.completed} />
        <Body>
          <Text>{item.text}</Text>
        </Body>
      </ListItem>
    );
  };
  componentDidMount() {
    token = userInfo.token;
    fetch("http://192.168.199.114:3000/todo/all", {
      method: "get",
      headers: {
        // Accept: "application/json",
        "Content-Type": "application/json",
        "x-auth": token
      }
    })
      .then(response => response.json())
      .then(async result => {
        console.log(result);
        info = await this.iscompleted(result.todos);
        console.log(info);
        this.setState({
          tasknum: info.tasknum,
          uncompleted: info.uncompleted,
          hascompleted: info.hascompleted,
          tasks: info.tasks
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const animatedViewStyle = {
      flex: 1
    };

    return (
      <ImageBackground source={bac} style={styles.bac}>
        <View style={styles.top}>
          {this.state.showModal ? (
            <TodoModal
              onChange={todo => {
                debugger;
                tasksnew = this.state.tasks;
                uncompletednew = this.state.uncompleted;
                tasksnew.push(todo);
                uncompletednew.push(todo);
                this.setState({
                  tasks: tasksnew,
                  uncompleted: uncompletednew,
                  tasknum: this.state.tasknum + 1
                });
              }}
            />
          ) : null}
          <Text style={styles.hello}>你好</Text>
          <Text style={styles.hello}>{userInfo.username}!</Text>
          <Text style={styles.task}>
            你今天有
            <Text style={styles.tasknum}> {this.state.tasknum} 个任务</Text>
            代办
          </Text>
        </View>
        <Icon
          type="material"
          name="details"
          color="#0605ac"
          containerStyle={{ marginBottom: 20 }}
        />
        <View style={animatedViewStyle}>
          <AnimatedTabs
            panelWidth={getPanelWidth()}
            activePanel={this.state.activePanel}
            onAnimateFinish={activePanel => this.setState({ activePanel })}
          >
            <View style={[styles.tabContentStyle]}>
              <Text style={styles.text}>已完成</Text>
              <ScrollView>
                {this.state.tasks.map(this.renderTodoCompleted)}
              </ScrollView>
            </View>
            <View style={[styles.tabContentStyle]}>
              <Text style={styles.text}>代办事项</Text>
              <ScrollView>
                {this.state.tasks.map(this.renderTodoUnCompleted)}
              </ScrollView>
            </View>
            <View style={[styles.tabContentStyle]}>
              <Text style={styles.text}>所有事项</Text>
              <ScrollView>
                {this.state.tasks.map(this.renderTodoAll)}
              </ScrollView>
            </View>
          </AnimatedTabs>
        </View>

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
          onPress={this.showModal}
        >
          <Icon type="material" name="create" color="#fff" />
          <Text>写计划</Text>
        </Button>
      </ImageBackground>
    );
  }

  goToPanel(direction) {
    const nextPanel = this.state.activePanel + direction;

    if (nextPanel >= 0 && nextPanel < panelsCount) {
      this.setState({ activePanel: nextPanel });
    }
  }
}

const styles = StyleSheet.create({
  tabContentStyle: {
    backgroundColor: "#fff",
    borderRadius: 20,
    elevation: 20,
    height: getDeviceHeight() - getDeviceHeight() / 2,
    width: getPanelWidth()
  },
  tasknum: {
    color: "#0605ac"
  },
  task: {
    fontWeight: "500",
    marginTop: 20,
    color: "#9a9faa",
    fontSize: 15
  },
  top: {
    marginTop: 50,
    margin: 30
  },
  hello: {
    color: "#1e2118",
    fontSize: 40,
    fontWeight: "bold"
  },
  bac: {
    flex: 1
  },
  text: {
    padding: 15,
    alignSelf: "center"
  },
  buttons: {
    flexDirection: "row"
  }
});
