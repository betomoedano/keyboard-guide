import { StyleSheet, TextInput, View } from "react-native";
import {
  KeyboardAwareScrollView,
  KeyboardToolbar,
} from "react-native-keyboard-controller";

export default function AdvancedToolbar() {
  return (
    <>
      <KeyboardAwareScrollView
        bottomOffset={62}
        contentContainerStyle={styles.container}
        style={{ flex: 1, marginBottom: 62 }}
      >
        <View style={{ flexDirection: "row", gap: 16 }}>
          <TextInput placeholder="Type a message..." style={styles.textInput} />
          <TextInput placeholder="Type a message..." style={styles.textInput} />
        </View>
        <TextInput placeholder="Type a message..." style={styles.textInput} />
        <View style={{ flexDirection: "row", gap: 16 }}>
          <TextInput placeholder="Type a message..." style={styles.textInput} />
          <TextInput placeholder="Type a message..." style={styles.textInput} />
          <TextInput placeholder="Type a message..." style={styles.textInput} />
        </View>
        <TextInput placeholder="Type a message..." style={styles.textInput} />
        <TextInput placeholder="Type a message..." style={styles.textInput} />
        <TextInput placeholder="Type a message..." style={styles.textInput} />
        <TextInput placeholder="Type a message..." style={styles.textInput} />
        <TextInput placeholder="Type a message..." style={styles.textInput} />
        <TextInput placeholder="Type a message..." style={styles.textInput} />
        <TextInput placeholder="Type a message..." style={styles.textInput} />
        <TextInput placeholder="Type a message..." style={styles.textInput} />
        <TextInput placeholder="Type a message..." style={styles.textInput} />
        <TextInput placeholder="Type a message..." style={styles.textInput} />
        <TextInput placeholder="Type a message..." style={styles.textInput} />
        <TextInput placeholder="Type a message..." style={styles.textInput} />
        <TextInput placeholder="Type a message..." style={styles.textInput} />
      </KeyboardAwareScrollView>
      <KeyboardToolbar />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
    padding: 16,
  },
  listStyle: {
    padding: 16,
    gap: 16,
  },
  textInput: {
    width: "auto",
    flexGrow: 1,
    flexShrink: 1,
    height: 45,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#d8d8d8",
    backgroundColor: "#fff",
    padding: 8,
    marginBottom: 8,
  },
});
