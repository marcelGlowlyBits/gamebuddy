import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ActivityIndicator,
} from 'react-native'

import { Colors } from '@/constants/Colors'

export const Button = React.forwardRef(
  (
    {
      title = 'Button',
      secondary = false,
      onPress,
      style,
      disabled,
      loading = false,
    }: any,
    meta
  ) => {
    const styles = useStyles({ secondary, disabled, loading })

    return (
      <View style={style}>
        <Pressable
          style={({ pressed }) => [
            styles.buttonPressable,
            secondary,
            disabled || loading,
            ...(pressed ? [{ opacity: 0.6 }] : []),
          ]}
          onPress={onPress}
          disabled={disabled || loading}
        >
          {loading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator
                size="small"
                color="black"
                style={styles.spinner}
              />
            </View>
          ) : (
            <Text
              style={[
                styles.buttonLabel,
                { color: secondary ? Colors.brand : Colors.text.white },
              ]}
            >
              {title}
            </Text>
          )}
        </Pressable>
      </View>
    )
  }
)

const useStyles = ({
  secondary,
  disabled,
  loading,
}: {
  secondary: boolean
  disabled: boolean
  loading: boolean
}) =>
  StyleSheet.create({
    buttonPressable: {
      borderWidth: 1,
      alignSelf: 'center',
      minWidth: 48,
      borderColor: disabled || loading ? Colors.lightGray : Colors.brand,
      color: Colors.text.white,
      maxWidth: 382,
      paddingHorizontal: 32,
      paddingVertical: 24,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 16,
      backgroundColor:
        disabled || loading
          ? Colors.lightGray
          : secondary
          ? Colors.background
          : Colors.brand,
    },
    buttonLabel: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: '700',
    },
    loadingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    spinner: {
      marginRight: 10,
    },
  })
