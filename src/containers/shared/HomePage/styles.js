import { Dimensions } from "react-native";
import { GRAY, DARK_GRAY } from "../../../styles/common";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export default (PageStyle = {
  container: {
    flex: 1
  },
  region: {
    fontSize: 20,
    color: DARK_GRAY,
    fontWeight: "500",
    paddingBottom: SCREEN_HEIGHT * 0.01
  },
  image: {
    width: "95%",
    height: SCREEN_HEIGHT / 3.5,
    resizeMode: "stretch",
    marginTop: SCREEN_HEIGHT * 0.01
  },
  info: {
    padding: SCREEN_WIDTH * 0.025,
    paddingTop: SCREEN_HEIGHT * 0.01
  },
  description: {
    alignSelf: "flex-start",
    fontSize: 15,
    color: DARK_GRAY,
    paddingBottom: SCREEN_HEIGHT * 0.01
  },
  date: {
    alignSelf: "flex-start",
    fontSize: 12,
    color: GRAY,
    paddingBottom: SCREEN_HEIGHT * 0.01
  },
  expandButton: {
    padding: SCREEN_WIDTH * 0.025,
    paddingTop: SCREEN_HEIGHT * 0.035,
    paddingBottom: SCREEN_HEIGHT * 0.035,
    width: "100%",
    backgroundColor: "#ffffff",
    alignItems: "center",
    flex: 1
  },
  eventContainer: {
    backgroundColor: "#ffffff"
  },
  eventList: {
    padding: SCREEN_WIDTH * 0.025,
    width: SCREEN_WIDTH * 0.7,
    alignItems: "flex-start",
  },
  eventTitle: {
    marginTop: SCREEN_HEIGHT * 0.02,
    width: SCREEN_WIDTH * 0.85,
    height: SCREEN_HEIGHT * 0.07,
    resizeMode: "stretch"
  },
  eventDescription: {
    fontSize: 15,
    color: DARK_GRAY,
    paddingTop: SCREEN_HEIGHT * 0.01,
    paddingLeft: SCREEN_WIDTH * 0.02,
    backgroundColor: "#ffffff",
    alignSelf: 'flex-start'
  },
  eventDate: {
    fontSize: 15,
    color: DARK_GRAY,
    paddingBottom: SCREEN_HEIGHT * 0.03,
    paddingLeft: SCREEN_WIDTH * 0.02,
    backgroundColor: "#ffffff",
    alignSelf: 'flex-start'
  },
  eventBorder: {
    borderColor: GRAY,
    borderWidth: SCREEN_HEIGHT * 0.001,
    width: "95%",
    alignSelf: "center",
    opacity: 0.3
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  meetingsContainer: {
    marginBottom: SCREEN_HEIGHT * 0.15
  }
});
