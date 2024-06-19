import { StyleSheet, View, ScrollView } from 'react-native'
import { useRouter } from 'expo-router'

import { Text } from '@typography/Text'
import { Title } from '@typography/Title'

import { GameGenresForm } from '@/features'
import { useOnboarding } from '@/providers/onboardingProvider'

export default function PreferenceScreen2() {
  const { username } = useOnboarding()
  const router = useRouter()

  const handleNavigation = () => {
    router.push('/(onboarding)/preferenceScreen3')
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollViewContent}
      >
        <Title>Hallo, {username}</Title>
        <Text>Selecteer de game genres die je wilt spelen.</Text>
        <GameGenresForm onNextStep={handleNavigation} />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    padding: 20,
    gap: 30,
  },
})
