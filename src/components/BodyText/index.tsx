import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../@theme/colors";
import { fonts } from "../../@theme/fonts";

interface Props {
  text: string;
  withDivider?: boolean;
}

function BodyText({ text, withDivider }: Props) {

  return (
    <>
      <Text style={styles.bodyText}>{text}</Text>
      { withDivider && <View style={styles.divider} /> }
    </>
  )
}

export { BodyText };

const styles = StyleSheet.create({
  bodyText: {
    fontFamily: fonts.regular,
    color: colors.blackGreen2,
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: colors.background,
    marginBottom: 16
  }
});