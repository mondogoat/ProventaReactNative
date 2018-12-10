import { Dimensions } from "react-native";
import { GRAY, DARK_GRAY } from "../../styles/common";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export default (ComponentStyle = {
  container: {
    flex: 1
  },

  ListContainer: {
    width: "95%",
    backgroundColor: "#ffffff",
    alignSelf: "center",
    // borderBottomWidth: 1,
    // borderColor: GRAY,
    // marginLeft: SCREEN_WIDTH * 0.025,
    // marginRight: SCREEN_WIDTH * 0.025,
  },
  scheduleList: {
    width: "95%",
    backgroundColor: "#ffffff",
    margin: SCREEN_WIDTH * 0.025,
    marginBottom: 0,
    // marginRight: SCREEN_WIDTH * 0.025,
    // marginLeft: SCREEN_WIDTH * 0.025,
    paddingBottom: SCREEN_WIDTH * 0.035,
    paddingTop: SCREEN_WIDTH * 0.025,
    // justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    borderColor: GRAY,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 15,
    lineHeight: 25,
    color: DARK_GRAY,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 15,
    lineHeight: 25,
    color: GRAY
  },
  header: {
    fontSize: 20,
    padding: SCREEN_WIDTH * 0.025,
    color: DARK_GRAY,
    fontWeight: "500",
    marginTop: SCREEN_HEIGHT * 0.02,
    paddingBottom: SCREEN_HEIGHT * 0.0175
  },
});
