import { Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export default (ComponentStyle = {
  container: {
    height: SCREEN_HEIGHT / 12,
    width: SCREEN_WIDTH,
    padding: 10,
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  buttonStyle: {
    marginTop: -5,
    resizeMode: "contain",
    justifyContent: "center"
  }
});
