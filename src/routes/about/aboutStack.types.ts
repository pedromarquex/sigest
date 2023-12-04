import { type StackScreenProps } from '@react-navigation/stack'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export interface AboutStackParamList {
  About: undefined
  AboutApp: undefined
  Developers: undefined
}

export type AboutStackScreenProps<Screen extends keyof AboutStackParamList> =
  StackScreenProps<AboutStackParamList, Screen>
