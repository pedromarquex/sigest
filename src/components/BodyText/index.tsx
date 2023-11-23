import React from "react";
import { StyleSheet, Text } from "react-native";
import { colors } from "../../@theme/colors";
import { fonts } from "../../@theme/fonts";

interface Props {
  text: string;
}

function BodyText({ text }: Props) {
  return <Text style={styles.bodyText}>{text}</Text>
}

export { BodyText };

const styles = StyleSheet.create({
  bodyText: {
    fontFamily: fonts.regular,
    color: colors.blackGreen2,
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16
  }
});