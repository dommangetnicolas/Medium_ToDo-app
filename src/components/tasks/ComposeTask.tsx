import React, {
  FunctionComponent,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { View, Keyboard } from "react-native";
import styles from "./ComposeTask.style";
import { TextInput, Button } from "../ui";
import ITask from "../../models/ITask";

interface Props {
  tasks: Array<ITask>;
  setTasks: Dispatch<SetStateAction<ITask[]>>;
}

const ComposeTask: FunctionComponent<Props> = (props) => {
  const [title, setTitle] = useState("");

  const { tasks, setTasks } = props;

  const onSubmit = () => {
    Keyboard.dismiss();

    if (!title) return;

    fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    })
      .then((res) => res.json())
      .then((json) => {
        setTasks([json.task, ...tasks]);
        setTitle("");
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Create a new task"
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        returnKeyType="done"
        onSubmitEditing={onSubmit}
      />
      <Button
        style={styles.button}
        textStyle={styles.buttonText}
        onPress={onSubmit}
      >
        ADD
      </Button>
    </View>
  );
};

export default ComposeTask;
