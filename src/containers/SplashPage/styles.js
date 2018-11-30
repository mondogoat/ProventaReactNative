import { Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export default (PageStyle = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  splashScreen: {
    width: "100%",
    height: SCREEN_HEIGHT,
    resizeMode: "contain"
  }
});
