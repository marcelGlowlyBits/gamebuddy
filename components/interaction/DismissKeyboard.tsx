import { Keyboard, TouchableWithoutFeedback } from 'react-native'

export const DismissKeyboard = ({ children }: any) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  )
}
