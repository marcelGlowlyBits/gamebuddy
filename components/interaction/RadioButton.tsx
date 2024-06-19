import { Text } from '@typography/Text'
import { StyleSheet, View, TouchableOpacity } from 'react-native'

import { Colors } from '@/constants/Colors'

export const RadioButton = ({
  label,
  selected,
  onSelect,
  value,
}: {
  label: string
  selected: boolean
  onSelect: (value: string) => void
  value: string
}) => {
  const styles = useStyles({ selected })

  const handlePress = () => {
    onSelect(value)
  }

  return (
    <TouchableOpacity style={styles.radioTouchable} onPress={handlePress}>
      <View style={styles.radioWrapper}>
        <View style={styles.radioCircleOutline}>
          <View style={styles.radioCircle} />
        </View>
        <Text>{label}</Text>
      </View>
    </TouchableOpacity>
  )
}

const useStyles = ({ selected }: { selected: boolean }) =>
  StyleSheet.create({
    radioTouchable: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 16,
      backgroundColor: Colors.background,
    },
    radioCircleOutline: {
      height: 28,
      width: 28,
      borderRadius: 14,
      borderWidth: 1,
      borderColor: Colors.lightGray,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: selected ? Colors.brand : Colors.background,
    },
    radioCircle: {
      height: 16,
      width: 16,
      borderRadius: 10,
      backgroundColor: Colors.background,
    },
    radioWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12.5,
    },
  })
