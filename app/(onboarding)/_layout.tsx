import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Colors } from "@/constants/Colors";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen
          name='index'
          options={{
            headerShown: false,
            contentStyle: {
              backgroundColor: Colors.background,
            },
          }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
