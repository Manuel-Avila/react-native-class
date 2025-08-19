import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { useState } from "react";

export default function FirstPage() {
  const [counter, setCounter] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  const increment = () => {
    setCounter((value) => value + 1);
  };

  const handleShow = () => {
    setShowMessage((value) => !value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi primera app con React Native</Text>
      <Text style={styles.text}>{counter}</Text>
      <Button title="Incrementar" onPress={increment} />
      <Button title="Mostrar mensaje" onPress={handleShow} />
      {showMessage && (
        <Text style={styles.hiddenMessage}>Hola React Native</Text>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333131ff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    textAlign: "center",
    fontSize: 30,
    marginBottom: 10,
  },
  text: {
    color: "#fff",
    fontSize: 50,
  },
  hiddenMessage: {
    color: "#fff",
    fontSize: 20,
    marginTop: 20,
    textAlign: "center",
  },
});
