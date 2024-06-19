import { StyleSheet, View, ScrollView } from 'react-native'
import { useRouter } from 'expo-router'

import { UsernameForm } from '@/features'

import { Text } from '@typography/Text'
import { Title } from '@typography/Title'
import { DismissKeyboard } from '@interaction/DismissKeyboard'

export default function PreferenceScreen1() {
  const router = useRouter()

  const handleNavigation = () => {
    router.push('/(onboarding)/preferenceScreen2')
  }

  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.scrollViewContent}
        >
          <Title>Gebruikersnaam</Title>
          <Text>Kies een gebruikersnaam:</Text>
          <UsernameForm onNextStep={handleNavigation} />
        </ScrollView>
      </View>
    </DismissKeyboard>
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
  titleSection: {
    gap: 20,
  },
})
