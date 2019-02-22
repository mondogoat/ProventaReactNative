import { Dimensions } from "react-native";
import { GRAY, DARK_GRAY } from "../../styles/common";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export default (ComponentStyle = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  leftIcon: {
    flex: 1,
    borderColor: GRAY,
    borderWidth: 1
  },
  rightIcon: {
    flex: 1,
    borderColor: GRAY,
    borderWidth: 1,
    borderLeftWidth: 0
  },
  centerBorder: {
    flex: 3,
    borderColor: GRAY,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0
  },
  icon: {
    alignSelf: "center",
    height: SCREEN_HEIGHT * 0.0775,
    resizeMode: "contain"
  },
  searchSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    margin: SCREEN_WIDTH * 0.027
  },
  input: {
    flex: 1,
    height: SCREEN_HEIGHT * 0.0775,
    paddingLeft: SCREEN_WIDTH * 0.05,
    borderColor: "transparent",
    borderWidth: SCREEN_HEIGHT * 0.001
  }
});
