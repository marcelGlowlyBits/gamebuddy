import { View, StyleSheet, ScrollView, ActivityIndicator } from 'react-native'

import { Colors } from '@/constants/Colors'
import { Title } from '@/components/typography/Title'
import { Text } from '@/components/typography/Text'

import { useUser } from '@hooks/useUser'

export default function HomeScreen() {
  const { user, isLoading } = useUser()

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Title>Home</Title>
        {isLoading ? (
          <ActivityIndicator size="large" color={Colors.brand} />
        ) : (
          <View style={styles.contentContainer}>
            <Title size={24}>Welkom terug, {user?.username}</Title>
            <Text>
              {`Klaar om ${user?.genre} games te spelen met andere mensen binnen een straal van ${user?.range} km?`}
            </Text>
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
})
