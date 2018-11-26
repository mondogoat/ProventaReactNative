import { Dimensions } from "react-native";
import { GRAY, DARK_GRAY } from "../../styles/common";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export default (PageStyle = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  eventContainer: {
    backgroundColor: "#ffffff"
  },
  eventList: {
    // padding: SCREEN_WIDTH * 0.025,
    width: "100%",
    alignItems: "flex-start"
  },
  eventTitle: {
    width: SCREEN_WIDTH * 0.95,
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
  }
});
