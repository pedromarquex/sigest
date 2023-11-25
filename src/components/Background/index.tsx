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
              contentContainerStyle={contentContainerStyle}
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
        paddingBottom: 80,
    },
    scrollView: {
        paddingHorizontal: 20,
        width: '100%',
    }
})

export { Background };
