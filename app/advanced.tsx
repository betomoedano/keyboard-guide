import MessageItem from "@/components/MessageItem";
import { messages } from "@/messages";
import {
  StyleSheet,
  Platform,
  FlatList,
  View,
  StatusBar,
  TextInput,
} from "react-native";
import { useKeyboardHandler } from "react-native-keyboard-controller";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

const PADDING_BOTTOM = 20;

const useGradualAnimation = () => {
  const height = useSharedValue(PADDING_BOTTOM);

  useKeyboardHandler(
    {
      onMove: (e) => {
        "worklet";
        // set height to min 10
        height.value = Math.max(e.height, PADDING_BOTTOM);
      },
      onEnd: (e) => {
        "worklet";
        height.value = e.height;
      },
    },
    []
  );
  return { height };
};

export default function TabTwoScreen() {
  const { height } = useGradualAnimation();

  const fakeView = useAnimatedStyle(() => {
    return {
      height: Math.abs(height.value),
      marginBottom: height.value > 0 ? 0 : PADDING_BOTTOM,
    };
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => <MessageItem message={item} />}
        keyExtractor={(item) => item.createdAt.toString()}
        contentContainerStyle={styles.listStyle}
        keyboardDismissMode="on-drag"
        inverted
      />
      <TextInput placeholder="Type a message..." style={styles.textInput} />
      <Animated.View style={fakeView} />
    </View>
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
