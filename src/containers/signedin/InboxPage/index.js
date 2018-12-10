import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { Header, TabbedMenu, Card, ListItem } from "../../../components";
import PageStyle from "./styles";
import { DrawerActions } from "react-navigation";

class InboxPage extends Component {
  state = {
    emails: [
      {
        id: 0,
        title: "Digital Transformation",
        description: "Burn rate mass market series ...",
        date: "23m",
        body:
          "Gamification graphical user interface holy grail entrepreneur. Pivot seed round bootstrapping business-to-consumer founders graphical user interface business-to-business. Learning curve business model canvas niche market buzz market leverage. User experience facebook focus venture social media traction investor seed money iPhone business plan holy grail beta. Entrepreneur seed money rockstar niche market non-disclosure agreement agile development churn rate validation gen-z innovator facebook angel investor ownership network effects. Focus series A financing buzz social media technology learning curve bootstrapping. Paradigm shift stock churn rate value proposition funding investor mass market holy grail gamification deployment product management. Incubator stealth agile development business plan angel investor freemium twitter holy grail beta gen-z. Deployment hackathon stealth. Series A financing bootstrapping iPad.",
        status: "unread"
      },
      {
        id: 1,
        title: "Frappe Co.",
        description: "Mass market series...",
        date: "1h",
        body:
          "Gamification graphical user interface holy grail entrepreneur. Pivot seed round bootstrapping business-to-consumer founders graphical user interface business-to-business. Learning curve business model canvas niche market buzz market leverage. User experience facebook focus venture social media traction investor seed money iPhone business plan holy grail beta. Entrepreneur seed money rockstar niche market non-disclosure agreement agile development churn rate validation gen-z innovator facebook angel investor ownership network effects. Focus series A financing buzz social media technology learning curve bootstrapping. Paradigm shift stock churn rate value proposition funding investor mass market holy grail gamification deployment product management. Incubator stealth agile development business plan angel investor freemium twitter holy grail beta gen-z. Deployment hackathon stealth. Series A financing bootstrapping iPad.",
        status: "unread"
      },
      {
        id: 2,
        title: "React Convention",
        description: "Development marketing...",
        date: "Dec 2",
        body:
          "Gamification graphical user interface holy grail entrepreneur. Pivot seed round bootstrapping business-to-consumer founders graphical user interface business-to-business. Learning curve business model canvas niche market buzz market leverage. User experience facebook focus venture social media traction investor seed money iPhone business plan holy grail beta. Entrepreneur seed money rockstar niche market non-disclosure agreement agile development churn rate validation gen-z innovator facebook angel investor ownership network effects. Focus series A financing buzz social media technology learning curve bootstrapping. Paradigm shift stock churn rate value proposition funding investor mass market holy grail gamification deployment product management. Incubator stealth agile development business plan angel investor freemium twitter holy grail beta gen-z. Deployment hackathon stealth. Series A financing bootstrapping iPad.",
        status: "unread"
      },
      {
        id: 3,
        title: "Skylabs",
        description: "Student Tutorials",
        date: "Dec 4",
        body:
          "Gamification graphical user interface holy grail entrepreneur. Pivot seed round bootstrapping business-to-consumer founders graphical user interface business-to-business. Learning curve business model canvas niche market buzz market leverage. User experience facebook focus venture social media traction investor seed money iPhone business plan holy grail beta. Entrepreneur seed money rockstar niche market non-disclosure agreement agile development churn rate validation gen-z innovator facebook angel investor ownership network effects. Focus series A financing buzz social media technology learning curve bootstrapping. Paradigm shift stock churn rate value proposition funding investor mass market holy grail gamification deployment product management. Incubator stealth agile development business plan angel investor freemium twitter holy grail beta gen-z. Deployment hackathon stealth. Series A financing bootstrapping iPad.",
        status: "read"
      },
      {
        id: 4,
        title: "Unosoft",
        description: "Hiring",
        date: "Dec 5",
        body:
          "Gamification graphical user interface holy grail entrepreneur. Pivot seed round bootstrapping business-to-consumer founders graphical user interface business-to-business. Learning curve business model canvas niche market buzz market leverage. User experience facebook focus venture social media traction investor seed money iPhone business plan holy grail beta. Entrepreneur seed money rockstar niche market non-disclosure agreement agile development churn rate validation gen-z innovator facebook angel investor ownership network effects. Focus series A financing buzz social media technology learning curve bootstrapping. Paradigm shift stock churn rate value proposition funding investor mass market holy grail gamification deployment product management. Incubator stealth agile development business plan angel investor freemium twitter holy grail beta gen-z. Deployment hackathon stealth. Series A financing bootstrapping iPad.",
        status: "read"
      }
    ]
  };

  renderEmails(emails) {
    const { navigation } = this.props;

    const email = emails.map(
      ({ id, title, date, description, status, body }) => {
        return (
          <View key={id} style={PageStyle.list}>
            <ListItem
              onPress={() =>
                navigation.navigate("InboxDetailsPage", {
                  title: title,
                  date: date,
                  description: description,
                  body: body
                })
              }
            >
              <View style={PageStyle.list}>
                <View style={{ width: "10%" }}>
                  <View
                    style={[
                      PageStyle.listStatus,
                      status === "read" ? { opacity: 0 } : { opacity: 1 }
                    ]}
                    source="../../../assets/read_icon.png"
                  />
                </View>
                <View style={{ width: "90%" }}>
                  <Text
                    style={[
                      PageStyle.listTitle,
                      status === "read"
                        ? PageStyle.listTitle
                        : PageStyle.readStatus
                    ]}
                  >
                    {title}
                  </Text>
                  <Text
                    style={[
                      PageStyle.listDate,
                      status === "read"
                        ? PageStyle.listDate
                        : PageStyle.readStatus
                    ]}
                  >
                    {date}
                  </Text>
                  <Text
                    style={[
                      PageStyle.listDescription,
                      status === "read"
                        ? PageStyle.listDescription
                        : PageStyle.readStatus
                    ]}
                  >
                    {description}
                  </Text>
                </View>
              </View>
              <View style={PageStyle.listBorder} />
            </ListItem>
          </View>
        );
      }
    );

    return email;
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={PageStyle.container}>
        <Header
          label="INBOX"
          status="loggedin"
          onPress={() => {
            navigation.dispatch(DrawerActions.openDrawer());
          }}
        />
        <Card>{this.renderEmails(this.state.emails)}</Card>
        <TabbedMenu navigation={navigation} status="loggedin" />
      </View>
    );
  }
}

export default InboxPage;
