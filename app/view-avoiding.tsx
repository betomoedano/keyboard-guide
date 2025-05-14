import React, { useEffect, useRef } from "react";
import { useGradualAnimation } from "@/hooks/useGradualAnimation";
import {
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from "react-native";
import { KeyboardToolbar } from "react-native-keyboard-controller";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { Stack } from "expo-router";
import { Colors } from "@/constants/Colors";

export default function Schedule() {
  const { height } = useGradualAnimation();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const inputRef = useRef<TextInput>(null);

  const keyboardPadding = useAnimatedStyle(() => {
    return {
      height: height.value,
    };
  }, []);

  const toggleKeyboard = () => {
    if (Keyboard.isVisible()) {
      Keyboard.dismiss();
    } else {
      inputRef.current?.focus();
    }
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerRight: () => (
            <Button title="Toggle keyboard" onPress={toggleKeyboard} />
          ),
        }}
      />
      <View style={{ flex: 1, padding: 16 }}>
        <TextInput
          ref={inputRef}
          placeholder="Hello this is an input"
          multiline
          autoFocus
          numberOfLines={8}
          maxLength={280}
          style={{
            flex: 1,
            padding: 16,
            fontSize: 16,
            color: isDark ? Colors.dark.text : Colors.light.text,
            borderWidth: StyleSheet.hairlineWidth,
            borderColor: "black",
            borderRadius: 16,
            marginBottom: 16,
          }}
          textAlignVertical="top"
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          {/* Footer or something */}
          <Item name="Item 1" />
          <Item name="Item 2" />
          <Item name="Item 3" />
        </View>

        <Animated.View style={keyboardPadding} />
      </View>

      <KeyboardToolbar
        content={<Text>This is a toolbar</Text>}
        showArrows={false}
        insets={{ left: 16, right: 0 }}
        doneText="Close keyboard"
      />
    </>
  );
}

function Item({ name }: { name: string }) {
  return (
    <View
      style={{
        height: 100,
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "black",
        borderRadius: 16,
      }}
    >
      <Text>{name}</Text>
    </View>
  );
}
