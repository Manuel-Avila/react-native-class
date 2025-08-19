import { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Task from "../components/Task";

export default function ListPage() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Tarea React Native" },
    { id: 2, title: "Hacer un contador" },
  ]);

  const [newTask, setNewTask] = useState("");

  const handleInputChange = (text) => {
    setNewTask(text);
  };

  const addTask = () => {
    const newTaskTitle = newTask.trim();
    if (newTaskTitle === "") return;
    const newTaskObject = {
      id: Date.now(),
      title: newTaskTitle,
    };

    setTasks([...tasks, newTaskObject]);
    setNewTask("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tareas</Text>
      <TextInput
        style={styles.addInput}
        placeholder="Tarea"
        value={newTask}
        onChangeText={handleInputChange}
      />
      <TouchableOpacity onPress={addTask} style={styles.addButton}>
        <Text style={styles.addButtonText}>Añadir Tarea</Text>
      </TouchableOpacity>
      <View style={styles.tasksContainer}>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#333131ff",
    flex: 1,
    alignItems: "center",
    paddingTop: 60,
  },
  title: {
    color: "#fff",
    fontSize: 30,
  },
  addInput: {
    backgroundColor: "#fff",
    width: "80%",
    padding: 10,
    borderRadius: 5,
    marginVertical: 20,
    borderRadius: 15,
  },
  addButton: {
    backgroundColor: "#da4545ff",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    width: "50%",
    alignItems: "center",
    borderRadius: 15,
  },
  addButtonText: {
    color: "#fff",
  },
  tasksContainer: {
    marginTop: 30,
    width: "80%",
    alignItems: "center",
    gap: 20,
  },
});
