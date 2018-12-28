import { Dimensions } from "react-native";
import { GRAY, DARK_GRAY } from "../../styles/common";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export default (ComponentStyle = {
  searchSection: {
    flex: 1,
    alignItems: "center"
  },
  label: {
    color: GRAY,
    width: SCREEN_WIDTH * 0.8
  },
  input: {
    width: SCREEN_WIDTH * 0.8,
    height: SCREEN_HEIGHT * 0.0775,
    paddingLeft: SCREEN_WIDTH * 0.05,
    color: DARK_GRAY,
    borderColor: GRAY,
    borderWidth: SCREEN_HEIGHT * 0.001
  }
});
