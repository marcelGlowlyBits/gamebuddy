import { View, StyleSheet, ScrollView } from 'react-native'

import { Colors } from '@/constants/Colors'
import { Title } from '@/components/typography/Title'

import { Button } from '@/components/interaction/Button'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Title>Home</Title>
        <Button title="Press me" />
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
})
