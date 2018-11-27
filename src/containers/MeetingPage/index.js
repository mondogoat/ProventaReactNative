import React, { Component } from "react";
import { Text, View, ScrollView, Image } from "react-native";
import { Header, TabbedMenu, Card, Map } from "../../components";
import PageStyle from "./styles";
import { DrawerActions } from "react-navigation";

class MeetingPage extends Component {
  state = {
    expectations: [
      {
        id: "exp1",
        icon: require("../../assets/roundtable.png"),
        title: "Interactive Roundtable Discussions",
        description:
          "Attendees can proactively share and ask questions to their peers about the success of their work in an informal setting."
      },
      {
        id: "exp2",
        icon: require("../../assets/agenda.png"),
        title: "Tailor-fit and Personalized Agenda",
        description:
          "Attendees can proactively share and ask questions to their peers about the success of their work in an informal setting."
      },
      {
        id: "exp3",
        icon: require("../../assets/one-to-one-copy.png"),
        title: "Director level one-to-one meetings",
        description:
          "Attendees can proactively share and ask questions to their peers about the success of their work in an informal setting."
      },
      {
        id: "exp4",
        icon: require("../../assets/networking-copy.png"),
        title: "Networking Opportunities",
        description:
          "Attendees can proactively share and ask questions to their peers about the success of their work in an informal setting."
      }
    ],
    facilitators: [
      {
        id: "faci1",
        icon: require("../../assets/facilitator_1.png"),
        name: "David Crain",
        title: "Alibaba CEO"
      },
      {
        id: "faci2",
        icon: require("../../assets/facilitator_2.png"),
        name: "Yvone Thompson",
        title: "Sputnik Inc. CEO"
      },
      {
        id: "faci3",
        icon: require("../../assets/faclitator2.png"),
        name: "Phet Putrie",
        title: "Founder of Stark Industries"
      },
      {
        id: "faci4",
        icon: require("../../assets/facilitator_4.png"),
        name: "Arnold Zachary",
        title: "CEO Wacom Industries"
      }
    ]
  };

  renderTitle() {
    return (
      <Card>
        <Image
          style={PageStyle.image}
          source={require("../../assets/meeting_1.png")}
        />
        <View style={PageStyle.info}>
          <Text style={PageStyle.description}>
            Digital Transformation Strategy Meeting APAC - Manila 2018
          </Text>
          <Text style={PageStyle.date}>22nd November 2018</Text>
          <Text style={PageStyle.area}>Marriot Grand Ballroom - Manila</Text>
        </View>
      </Card>
    );
  }

  // Insert Video Reusable Component here
  renderVideo() {
    return (
      <Card>
        <Image
          style={PageStyle.video}
          source={require("../../assets/video_placeholder.png")}
        />
      </Card>
    );
  }

  renderDescription() {
    return (
      <Card>
        <View style={PageStyle.textArea}>
          <Text style={PageStyle.text}>
            With technology continuously reshaping the business landscape,
            organizations need to be up-to-date with the latest digital trends.
            Automating customer service, leveraging artificial intelligence and
            machine learning, enhancing processes with cloud tech are just some
            of the ways a company can better serve both clients and
            stakeholders. But with numerous digital transformation events out
            there, which ones should you invest your time and resources in? ~
            {"\n"}
            {"\n"}
            Redefining how business leaders worldwide build meaningful
            partnerships, Proventa International’s Digital Transformation
            Strategy Meeting is not like a typical digital transformation
            conference. Exclusive to director-level executives only, the
            strategy meeting ensures that interactions between primary decision
            makers of top and emerging companies are intimate and insightful.
            {"\n"}
            {"\n"}
            Unlike digital strategy summits where opportunities of raising
            relevant questions or sharing case studies are limited, the Digital
            Transformation Strategy Meeting’s executive roundtable discussions
            allow for in-depth exchanges about each attendee’s strategic
            priorities. You can expect comprehensive conversations about digital
            trends like artificial intelligence, machine learning, Internet of
            Things (IoT) and mobile/cloud technologies. Personalized for each
            attendee, our intimate roundtable discussions allow time for
            questions that matter to you and for industry insights you’d like to
            share.
            {"\n"}
            {"\n"}
            Another feature of the strategy meeting you can’t find in other
            digital transformation events is our pre-scheduled one-to-one
            meetings. With our vast network of digital transformation experts in
            Asia and around the world, you can be sure to meet the right
            professional to help guide you with your organization’s challenges.
            Looking for ways you can leverage artificial intelligence in your
            company’s processes? Just hit us up so we can work on finding the
            subject matter expert for you!
          </Text>
        </View>
      </Card>
    );
  }

  renderExpectations(expectations) {
    const expectation = expectations.map(({ id, title, description, icon }) => {
      return (
        <View style={PageStyle.expectationContainer}>
          <View key={id} style={PageStyle.expectationList}>
            <View style={{ width: "25%" }}>
              <Image style={PageStyle.expectationIcon} source={icon} />
            </View>
            <View style={{ width: "75%" }}>
              <Text style={PageStyle.expectationTitle}>{title}</Text>
              <Text style={PageStyle.expectationDescription}>
                {description}
              </Text>
            </View>
          </View>
          <View style={PageStyle.expectationBorder} />
        </View>
      );
    });

    return expectation;
  }

  renderFacilitators(facilitators) {
    const facilitator = facilitators.map(({ id, icon, title, name }) => {
      return (
        <View key={id} style={PageStyle.expectationContainer}>
          <View style={PageStyle.expectationList}>
            <View style={{ width: "25%" }}>
              <Image
                style={[PageStyle.expectationIcon, PageStyle.profileIcon]}
                source={icon}
              />
            </View>
            <View style={{ width: "75%" }}>
              <Text style={PageStyle.expectationTitle}>{name}</Text>
              <Text style={PageStyle.expectationDescription}>{title}</Text>
            </View>
          </View>
          <View style={PageStyle.expectationBorder} />
        </View>
      );
    });

    return facilitator;
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={PageStyle.container}>
        <Header
          label="MEETING DETAILS"
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
        <ScrollView>
          {this.renderTitle()}
          {this.renderVideo()}
          <Text style={PageStyle.header}> OUR UNIQUE FORMAT </Text>
          {this.renderDescription()}
          <Text style={PageStyle.header}> WHAT TO EXPECT </Text>
          {this.renderExpectations(this.state.expectations)}
          <Text style={PageStyle.header}> FACILITATORS </Text>
          {this.renderFacilitators(this.state.facilitators)}
          <Text style={PageStyle.header}> VENUE </Text>
          {/* For refactoring, must be inside Card */}
          <View style={PageStyle.mapContainer} />
          <Map />
        </ScrollView>
        <TabbedMenu navigation={navigation} />
      </View>
    );
  }
}

export default MeetingPage;
