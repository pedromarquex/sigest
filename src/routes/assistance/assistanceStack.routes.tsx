import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Header } from '../../components/Header'
import { BasicInfo } from '../../screens/assistance/BasicData'
import { History } from '../../screens/assistance/History'
import { Result } from '../../screens/assistance/Result'
import { type AssistanceStackParamList } from './assistanceStack.types'

const Stack = createStackNavigator<AssistanceStackParamList>()

export function AssistanceStack (): JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{
          header: () => <Header title="Direcionamento Assistencial" />
        }}
      >
        <Stack.Screen
          name="BasicInfo"
          component={BasicInfo}
        />
        <Stack.Screen
          name="History"
          component={History}
        />
        <Stack.Screen
          name="Result"
          component={Result}
        />
      </Stack.Group>
    </Stack.Navigator>
  )
}
