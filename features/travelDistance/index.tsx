import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import Slider from '@react-native-community/slider'

import { Title } from '@typography/Title'
import { Colors } from '@/constants/Colors'
import { Button } from '@interaction/Button'
import { useOnboarding } from '@/providers/onboardingProvider'

export const TravelDistance = ({ onNextStep }: { onNextStep: () => void }) => {
  const { range, onboardingAction, confirmOnboarding } = useOnboarding()
  const [value, setValue] = React.useState(range)

  const handleNextStep = () => {
    onboardingAction({ type: 'SET_RANGE', payload: value })

    confirmOnboarding(value)

    onNextStep()
  }

  return (
    <>
      <View style={styles.formWrapper}>
        <Title>{value} km</Title>
        <Slider
          style={{ width: '100%', height: 60 }}
          minimumValue={0}
          step={1}
          maximumValue={100}
          minimumTrackTintColor={Colors.brand}
          maximumTrackTintColor={Colors.lightGray}
          onValueChange={setValue}
          value={value}
        />
      </View>
      <Button
        disabled={value === range}
        title="Volgende stap"
        onPress={handleNextStep}
      />
    </>
  )
}

const styles = StyleSheet.create({
  inputField: {
    height: 'auto',
  },
  formWrapper: {
    flexGrow: 1,
  },
})
