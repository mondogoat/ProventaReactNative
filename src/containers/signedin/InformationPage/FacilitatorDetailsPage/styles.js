import { Dimensions } from "react-native";
import { GRAY, DARK_GRAY } from "../../../../styles/common";
const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export default (PageStyle = {
  container: {
    flex: 1
  },
  profileContainer: {
    padding: SCREEN_WIDTH * 0.08,
    alignItems: "center"
  },
  icon: {
    width: SCREEN_WIDTH * 0.35,
    height: SCREEN_HEIGHT * 0.15,
    resizeMode: "contain"
  },
  name: {
    fontSize: 18,
    color: DARK_GRAY,
    marginTop: SCREEN_HEIGHT * 0.02,
    fontWeight: "600"
  },
  title: {
    fontSize: 15,
    color: GRAY,
    marginTop: SCREEN_HEIGHT * 0.015,
    fontWeight: "600"
  },
  description: {
    alignSelf: 'flex-start',
    fontSize: 15,
    color: DARK_GRAY,
    lineHeight: 25,
    marginTop: SCREEN_HEIGHT * 0.02
  },
  socialContainer: {
    flexDirection: "row",
    marginTop: SCREEN_HEIGHT * 0.02
  },
  socialButton: {
    width: SCREEN_WIDTH / 8,
    height: SCREEN_HEIGHT * 0.05,
    resizeMode: "contain"
  },
  border: {
    borderColor: GRAY,
    borderWidth: SCREEN_HEIGHT * 0.001,
    marginTop: SCREEN_HEIGHT * 0.02,
    width: SCREEN_WIDTH * 0.8,
    alignSelf: "center",
    opacity: 0.2
  }
});
