import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, ViewStyle } from "react-native";
import { colors } from "../../@theme/colors";

interface Props {
    children: React.ReactNode;
    style?: ViewStyle;
    scrollViewStyle?: ViewStyle;
    contentContainerStyle?: ViewStyle;
}

function Background({children, style, scrollViewStyle, contentContainerStyle}: Props) {
  
  return (
      <SafeAreaView
          style={[
            styles.container, 
            style
          ]}
      >
          <ScrollView
              style={[styles.scrollView, scrollViewStyle]}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={[styles.contentContainer, contentContainerStyle]}
              bounces={false}
          >
              {children}
          </ScrollView>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    scrollView: {
        paddingHorizontal: 20,
        width: '100%',
    },
    contentContainer: {
        paddingBottom: 80,
    }
})

export { Background };
