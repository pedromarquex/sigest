import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Header } from '../../components/Header'
import { type AboutStackParamList } from './aboutStack.types'
import { AboutApp } from '../../screens/about/AboutApp'
import { About } from '../../screens/about/About'
import { Developers } from '../../screens/about/Developers'

const Stack = createStackNavigator<AboutStackParamList>()

export function AboutStack (): JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="About"
        component={About}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AboutApp"
        component={AboutApp}
        options={
          {
            header: () => <Header title="Sobre o SiGest" />
          }
        }
      />
      <Stack.Screen
        name="Developers"
        component={Developers}
        options={
          {
            header: () => <Header title="Desenvolvedoras" />
          }
        }
      />
    </Stack.Navigator>
  )
}
