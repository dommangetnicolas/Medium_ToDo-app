import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  input: {
    flex: 1,
    marginRight: 15,
  },
  button: {
    backgroundColor: colors.success,
  },
  buttonText: {
    fontWeight: "bold",
  },
});
