import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export default StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 5,
    backgroundColor: colors.primary,
    color: "#000",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    alignSelf: "flex-start",
  },
  text: {
    color: colors.white,
    fontSize: 14,
  },
});
