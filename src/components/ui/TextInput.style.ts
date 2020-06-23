import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export default StyleSheet.create({
  textInput: {
    paddingVertical: 9,
    paddingHorizontal: 13,
    borderRadius: 5,
    borderColor: colors.white,
    borderWidth: 1,
    backgroundColor: "#fff",
    color: "#000",

    fontSize: 14,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  textInputInvalid: {
    borderColor: colors.danger,
    borderWidth: 1,
  },
});
