import { StyleSheet } from "react-native";
import Constants from "../helpers/Constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#22a1e6",
    justifyContent: "center",
    alignItems: "center",
  },
  levelsContainer: {
    width: Constants.maxWidth,
    height: 500,
    flexDirection: "row",
    backgroundColor: "#1f89c2",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopColor: "#333",
    borderBottomColor: "#333",
    borderTopWidth: 1,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
  },
  midSection: {
    justifyContent: "center",
    alignItems: "center",
  },
  levelCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: Constants.maxWidth - 100,
    height: 480,
    backgroundColor: "#22a1e6",
    borderWidth: 1,
    overflow: "hidden",
    borderColor: "#eee",
  },
  levelNameView: {
    flexDirection: "row",
  },
  levelNameText: {
    color: "#cff3ff",
    fontWeight: "700",
    fontSize: 30,
  },
  levelCountText: {
    color: "#333",
    fontSize: 16,
    paddingTop: 9,
    paddingRight: 5,
  },
  imageView: {
    width: Constants.maxWidth - 100,
    height: 480,
    justifyContent: "center",
    backgroundColor: "#333",
    overflow: "hidden",
  },
  levelImage: {
    width: Constants.maxWidth - 100,
    height: 500,
    opacity: 0.6,
  },
  arrows: {
    width: 17,
    height: 34,
    opacity: 0.8,
  },
  characterInfoContainer: {
    width: Constants.maxWidth,
    backgroundColor: "#1f89c2",
    height: 200,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderTopColor: "#333",
    borderBottomColor: "#333",
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  characterCard: {
    width: Constants.maxWidth - 20,
    height: 180,
    backgroundColor: "#22a1e6",
    borderWidth: 1,
    borderColor: "#eee",
  },
  levelDetails: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  userStats: {
    width: (Constants.maxWidth - 20) / 3 - 15,
    height: 120,
    borderWidth: 1,
    borderColor: "#eee",
    marginHorizontal: 10,
  },
  levelRequirements: {
    justifyContent: "space-between",
    alignItems: "center",
    width: Constants.maxWidth - 20,
    height: 80,
    marginVertical: 10,
  },
  topStats: {
    width: (Constants.maxWidth - 20) / 3 - 15,
    height: 120,
    borderWidth: 1,
    borderColor: "#eee",
    marginHorizontal: 10,
  },
  startButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  startButton: {
    borderWidth: 2,
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#40200f",
    borderRadius: 35,
    marginTop: 10,
  },
  start: {
    color: "#f0c97d",
  },

  // mapView: {
  //   flex: 1,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // map: {
  //   position: "absolute",
  //   width: Constants.maxWidth,
  //   zIndex: -100,
  // },
  // textBox: {
  //   marginTop: 30,
  //   height: 250,
  //   flexDirection: "column",
  //   justifyContent: "space-between",
  // },
  // heading: {
  //   fontSize: 24,
  //   fontWeight: "500",
  //   color: "#40200f",
  // },
  // startButton: {
  //   borderWidth: 2,
  //   width: 150,
  //   height: 40,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   backgroundColor: "#40200f",
  //   borderRadius: 35,
  //   marginTop: 10,
  // },
  // start: {
  //   color: "#f0c97d",
  // },
});

export default styles;
