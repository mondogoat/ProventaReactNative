import { Dimensions } from "react-native";
import { GRAY, DARK_GRAY, DARK_BLUE } from "../../../../styles/common";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export default (PageStyle = {
  container: {
    flex: 1
  },
  mapImage: {
    width: SCREEN_WIDTH * 0.95,
    height: SCREEN_HEIGHT * 0.6,
    resizeMode: "contain"
  },
  header: {
    fontSize: 20,
    padding: SCREEN_WIDTH * 0.025,
    color: DARK_GRAY,
    fontWeight: "500",
    marginTop: SCREEN_HEIGHT * 0.02,
    paddingBottom: SCREEN_HEIGHT * 0.0175
  },
  locationContainerStyle: {
    width: "90%",
    backgroundColor: "#ffffff",
    marginRight: SCREEN_WIDTH * 0.05,
    marginLeft: SCREEN_WIDTH * 0.05,
    // marginLeft: SCREEN_WIDTH * 0.01,
    paddingTop: SCREEN_HEIGHT * 0.03,
    paddingBottom: SCREEN_HEIGHT * 0.03,
    justifyContent: "space-between",
    flexDirection: "row",
    borderColor: GRAY,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 15,
    color: DARK_GRAY,
    fontWeight: "600"
  },
  text: {
    color: GRAY
  },
  locationIconStyle: {
    tintColor: DARK_BLUE,
    // width: SCREEN_WIDTH * 0.5,
    height: SCREEN_HEIGHT * 0.025,
    resizeMode: "contain",
  },
  linkedInButton: {
    width: SCREEN_WIDTH * 0.2,
    height: SCREEN_HEIGHT * 0.04,
    resizeMode: "contain",
    // alignSelf: "center"
  },
  detailsContainer: {
    width:"90%",
    backgroundColor: "#ffffff",
    marginRight: SCREEN_WIDTH * 0.05,
    marginLeft: SCREEN_WIDTH * 0.05,
    // marginLeft: SCREEN_WIDTH * 0.01,
    paddingTop: SCREEN_HEIGHT * 0.03,
    paddingBottom: SCREEN_HEIGHT * 0.03,
    borderColor: GRAY,
    borderBottomWidth: 1,
  },
  listContainer: {
    width:"95%"
  },
  speakerContainer: {
    width:"95%",
    flexDirection: "row",
    marginRight: SCREEN_WIDTH * 0.02,
    marginLeft: SCREEN_WIDTH * 0.02,
    paddingTop: SCREEN_HEIGHT * 0.03,
    paddingBottom: SCREEN_HEIGHT * 0.03,
    justifyContent:"space-between",
  }
});
