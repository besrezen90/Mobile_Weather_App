import { Dimensions } from "react-native";

const baseFontSize = 16;
const win = Dimensions.get("window");

export const style = {
  container: { flex: 1, alignItems: "center", paddingTop: 30, borderWidth: 3 },
  backdrop: {
    flex: 1,
    alignSelf: "stretch",
    width: win.width,
    height: win.height
  },
  overlay: {
    paddingTop: 5,
    backgroundColor: "#000000",
    opacity: 0.5,
    flexDirection: "column",
    alignItems: "center"
  },
  row: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "flex-start",
    padding: 30
  },
  zipContainer: {
    height: baseFontSize + 10,
    borderBottomColor: "#DDDDDD",
    borderBottomWidth: 1,
    marginLeft: 5,
    marginTop: 3
  },
  zipCode: { flex: 1, flexBasis: 1, width: 50, height: baseFontSize },
  mainText: { fontSize: baseFontSize, color: "#FFFFFF" }
};
