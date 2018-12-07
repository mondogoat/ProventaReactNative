import { Dimensions } from "react-native";
import { GRAY, DARK_GRAY } from "../../styles/common";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export default (ComponentStyle = {
  labelStyle: {
    color: "black",
    fontWeight: "900"
  }
});
