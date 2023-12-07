import { type StackScreenProps } from '@react-navigation/stack'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

interface DataType {
  data: Record<string, unknown>
}

export interface AssistanceStackParamList {
  Assistance: undefined
  BasicInfo: undefined
  History: DataType
  FirstMeasurement: DataType
  Result: DataType
}

export type AssistanceStackScreenProps<Screen extends keyof AssistanceStackParamList> =
  StackScreenProps<AssistanceStackParamList, Screen>
