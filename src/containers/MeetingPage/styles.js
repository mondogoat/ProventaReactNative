import { Dimensions } from "react-native";
import { GRAY, DARK_GRAY } from "../../styles/common";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export default (PageStyle = {
  container: {
    flex: 1
  },
  image: {
    width: "95%",
    height: SCREEN_HEIGHT / 7.5,
    resizeMode: "contain",
    marginTop: SCREEN_HEIGHT * 0.01
  },

  info: {
    padding: SCREEN_WIDTH * 0.018,
    alignItems: "center"
  },
  description: {
    alignSelf: "center",
    fontSize: 20,
    color: DARK_GRAY,
    paddingBottom: SCREEN_HEIGHT * 0.01
  },
  date: {
    fontSize: 15,
    color: GRAY,
    paddingBottom: SCREEN_HEIGHT * 0.01
  },
  area: {
    fontSize: 15,
    color: GRAY,
    paddingBottom: SCREEN_HEIGHT * 0.01
  },
  video: {
    width: "95%",
    height: SCREEN_HEIGHT / 3,
    resizeMode: "contain"
  },
  header: {
    fontSize: 20,
    padding: SCREEN_WIDTH * 0.025,
    color: DARK_GRAY,
    fontWeight: "500",
    paddingBottom: SCREEN_HEIGHT * 0.01
  },
  textArea: {
    padding: SCREEN_WIDTH * 0.05
  },
  text: {
    fontSize: 15,
    lineHeight: 25,
    color: DARK_GRAY
  }
  //   expandButton: {
  //     padding: SCREEN_WIDTH * 0.025,
  //     paddingTop: SCREEN_HEIGHT * 0.035,
  //     paddingBottom: SCREEN_HEIGHT * 0.035,
  //     width: "100%",
  //     backgroundColor: "#ffffff",
  //     alignItems: "center",
  //     flex: 1
  //   },
  //   eventContainer: {
  //     backgroundColor: "#ffffff"
  //   },
  //   eventList: {
  //     padding: SCREEN_WIDTH * 0.025,
  //     width: "100%",
  //     alignItems: "flex-start"
  //   },
  //   eventTitle: {
  //     width: SCREEN_WIDTH * 0.95,
  //     height: SCREEN_HEIGHT * 0.07,
  //     resizeMode: "contain"
  //   },
  //   eventDescription: {
  //     fontSize: 15,
  //     color: DARK_GRAY,
  //     paddingTop: SCREEN_HEIGHT * 0.01,
  //     paddingLeft: SCREEN_WIDTH * 0.02,
  //     backgroundColor: "#ffffff"
  //   },
  //   eventDate: {
  //     fontSize: 15,
  //     color: DARK_GRAY,
  //     paddingBottom: SCREEN_HEIGHT * 0.03,
  //     paddingLeft: SCREEN_WIDTH * 0.02,
  //     backgroundColor: "#ffffff"
  //   },
  //   eventBorder: {
  //     borderColor: GRAY,
  //     borderWidth: SCREEN_HEIGHT * 0.001,
  //     width: "95%",
  //     alignSelf: "center",
  //     opacity: 0.3
  //   }
});
