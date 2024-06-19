import { StyleSheet, View, ScrollView } from 'react-native'
import { useRouter } from 'expo-router'

import { Text } from '@typography/Text'
import { Title } from '@typography/Title'

import { useOnboarding } from '@/providers/onboardingProvider'
import { TravelDistance } from '@features/travelDistance'

export default function PreferenceScreen3() {
  const { genre } = useOnboarding()
  const router = useRouter()

  const handleNavigation = () => {
    router.replace('/(tabs)')
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollViewContent}
      >
        <Title>Reisafstand</Title>
        <Text>
          {`Hoever wil je maximaal reizen om samen met iemand ${genre} games te spelen?`}
        </Text>
        <TravelDistance onNextStep={handleNavigation} />
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
