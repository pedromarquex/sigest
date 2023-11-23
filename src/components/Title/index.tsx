import React from "react";
import { StyleSheet, Text } from "react-native";
import { colors } from "../../@theme/colors";
import { fonts } from "../../@theme/fonts";

interface Props {
  text: string;
}

export function Title({ text }: Props) {
  return <Text style={styles.bodyText}>{text}</Text>
}

const styles = StyleSheet.create({
  bodyText: {
    fontFamily: fonts.semibold,
    color: colors.blackGreen,
    fontSize: 16,
    marginBottom: 16,
    paddingTop: 8
  }
});