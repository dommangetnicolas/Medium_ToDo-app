import React, { FunctionComponent } from "react";
import {
  ActivityIndicator, StyleProp,
  TextStyle, TouchableOpacity,
  TouchableOpacityProps
} from "react-native";
import colors from "../../constants/colors";
import styles from "./Button.style";
import Text from "./Text";

interface Props extends TouchableOpacityProps {
  textStyle?: StyleProp<TextStyle>;
  isPending?: boolean;
}

const Button: FunctionComponent<Props> = (props) => {
  const { children, style, textStyle, isPending } = props;

  return (
    <TouchableOpacity {...props} style={[styles.button, style]}>
      {!isPending ? (
        <Text style={[styles.text, textStyle]}>{children}</Text>
      ) : (
        <ActivityIndicator color={colors.white} />
      )}
    </TouchableOpacity>
  );
};

export default Button;
