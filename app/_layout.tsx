import * as React from 'react'
import { Slot, useRouter } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from '@expo-google-fonts/poppins'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()
const onboarded = false

const InitialLayout = () => {
  const router = useRouter()

  React.useEffect(() => {
    // Here you can check if the user is onboarded or authenticated.
    if (!onboarded) {
      router.replace('/(onboarding)')
    } else {
      router.replace('/(tabs)')
    }
  }, [])

  return <Slot />
}

export default function RootLayout() {
  const [appReady, setAppReady] = React.useState(false)
  let [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_600SemiBold,
  })

  React.useEffect(() => {
    async function prepare() {
      try {
        // We can do some async stuff here to prepare the app on launch.
        await SplashScreen.preventAutoHideAsync()
      } catch (e) {
        console.error(e)
      } finally {
        setAppReady(true)
      }
    }

    prepare()
  }, [])

  const onLayoutRootView = React.useCallback(async () => {
    if (appReady) {
      await SplashScreen.hideAsync()
    }
  }, [appReady])

  if (!appReady || !fontsLoaded || fontError) {
    return null
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <InitialLayout />
    </SafeAreaProvider>
  )
}
