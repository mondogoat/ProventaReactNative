import { Dimensions } from "react-native";
import { GRAY, DARK_GRAY, BLUE } from "../../styles/common";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export default (PageStyle = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  socialButton: {
    width: "68%",
    height: SCREEN_HEIGHT * 0.08,
    marginTop: SCREEN_HEIGHT * 0.025,
    marginLeft: SCREEN_WIDTH * 0.02,
    marginRight: SCREEN_WIDTH * 0.02,
    flexDirection: "row",
    alignSelf: "center",
    borderColor: GRAY,
    borderWidth: SCREEN_HEIGHT * 0.001
  },
  linkedIn: {
    backgroundColor: "#0077B5"
  },
  google: {
    backgroundColor: "#ffffff"
  },
  linkedInText: {
    color: "#ffffff"
  },
  googleText: {
    color: DARK_GRAY
  },
  socialButtonIcon: {
    alignSelf: "center",
    marginTop: SCREEN_HEIGHT * 0.015
  },
  socialButtonLabel: {
    fontSize: 15,
    color: "#ffffff",
    alignSelf: "center",
    marginTop: SCREEN_HEIGHT * 0.025
  }
});
