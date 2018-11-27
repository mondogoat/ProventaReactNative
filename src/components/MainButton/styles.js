import { Dimensions } from "react-native";
import { BLUE } from "../../styles/common";
const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export default (ComponentStyle = {
  container: {
    flex: 1,
    alignItems: "center",
    shadowColor: "#F5F5F5",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    backgroundColor: "#ffffff",
    margin: SCREEN_WIDTH * 0.025
  },
  button: {
    backgroundColor: BLUE,
    height: SCREEN_HEIGHT * 0.0775,
    width: SCREEN_WIDTH * 0.9,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 15,
    color: "#ffffff"
  }
});
