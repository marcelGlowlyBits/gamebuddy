import { StyleSheet, View } from 'react-native'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, Controller } from 'react-hook-form'

import { UsernameSchema } from './schema'
import { Button } from '@interaction/Button'
import { Input } from '@interaction/Input'
import { useOnboarding } from '@/providers/onboardingProvider'

type UsernameSchema = z.infer<typeof UsernameSchema>

export const UsernameForm = ({ onNextStep }: { onNextStep: () => void }) => {
  const { onboardingAction, username } = useOnboarding()
  const methods = useForm<UsernameSchema>({
    resolver: zodResolver(UsernameSchema),
    defaultValues: {
      username: username || '',
    },
    mode: 'onChange',
  })

  const handleNextStep = () => {
    onboardingAction({
      type: 'SET_USERNAME',
      payload: methods.getValues('username'),
    })

    onNextStep()
  }

  return (
    <>
      <View style={styles.formWrapper}>
        <View style={styles.inputField}>
          <Controller
            control={methods.control}
            name="username"
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => {
              return (
                <Input
                  onBlur={onBlur}
                  value={value}
                  errors={error?.message}
                  onChangeText={onChange}
                  placeholder="kies een gebruikersnaam"
                />
              )
            }}
          />
        </View>
      </View>
      <Button
        disabled={!methods.formState.isValid}
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
