import { Dimensions } from "react-native";
import { GRAY, DARK_GRAY } from "../../styles/common";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export default (PageStyle = {
  container: {
    flex: 1
  },
  image: {
    width: "95%",
    height: SCREEN_HEIGHT / 7.5,
    resizeMode: "contain",
    marginTop: SCREEN_HEIGHT * 0.01
  },

  info: {
    padding: SCREEN_WIDTH * 0.018,
    alignItems: "center"
  },
  description: {
    alignSelf: "center",
    fontSize: 20,
    color: DARK_GRAY,
    paddingBottom: SCREEN_HEIGHT * 0.01
  },
  date: {
    fontSize: 15,
    color: GRAY,
    paddingBottom: SCREEN_HEIGHT * 0.01
  },
  area: {
    fontSize: 15,
    color: GRAY,
    paddingBottom: SCREEN_HEIGHT * 0.01
  },
  video: {
    width: "95%",
    height: SCREEN_HEIGHT / 3,
    resizeMode: "contain"
  },
  header: {
    fontSize: 20,
    padding: SCREEN_WIDTH * 0.025,
    color: DARK_GRAY,
    fontWeight: "500",
    marginTop: SCREEN_HEIGHT * 0.02,
    paddingBottom: SCREEN_HEIGHT * 0.0175
  },
  textArea: {
    padding: SCREEN_WIDTH * 0.05
  },
  text: {
    fontSize: 15,
    lineHeight: 25,
    color: DARK_GRAY
  },
  expectationContainer: {
    width: "95%",
    backgroundColor: "#ffffff",
    alignSelf: "center"
  },
  expectationList: {
    backgroundColor: "#ffffff",
    marginRight: SCREEN_WIDTH * 0.025,
    marginLeft: SCREEN_WIDTH * 0.025,
    paddingTop: SCREEN_WIDTH * 0.025,
    justifyContent: "center",
    flexDirection: "row"
  },
  expectationIcon: {
    width: SCREEN_WIDTH * 0.5,
    height: SCREEN_HEIGHT * 0.09,
    marginTop: SCREEN_HEIGHT * 0.03,
    resizeMode: "contain",
    alignSelf: "center"
  },
  expectationTitle: {
    fontSize: 15,
    color: DARK_GRAY,
    paddingTop: SCREEN_HEIGHT * 0.02,
    paddingLeft: SCREEN_WIDTH * 0.02,
    backgroundColor: "#ffffff",
    fontWeight: "600"
  },
  expectationDescription: {
    fontSize: 14,
    color: DARK_GRAY,
    marginTop: SCREEN_HEIGHT * 0.01,
    paddingBottom: SCREEN_HEIGHT * 0.03,
    paddingLeft: SCREEN_WIDTH * 0.02,
    backgroundColor: "#ffffff"
  },
  expectationBorder: {
    borderColor: GRAY,
    borderWidth: SCREEN_HEIGHT * 0.001,
    width: "85%",
    alignSelf: "center",
    opacity: 0.3
  },
  profileIcon: {
    marginTop: SCREEN_HEIGHT * 0.01,
    marginBottom: SCREEN_HEIGHT * 0.03
  },
  mapContainer: {
    paddingBottom: SCREEN_HEIGHT * 0.3
  },
  backgroundImage: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT * 0.3,
  },
  overlapCardContainer: {
    bottom: SCREEN_HEIGHT * 0.125,
  }
});
