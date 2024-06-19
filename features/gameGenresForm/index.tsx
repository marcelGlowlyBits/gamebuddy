import { View, StyleSheet } from 'react-native'

import { Button } from '@interaction/Button'
import { RadioButton } from '@/components/interaction/RadioButton'

import { GameGenreOptions } from './options'

import { useOnboarding } from '@/providers/onboardingProvider'

export const GameGenresForm = ({ onNextStep }: { onNextStep: () => void }) => {
  const { onboardingAction, genre } = useOnboarding()
  const isValidated = Boolean(genre !== '')

  const handleSelect = (value: string) => {
    onboardingAction({ type: 'SET_GENRE', payload: value })
  }

  return (
    <>
      <View style={styles.formWrapper}>
        {GameGenreOptions.map(({ value, label }) => (
          <RadioButton
            key={value}
            label={label}
            value={value}
            selected={Boolean(genre === value)}
            onSelect={handleSelect}
          />
        ))}
      </View>
      <Button
        title="Volgende stap"
        onPress={onNextStep}
        disabled={!isValidated}
      />
    </>
  )
}

const styles = StyleSheet.create({
  formWrapper: {
    flexGrow: 1,
  },
})
