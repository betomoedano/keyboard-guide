import React from "react";
import { useGradualAnimation } from "@/hooks/useGradualAnimation";
import { Button, Text, TextInput, useColorScheme, View } from "react-native";
import { KeyboardToolbar } from "react-native-keyboard-controller";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { Stack } from "expo-router";
import { Colors } from "@/constants/Colors";

export default function Schedule() {
  const { height } = useGradualAnimation();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  const keyboardPadding = useAnimatedStyle(() => {
    return {
      height: height.value,
    };
  }, []);

  return (
    <>
      <Stack.Screen
        options={{
          headerRight: () => <Button title="Schedule" />,
        }}
      />
      <View style={{ flex: 1 }}>
        <TextInput
          placeholder="What's up?"
          multiline
          autoFocus
          numberOfLines={8}
          maxLength={280}
          style={{
            flex: 1,
            padding: 16,
            fontSize: 16,
            color: isDark ? Colors.dark.text : Colors.light.text,
          }}
        />

        <Animated.View style={keyboardPadding} />
      </View>

      <KeyboardToolbar content={<Text>What's up?</Text>} showArrows={false} />
    </>
  );
}
