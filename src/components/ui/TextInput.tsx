import React, { FunctionComponent } from "react";
import { TextInput, TextInputProps } from "react-native";
import styles from "./TextInput.style";

interface Props extends TextInputProps {
  isInvalid?: boolean;
}

const CustomTextInput: FunctionComponent<Props> = (props) => {
  const { style, isInvalid } = props;

  return (
    <TextInput
      placeholderTextColor="#ccc"
      {...props}
      style={[
        { ...styles.textInput, ...(isInvalid && styles.textInputInvalid) },
        style,
      ]}
    />
  );
};

export default CustomTextInput;
