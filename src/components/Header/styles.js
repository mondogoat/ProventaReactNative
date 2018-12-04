import { Dimensions, Platform } from "react-native";
import { DARK_GRAY } from "../../styles/common";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export default (ComponentStyle = {
  container: {
    height: SCREEN_HEIGHT / 12,
    width: SCREEN_WIDTH,
    padding: 10,
    marginTop:
      Platform.OS === "ios" ? SCREEN_HEIGHT * 0.03 : SCREEN_HEIGHT * 0.003,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff"
  },
  buttonStyle: {
    marginTop: -5,
    resizeMode: "contain",
    justifyContent: "center"
  },
  title: {
    fontSize: 15,
    color: DARK_GRAY,
    fontWeight: "600"
  }
});
