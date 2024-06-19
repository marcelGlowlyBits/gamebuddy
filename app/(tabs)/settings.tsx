import { View, StyleSheet, ScrollView, ActivityIndicator } from 'react-native'

import { Colors } from '@/constants/Colors'
import { Title } from '@/components/typography/Title'
import { Text } from '@/components/typography/Text'
import { Button } from '@/components/interaction/Button'

import { useUser } from '@hooks/useUser'
import { disableOnboarded } from '@queries/user'

export default function TabTwoScreen() {
  const { user, isLoading } = useUser()

  const handleOnboarded = () => {
    disableOnboarded()
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Title>Settings</Title>
        {isLoading ? (
          <ActivityIndicator size="large" color={Colors.brand} />
        ) : (
          <View style={styles.flexContainer}>
            <View style={styles.contentContainer}>
              <Text>{`Gekozen genre: ${user?.genre}`}</Text>
              <Text>{`Gekozen range: ${user?.range} km`}</Text>
              <Text>{`Gebruikersnaam: ${user?.username}`}</Text>
              <Text>{`is Onboarded: ${user?.onboarded}`}</Text>
            </View>
            <Button title="disable onboarded" onPress={handleOnboarded} />
          </View>
        )}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    height: '100%',
    padding: 20,
  },
  scrollView: {
    marginTop: 20,
  },
  contentContainer: {
    gap: 15,
    marginTop: 15,
  },
  flexContainer: {
    gap: 35,
  },
})
