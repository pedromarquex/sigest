import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Details() {
    return (
        <View style={styles.container}>
          <Text>Details</Text>
        </View>
      );
}

export { Details };

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });