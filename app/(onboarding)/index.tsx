import { StyleSheet, View } from 'react-native'
import { useRouter } from 'expo-router'
import { Text } from '@typography/Text'
import { Title } from '@typography/Title'

import { Button } from '@interaction/Button'

export default function WelcomeOnboarding() {
  const router = useRouter()

  const handleNavigation = () => {
    router.push('/(onboarding)/preferenceScreen1')
  }

  return (
    <View style={styles.container}>
      <Title align="center" bold>
        Welcome to Gamebuddy!
      </Title>
      <Text size={16} color="brand" align="center">
        Find your next gaming buddy here
      </Text>
      <Button title="Get started" onPress={handleNavigation} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
})
