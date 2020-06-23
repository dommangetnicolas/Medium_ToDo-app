import React, { FunctionComponent, Dispatch, SetStateAction } from "react";
import { View, TouchableOpacity, Alert } from "react-native";
import { Text } from "../ui";
import styles from "./Task.style";
import ITask from "../../models/ITask";

interface Props {
  item: ITask;
  tasks: Array<ITask>;
  setTasks: Dispatch<SetStateAction<ITask[]>>;
}

const Task: FunctionComponent<Props> = (props) => {
  const {
    item,
    item: { id, title, done, createdAt },
    tasks,
    setTasks,
  } = props;

  const onDone = () => {
    let newTasks = [...tasks];
    const taskIdx = newTasks.findIndex((item) => item.id === id);

    if (taskIdx === -1) return;

    fetch(`http://localhost:3000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ done: !done }),
    }).then(() => {
      newTasks[taskIdx].done = !done;
      setTasks(newTasks);
    });
  };

  const onDelete = () => {
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      let newTasks = [...tasks].filter((item) => item.id !== id);

      setTasks(newTasks);
    });
  };

  const onPress = () => {
    Alert.alert(
      title.toString(),
      undefined,
      [
        {
          text: "Done",
          style: "default",
          onPress: onDone,
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: onDelete,
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.texts}>
        {done && <View style={styles.done} />}
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{createdAt.toString()}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Task;
