import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { Text } from '@typography/Text'

import { Colors } from '@/constants/Colors'

type InputProps = {
  label?: string
  placeholder: string
  autoComplete?: 'email' | 'new-password' | 'username'
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters'
  autoCorrect?: boolean
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad'
  secureTextEntry?: boolean
  errors?: any
  onBlur?: any
  value: string
  onChangeText: any
  multiline?: boolean
  numberOfLines?: number
}
// @TODO: Refactor the check for multiline and numberOfLines
export const Input = React.forwardRef<TextInput, InputProps>(
  (
    {
      label,
      placeholder,
      autoComplete,
      autoCapitalize,
      autoCorrect,
      keyboardType,
      secureTextEntry = false,
      errors,
      onBlur,
      value,
      onChangeText,
      multiline,
      numberOfLines,
    },
    ref
  ) => {
    const styles = useStyles({ multiline, numberOfLines })

    return (
      <View style={styles.inputField}>
        {label && <Text>{label}</Text>}
        <TextInput
          {...{
            placeholder,
            autoComplete,
            autoCapitalize,
            autoCorrect,
            keyboardType,
            secureTextEntry,
            onBlur,
            value,
            onChangeText,
            multiline,
            numberOfLines,
          }}
          ref={ref}
          style={styles.input}
          placeholderTextColor={Colors.lightGray}
        />
        {errors && <Text color="error">{errors}</Text>}
      </View>
    )
  }
)

const useStyles = ({
  multiline,
  numberOfLines,
}: {
  multiline?: boolean
  numberOfLines?: number
}) =>
  StyleSheet.create({
    input: {
      flex: 1,
      borderColor: Colors.lightGray,
      borderWidth: 1,
      borderRadius: 16,
      paddingHorizontal: 12,
      paddingVertical: 18,
      fontFamily: 'Poppins-Regular',
    },
    inputField: {
      flex: 1,
      marginBottom: 15,
      flexDirection: 'column',
      gap: 15,
      height: numberOfLines && multiline ? numberOfLines * 40 : undefined,
    },
  })
