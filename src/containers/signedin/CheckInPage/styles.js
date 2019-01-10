import { Dimensions } from "react-native";
import { DARK_GRAY } from "../../../styles/common";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export default (PageStyle = {
  container: {
    flex: 1
  },
  text: {
    fontSize: 18,
    color: DARK_GRAY
  }
});
