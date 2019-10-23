import React from "react";
import {
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Alert
} from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  View
} from "native-base";

const list2 = [
  [
    {
      name: "Icon View",
      route: "DanQing",
      icon: "easel"
    },
    {
      name: "Tab View",
      route: "BatteryTableView",
      icon: "easel"
    },
    {
      name: "Graph",
      route: "BatteryGraph",
      icon: "easel"
    }
  ],

  [
    {
      name: "Icon View",
      route: "BatteryLifetimeTabView",
      icon: "easel"
    },
    {
      name: "Tab View",
      route: "BatteryLifetimeIconView",
      icon: "easel"
    }
  ],

  [
    {
      name: "Icon View",
      route: "ChargerIconView",
      icon: "easel"
    },
    {
      name: "Tab View",
      route: "ChargerTabView",
      icon: "easel"
    },
    {
      name: "Graph",
      route: "ChargerGraph",
      icon: "easel"
    }
  ],

  [
    {
      name: "Battery Settings Summary",
      route: "BatterySettingsSum",
      icon: "easel"
    },
    {
      name: "Charger Settings Summary",
      route: "ChargerSettingsSum",
      icon: "easel"
    },
    {
      name: "Battery Alarm Limitis",
      route: "BatteryAlarmLimits",
      icon: "easel"
    },
    {
      name: "Charger Alarm Limitis",
      route: "ChargerAlarmLimits",
      icon: "easel"
    },
    {
      name: "Enable Battery Alarms",
      route: "EnableBatteryAlarms",
      icon: "easel"
    },
    {
      name: "Enable Charger Alarms",
      route: "EnableChargerAlarms",
      icon: "easel"
    },
    {
      name: "Push Messaging",
      route: "PushMessage",
      icon: "easel"
    }
  ],
  [
    {
      name: "Device Groups",
      route: "DevicesGroups",
      icon: "easel"
    },
    {
      name: "Users",
      route: "Users",
      icon: "easel"
    },
    {
      name: "Domains",
      route: "Domains",
      icon: "easel"
    },
    {
      name: "Devices",
      route: "Devices",
      icon: "easel"
    }
  ]
];
const list = [
  {
    name: "Batteries",
    icon: "easel"
  },
  {
    name: "Battery Lifetime",
    icon: "easel"
  },
  {
    name: "Chargers",
    icon: "easel"
  },
  {
    name: "Bat/Chgr Settings",
    icon: "easel"
  },
  {
    name: "System Settings",
    icon: "easel"
  }
];

const SideBarStyles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    height: 55,
    alignItems: "center"
  }
});

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    // 设置每个头部的显示、隐藏状态
    this.state = {
      listExpand: [false, false, false, false, false]
    };
  }

  renderMenuList(list) {
    return list.map((item, i) => this.renderItem(item, i));
  }
  onPressItem(i) {
    let l = this.state.listExpand;
    for (var j = 0; j < this.state.listExpand.length; j++) {
      if (i !== j) {
        l[j] = false;
      }
    }
    l[i] = !l[i];
    this.setState({ listExpand: l });
  }

  // 加载头部试图
  renderItem(item, i) {
    return (
      <View key={i}>
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={this.onPressItem.bind(this, i)}
        >
          <View style={SideBarStyles.headerContainer}>
            <Icon
              active
              name={item.icon}
              style={{ color: "#777", fontSize: 26, width: 30, marginLeft: 15 }}
            />
            <Text style={{ fontSize: 16, marginLeft: 20 }}>{item.name}</Text>
            {/* //替换成自己的箭头图片 */}
            {/* <Image source={this.state.listExpand[i]?require('../../../img/down.png'):require('../../../img/right.png')} style={{position:"absolute",height:30,right:10}}/> */}
          </View>
        </TouchableOpacity>
        {this.state.listExpand[i] ? this.renderSubItem(list2, i) : null}
      </View>
    );
  }
  // 加载子菜单
  renderSubItem(item, i) {
    return (
      // 设置list不滚动
      <List
        scrollEnabled={false}
        dataArray={list2[i]}
        renderRow={data => (
          <ListItem
            button
            noBorder
            onPress={() => this.props.navigation.navigate(data.route)}
          >
            <Left>
              <Icon
                active
                name={data.icon}
                style={{ color: "#777", fontSize: 26, width: 30 }}
              />
              <Text style={{ fontSize: 16, marginLeft: 20 }}>{data.name}</Text>
            </Left>
          </ListItem>
        )}
      />
    );
  }

  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
        >
          {this.renderMenuList(list)}
        </Content>
      </Container>
    );
  }
}

export default SideBar;
