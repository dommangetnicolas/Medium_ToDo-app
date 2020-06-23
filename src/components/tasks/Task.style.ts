import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 13,
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: colors.white,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  texts: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  done: {
    alignSelf: "center",
    marginRight: 10,
    height: 15,
    width: 15,
    borderRadius: 15,
    backgroundColor: colors.success,
  },
  title: {
    fontWeight: "bold",
  },
  date: {
    marginLeft: 3,
    opacity: 0.6,
    fontSize: 10,
  },
});
