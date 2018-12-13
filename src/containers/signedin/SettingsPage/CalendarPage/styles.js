import { Dimensions } from "react-native";
import { GRAY, DARK_GRAY } from "../../../../styles/common";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export default (PageStyle = {
  container: {
    flex: 1
  },
  menuContainer: {
    width: "100%",
    backgroundColor: "#ffffff",
    alignSelf: "center"
  },
  menuList: {
    backgroundColor: "#ffffff",
    marginRight: SCREEN_WIDTH * 0.025,
    // marginLeft: SCREEN_WIDTH * 0.01,
    paddingTop: SCREEN_HEIGHT * 0.025,
    paddingBottom: SCREEN_HEIGHT * 0.025,
    justifyContent: "center",
    flexDirection: "row"
  },
  menuIcon: {
    tintColor: GRAY,
    width: SCREEN_WIDTH * 0.5,
    height: SCREEN_HEIGHT * 0.03,
    resizeMode: "contain",
    alignSelf: "center"
  },
  menuTitle: {
    fontSize: 15,
    color: DARK_GRAY,
    paddingLeft: SCREEN_WIDTH * 0.01,
    backgroundColor: "#ffffff",
    fontWeight: "600"
  },
  menuBorder: {
    borderColor: GRAY,
    borderWidth: SCREEN_HEIGHT * 0.001,
    width: "90%",
    alignSelf: "center",
    opacity: 0.2
  }
});
