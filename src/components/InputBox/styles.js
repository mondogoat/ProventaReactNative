import { Dimensions } from "react-native";
import { GRAY, DARK_GRAY } from "../../styles/common";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export default (ComponentStyle = {
  container: {
    alignItems: "center",
    paddingBottom: SCREEN_HEIGHT * 0.015,
    paddingTop: SCREEN_HEIGHT * 0.02
  },
  label: {
    color: DARK_GRAY,
    width: SCREEN_WIDTH * 0.8,
    paddingBottom: SCREEN_HEIGHT * 0.01
  },
  input: {
    width: SCREEN_WIDTH * 0.8,
    height: SCREEN_HEIGHT * 0.06,
    paddingLeft: SCREEN_WIDTH * 0.05,
    color: DARK_GRAY,
    borderColor: GRAY,
    borderWidth: SCREEN_HEIGHT * 0.001,
    paddingBottom: SCREEN_HEIGHT * 0.0005
  }
});
