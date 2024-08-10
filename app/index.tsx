import { StyleSheet, SafeAreaView, Button } from "react-native";

import { Link } from "expo-router";

export default function IndexScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Link href={"/basic"} asChild>
        <Button title="Basic Usage" />
      </Link>

      <Link href={"/advanced"} asChild>
        <Button title="Advanced Usage" />
      </Link>

      <Link href={"/advanced-toolbar"} asChild>
        <Button title="Advanced Usage with Toolbar" />
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  listStyle: {
    padding: 16,
    gap: 16,
  },
  textInput: {
    width: "95%",
    height: 45,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#d8d8d8",
    backgroundColor: "#fff",
    padding: 8,
    alignSelf: "center",
    marginBottom: 8,
  },
});
