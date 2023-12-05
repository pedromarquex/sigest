import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View, type ViewStyle } from 'react-native'
import { colors } from '../../@theme/colors'

interface Props {
  children: React.ReactNode
  style?: ViewStyle
  scrollViewStyle?: ViewStyle
  contentContainerStyle?: ViewStyle
  bottom?: React.ReactNode
}

function Background ({
  children,
  style,
  scrollViewStyle,
  contentContainerStyle,
  bottom
}: Props): JSX.Element {
  const bottomTabHeight = useBottomTabBarHeight()

  return (
    <SafeAreaView style={[styles.container, style]}>
      <ScrollView
        style={[styles.scrollView, scrollViewStyle]}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.contentContainer, contentContainerStyle]}
        bounces={false}
      >
        {children}
      </ScrollView>
      <View style={[styles.bottomContainer, { bottom: bottomTabHeight + 20 }]}>
        {bottom}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  scrollView: {
    paddingHorizontal: 20,
    width: '100%'
  },
  contentContainer: {
    paddingBottom: 80
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%'
  }
})

export { Background }
