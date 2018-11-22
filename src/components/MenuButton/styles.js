import { Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export default (ComponentStyle = {
  container: {
    height: SCREEN_HEIGHT / 8,
    width: SCREEN_WIDTH / 3,
    padding: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  imageStyle: {
    height: 25,
    width: 25,
    resizeMode: "contain"
  }
});
