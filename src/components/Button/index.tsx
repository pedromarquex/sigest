import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, type ViewStyle } from 'react-native'
import { colors } from '../../@theme/colors'
import { fonts } from '../../@theme/fonts'

interface Props {
  text: string
  onPress: () => void
  style?: ViewStyle
}

export function Button ({ text, onPress, style }: Props): JSX.Element {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View
        style={[styles.container, style]}
      >
        <Text
          style={styles.text}
        >{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.mainGreen,
    height: 50,
    borderRadius: 10
  },
  text: {
    fontSize: 16,
    lineHeight: 18,
    color: '#fff',
    fontFamily: fonts.regular,
    textAlign: 'center'
  }
})
