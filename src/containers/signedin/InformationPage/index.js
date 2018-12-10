import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { Header, TabbedMenu, Card, ListItem } from "../../../components";
import PageStyle from "./styles";
import { DrawerActions } from "react-navigation";

class InformationPage extends Component {
  state = {
    menu: [
      {
        id: 0,
        image: require("../../../assets/facilitators_icon.png"),

        name: "FACILITATORS"
      },
      {
        id: 1,
        image: require("../../../assets/participators_icon.png"),
        name: "PARTICIPANTS"
      },
      {
        id: 2,
        image: require("../../../assets/sponsors_icon.png"),
        name: "SPONSORS"
      },
      {
        id: 3,
        image: require("../../../assets/map_icon.png"),
        name: "FLOOR MAP"
      },
      {
        id: 4,
        image: require("../../../assets/feedback_icon.png"),
        name: "FEEDBACK"
      }
    ]
  };

  renderMenu(menu) {
    const { navigation } = this.props;
    const menuItem = menu.map(({ id, image, name }) => {
      return (
        <View key={id} style={PageStyle.menuContainer}>
          <ListItem
            onPress={() =>
              navigation.navigate("InformationDetailsPage", {
                content: name
              })
            }
          >
            <View style={PageStyle.menuList}>
              <View style={{ width: "25%" }}>
                <Image style={PageStyle.menuIcon} source={image} />
              </View>
              <View style={{ width: "75%" }}>
                <Text style={PageStyle.menuTitle}>{name}</Text>
              </View>
            </View>
            <View style={PageStyle.menuBorder} />
          </ListItem>
        </View>
      );
    });

    return menuItem;
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={PageStyle.container}>
        <Header
          label="INFORMATION"
          status="loggedin"
          onPress={() => {
            navigation.dispatch(DrawerActions.openDrawer());
          }}
        />
        <Card>{this.renderMenu(this.state.menu)}</Card>

        <TabbedMenu navigation={navigation} status="loggedin" />
      </View>
    );
  }
}

export default InformationPage;
