import { Dimensions } from "react-native";
import { GRAY, DARK_GRAY } from "../../styles/common";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export default (PageStyle = {
  container: {
    flex: 1,
    alignItems: "center"
  },
  image: {
    width: "95%",
    height: SCREEN_HEIGHT / 3.5,
    resizeMode: "stretch",
    marginTop: SCREEN_HEIGHT * 0.01
  },
  info: {
    padding: SCREEN_WIDTH * 0.025,
    paddingTop: SCREEN_HEIGHT * 0.01
  },
  description: {
    alignSelf: "flex-start",
    fontSize: 15,
    color: DARK_GRAY,
    paddingBottom: SCREEN_HEIGHT * 0.01
  },
  date: {
    alignSelf: "flex-start",
    fontSize: 12,
    color: GRAY,
    paddingBottom: SCREEN_HEIGHT * 0.01
  }
});
