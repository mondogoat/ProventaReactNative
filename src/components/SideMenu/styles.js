import { Dimensions } from "react-native";
import { GRAY, DARK_GRAY, BLUE } from "../../styles/common";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export default (ComponentStyle = {
  container: {
    flex: 1,
    padding: SCREEN_WIDTH * 0.025
  },
  title: {
    paddingTop: SCREEN_HEIGHT * 0.05,
    fontSize: 15,
    color: DARK_GRAY,
    fontWeight: "500",
    paddingBottom: SCREEN_HEIGHT * 0.01
  },
  placeholder: {
    paddingTop: SCREEN_HEIGHT * 0.25,
    width: SCREEN_WIDTH * 0.18,
    height: SCREEN_HEIGHT * 0.075,
    resizeMode: "contain",
    opacity: 0.8
  },
  instructions: {
    textAlign: "center",
    color: GRAY,
    paddingTop: SCREEN_HEIGHT * 0.01,
    paddingBottom: SCREEN_HEIGHT * 0.05,
    paddingLeft: SCREEN_WIDTH * 0.1,
    paddingRight: SCREEN_WIDTH * 0.1
  },
  eventList: {
    padding: SCREEN_WIDTH * 0.025,
    width: "100%",
    alignItems: "flex-start"
  },
  eventTitle: {
    width: SCREEN_WIDTH * 0.72,
    height: SCREEN_HEIGHT * 0.07,
    resizeMode: "contain"
  },
  eventDescription: {
    fontSize: 15,
    color: DARK_GRAY,
    paddingTop: SCREEN_HEIGHT * 0.01,
    paddingLeft: SCREEN_WIDTH * 0.02,
    backgroundColor: "#ffffff"
  },
  eventDate: {
    fontSize: 15,
    color: DARK_GRAY,
    paddingBottom: SCREEN_HEIGHT * 0.03,
    paddingLeft: SCREEN_WIDTH * 0.02,
    backgroundColor: "#ffffff"
  },
  eventBorder: {
    borderColor: GRAY,
    borderWidth: SCREEN_HEIGHT * 0.001,
    width: "95%",
    alignSelf: "center",
    opacity: 0.3
  },
  link: {
    color: BLUE,
    fontSize: 15,
    fontWeight: "500"
  }
});
