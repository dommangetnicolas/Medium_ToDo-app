import React, { FunctionComponent } from "react";
import { View } from "react-native";
import { Text } from "../ui";
import styles from "./Task.style";
import ITask from "../../models/ITask";

interface Props {
  item: ITask;
}

const Task: FunctionComponent<Props> = (props) => {
  const {
    item: { title },
  } = props;

  return (
    <View style={styles.container}>
      <View style={styles.texts}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>10/06</Text>
      </View>
    </View>
  );
};

export default Task;
