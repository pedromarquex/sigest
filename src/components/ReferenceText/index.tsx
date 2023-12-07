import React from "react";
import { StyleSheet, Text, TextStyle } from "react-native";
import { colors } from "../../@theme/colors";
import { fonts } from "../../@theme/fonts";

interface TextProps {
  text: string
  style?: TextStyle
}

export function ReferenceText({text, style}: TextProps): JSX.Element {
  return (
    <Text
      style={[styles.text, style]}
    >
      {text}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 11,
    lineHeight: 11,
    color: colors.gray3,
    fontFamily: fonts.regular,
    alignSelf: 'flex-start',
  }
})