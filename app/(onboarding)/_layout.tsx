import { Stack } from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { Colors } from '@/constants/Colors'
import { HEADER_BACK_CONFIG } from '@/constants/HeaderbackConfig'
import { OnboardingProvider } from '@/providers/onboardingProvider'

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <OnboardingProvider>
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              contentStyle: {
                backgroundColor: Colors.background,
              },
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="preferenceScreen1"
            options={{
              headerShown: true,
              ...HEADER_BACK_CONFIG,
              contentStyle: {
                backgroundColor: Colors.background,
              },
            }}
          />
          <Stack.Screen
            name="preferenceScreen2"
            options={{
              headerShown: true,
              ...HEADER_BACK_CONFIG,
              contentStyle: {
                backgroundColor: Colors.background,
              },
            }}
          />
          <Stack.Screen
            name="preferenceScreen3"
            options={{
              headerShown: true,
              ...HEADER_BACK_CONFIG,
              contentStyle: {
                backgroundColor: Colors.background,
              },
            }}
          />
        </Stack>
      </OnboardingProvider>
    </SafeAreaProvider>
  )
}
