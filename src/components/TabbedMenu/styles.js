import { Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export default (ComponentStyle = {
  container: {
    height: SCREEN_HEIGHT / 9,
    width: SCREEN_WIDTH,
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    position: "absolute",
    flex: 0.2,
    bottom: 0,
    zIndex: 1,
    borderRadius: 1.5,
    shadowColor: "#F5F5F5",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3
  }
});
