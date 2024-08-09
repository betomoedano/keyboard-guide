import {
  StyleSheet,
  Platform,
  FlatList,
  SafeAreaView,
  StatusBar,
  TextInput,
} from "react-native";

import { messages } from "@/messages";
import MessageItem from "@/components/MessageItem";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => <MessageItem message={item} />}
        keyExtractor={(item) => item.createdAt.toString()}
        contentContainerStyle={styles.listStyle}
      />
      <TextInput placeholder="Type a message..." style={styles.textInput} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
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
