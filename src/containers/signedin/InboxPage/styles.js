import { Dimensions } from "react-native";
import { GRAY, DARK_GRAY, BLUE } from "../../../styles/common";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export default (PageStyle = {
  container: {
    flex: 1
  },
  list: {
    backgroundColor: "#ffffff",
    marginRight: SCREEN_WIDTH * 0.025,
    paddingTop: SCREEN_HEIGHT * 0.01,
    paddingBottom: SCREEN_HEIGHT * 0.01,
    justifyContent: "center",
    flexDirection: "row"
  },
  listStatus: {
    alignSelf: "center",
    width: SCREEN_WIDTH * 0.025,
    height: SCREEN_HEIGHT * 0.01,
    borderRadius: 30,
    backgroundColor: BLUE,
    marginTop: SCREEN_HEIGHT * 0.008
  },
  listTitle: {
    fontSize: 18,
    color: DARK_GRAY,
    paddingLeft: SCREEN_WIDTH * 0.01,
    backgroundColor: "#ffffff",
    paddingBottom: SCREEN_HEIGHT * 0.01
  },
  readStatus: {
    fontWeight: "600"
  },
  listDescription: {
    fontSize: 15,
    color: GRAY,
    paddingLeft: SCREEN_WIDTH * 0.01,
    backgroundColor: "#ffffff"
  },
  listDate: {
    fontSize: 12,
    color: GRAY,
    paddingLeft: SCREEN_WIDTH * 0.05,
    backgroundColor: "#ffffff",
    position: "absolute",
    right: 0
  },
  listBorder: {
    borderColor: GRAY,
    borderWidth: SCREEN_HEIGHT * 0.001,
    marginTop: SCREEN_HEIGHT * 0.02,
    width: "90%",
    alignSelf: "center",
    opacity: 0.2
  }
});
