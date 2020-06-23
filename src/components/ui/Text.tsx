import React, { FunctionComponent } from "react";
import { Text, TextProps } from "react-native";
import styles from "./Text.style";

const CustomText: FunctionComponent<TextProps> = (props) => {
  const { children, style } = props;

  return (
    <Text {...props} style={[styles.text, style]}>
      {children}
    </Text>
  );
};

export default CustomText;
