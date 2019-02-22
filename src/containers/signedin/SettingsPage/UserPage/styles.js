import { Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export default (PageStyle = {
  container: {
    flex: 1
  },
  inputContainer: {
    paddingBottom: SCREEN_HEIGHT * 0.1
  }
});
