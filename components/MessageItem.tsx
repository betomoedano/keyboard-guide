import { BetoPhoto, KeithPhoto, Message } from "@/messages";
import {
  Image,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

export default function MessageItem({ message }: { message: Message }) {
  const photoSrc = message.author === "Keith" ? KeithPhoto : BetoPhoto;
  const author = message.author === "Keith" ? "Keith" : "Beto";

  const containerStyle: ViewStyle = {
    gap: 8,
    maxWidth: "80%",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: message.author === "Keith" ? "flex-start" : "flex-end",
  };

  const messageContainerStyle: ViewStyle = {
    backgroundColor: message.author === "Keith" ? "#218aff" : "#d8d8d8",
  };

  const textStyle: TextStyle = {
    color: message.author === "Keith" ? "#fff" : "#000",
  };

  return (
    <View style={containerStyle}>
      {author === "Keith" && (
        <View>
          <Image source={{ uri: photoSrc }} style={styles.photo} />
          <Text>{author}</Text>
        </View>
      )}
      <View
        style={StyleSheet.compose(
          styles.messageContainer,
          messageContainerStyle
        )}
      >
        {message.image && (
          <Image
            source={{ uri: message.image }}
            style={{
              width: "auto",
              height: 200,
              borderRadius: 8,
              marginBottom: 8,
            }}
          />
        )}
        <Text style={textStyle}>{message.message}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  messageContainer: {
    borderRadius: 8,
    padding: 8,
  },
  photo: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
