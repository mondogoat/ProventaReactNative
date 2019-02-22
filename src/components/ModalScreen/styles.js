import { Dimensions, Platform } from "react-native";
import { GRAY, DARK_GRAY } from "../../styles/common";
const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export default (ComponentStyle = {
  container: {
    backgroundColor: "#FFFFFF",
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_HEIGHT * 0.8,
    marginTop: SCREEN_HEIGHT * 0.12,
    justifyContent: "center",
    alignSelf: "center",
    position: "absolute"
  },
  closeButton: {
    marginTop: SCREEN_HEIGHT * 0.01,
    marginRight: SCREEN_WIDTH * 0.01,
    alignSelf: "flex-end"
  },
  facilitatorContainer: {
    width: "95%",
    backgroundColor: "#ffffff",
    alignSelf: "center"
  },
  facilitatorList: {
    backgroundColor: "#ffffff",
    marginRight: SCREEN_WIDTH * 0.025,
    marginLeft: SCREEN_WIDTH * 0.025,
    paddingTop: SCREEN_WIDTH * 0.025,
    justifyContent: "center",
    flexDirection: "row"
  },
  facilitatorIcon: {
    width: SCREEN_WIDTH * 0.5,
    height: SCREEN_HEIGHT * 0.09,
    resizeMode: "contain",
    alignSelf: "center"
  },
  facilitatorTitle: {
    fontSize: 15,
    color: DARK_GRAY,
    paddingTop: SCREEN_HEIGHT * 0.02,
    paddingLeft: SCREEN_WIDTH * 0.02,
    backgroundColor: "#ffffff",
    fontWeight: "600"
  },
  facilitatorDescription: {
    fontSize: 14,
    color: DARK_GRAY,
    marginTop: SCREEN_HEIGHT * 0.01,
    paddingBottom: SCREEN_HEIGHT * 0.03,
    paddingLeft: SCREEN_WIDTH * 0.02,
    marginBottom: SCREEN_HEIGHT * 0.03,
    backgroundColor: "#ffffff"
  },
  facilitatorBorder: {
    borderColor: GRAY,
    borderWidth: SCREEN_HEIGHT * 0.001,
    width: "85%",
    alignSelf: "center",
    opacity: 0.3
  },
  description: {
    alignSelf: 'flex-start',
    marginLeft: SCREEN_WIDTH * 0.02,
    marginRight: SCREEN_WIDTH * 0.02,
    marginTop: SCREEN_HEIGHT * 0.03,
    marginBottom: SCREEN_HEIGHT * 0.03,
    fontSize: 15,
    lineHeight: 25,
    color: DARK_GRAY
  }
});
