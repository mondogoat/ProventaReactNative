import { Dimensions } from "react-native";
import { GRAY, DARK_GRAY, BLUE } from "../../../../styles/common";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export default (PageStyle = {
  container: {
    flex: 1
  },
  emailContainer: {
    padding: SCREEN_WIDTH * 0.08
  },
  date: {
    fontSize: 12,
    color: GRAY,
    paddingBottom: SCREEN_HEIGHT * 0.015
  },
  title: {
    fontSize: 25,
    fontWeight: "600",
    color: DARK_GRAY,
    paddingBottom: SCREEN_HEIGHT * 0.015
  },
  body: {
    fontSize: 15,
    lineHeight: 25,
    color: DARK_GRAY
  },
  border: {
    borderColor: GRAY,
    borderWidth: SCREEN_HEIGHT * 0.001,
    marginBottom: SCREEN_HEIGHT * 0.02,
    width: SCREEN_WIDTH * 0.8,
    alignSelf: "center",
    opacity: 0.2
  }
});
