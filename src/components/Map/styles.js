import { Dimensions, Platform } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export default (ComponentStyle = {
  container: {
    height: SCREEN_HEIGHT * 0.4,
    position: "absolute",
    bottom: SCREEN_HEIGHT * 0.17,
    left: 0,
    right: 0,
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});
