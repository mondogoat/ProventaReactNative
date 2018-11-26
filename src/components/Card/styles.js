import { Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export default (ComponentStyle = {
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: SCREEN_WIDTH * 0.95,
    borderRadius: 1.5,
    shadowColor: "#F5F5F5",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    backgroundColor: "#ffffff",
    margin: SCREEN_WIDTH * 0.025
  }
});
