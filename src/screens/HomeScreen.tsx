import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import ComposeTask from "../components/tasks/ComposeTask";
import Task from "../components/tasks/Task";
import styles from "./HomeScreen.style";
import ITask from "../models/ITask";

const HomeScreen = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/tasks")
      .then((res) => res.json())
      .then((json) => setTasks(json.tasks));
  }, []);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <ComposeTask tasks={tasks} setTasks={setTasks} />

        <FlatList
          style={styles.tasks}
          data={tasks}
          renderItem={Task}
          keyExtractor={(item: ITask) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
