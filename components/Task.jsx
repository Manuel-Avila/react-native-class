import { Text, View, StyleSheet } from "react-native";

export default function Task({ task }) {
  return (
    <View style={styles.task}>
      <Text>{task.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  task: {
    width: "90%",
    backgroundColor: "#ffffffff",
    padding: 10,
    borderRadius: 10,
  },
});
