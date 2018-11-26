import { Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export default (ComponentStyle = {
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: SCREEN_WIDTH * 0.9,
    borderRadius: 30,
    shadowColor: "#F5F5F5",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    backgroundColor: "#ffffff"
    //flex: 1
  }
});
