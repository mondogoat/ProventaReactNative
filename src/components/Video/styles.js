import { Dimensions } from "react-native";
import { GRAY, DARK_GRAY } from "../../styles/common";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export default (ComponentStyle = {
  WebViewContainer: {
    margin: SCREEN_WIDTH * 0.025,
    height: SCREEN_HEIGHT / 3.1,
    width: SCREEN_WIDTH * 0.91
  }
});
