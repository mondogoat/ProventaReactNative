import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import {
  ListItem
} from "../../components";
import ComponentStyle from "./styles";

class Accordion extends Component{

  state = {
    expanded: false
  };

  renderDropdown(){
    if(this.state.expanded){
      return this.props.children;
    }
  }

  renderAccordionButton(){
    if(this.state.expanded){
      return <Image source={require("../../assets/accordion_up_button.png")} />
    }
    return <Image source={require("../../assets/accordion_down_button.png")} />
  }
  
  render() {
    const { sessionTime, sessionTitle } = this.props;

    return(
      <View>
        <ListItem onPress={()=>{this.setState({ expanded: !this.state.expanded})}}>
          <View style={ComponentStyle.scheduleList}>
            <View>
              <Text style={ComponentStyle.text}>
                {sessionTime.startingHour}:{sessionTime.startingMinute} {sessionTime.meridian} - {sessionTime.endingHour}:{sessionTime.endingMinute} {sessionTime.meridian}
              </Text>
              <Text style={ComponentStyle.title}>
                {sessionTitle}
              </Text>
            </View>
            <View>
             {this.renderAccordionButton()}
            </View>
          </View>
          {this.renderDropdown()}
          
        </ListItem>
      </View>
    );
  }
};

export { Accordion };
