import React from 'react'
import { Platform, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Background } from '../../../components/Background'
import { MenuButton } from '../../../components/MenuButton'
import { type AboutStackScreenProps } from '../../../routes/about/aboutStack.types'

export function About ({ navigation }: AboutStackScreenProps<'About'>): JSX.Element {
  const insets = useSafeAreaInsets()

  const paddingTop = Platform.OS === 'android' ? 40 + insets.top : 40

  const menuItems = [
    {
      title: 'Sobre o SiGest',
      icon: 'pill' as 'pill',
      onPress: () => { navigation.navigate('AboutApp') }
    },
    {
      title: 'Desenovolvedoras',
      icon: 'pill' as 'pill',
      onPress: () => { navigation.navigate('Developers') }
    }
  ]

  return (
    <Background style={styles.container} contentContainerStyle={{ paddingTop }}>
      {menuItems.map((item, index) => (
        <MenuButton
          key={index}
          title={item.title}
          icon={item.icon}
          onPress={item.onPress}
        />
      ))}
    </Background>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentContainer: {
    paddingTop: 20
  }
})
