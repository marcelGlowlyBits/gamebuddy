import { View, ScrollView, StyleSheet } from "react-native";

import { Text } from "@typography/Text";

export default function WelcomeOnboarding() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Welcome</Text>
        <Text>This is the onboarding screen</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
