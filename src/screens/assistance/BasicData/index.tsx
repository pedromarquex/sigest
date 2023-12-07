import React, { useReducer } from 'react'
import { StyleSheet, View } from 'react-native'
import { Background } from '../../../components/Background'
import { Button } from '../../../components/Button'
import { Dropdown } from '../../../components/Dropdown'
import { TextInput } from '../../../components/TextInput'
import { DateInput } from '../../../components/TextInput/date'
import { Title } from '../../../components/Title'
import { type AssistanceStackScreenProps } from '../../../routes/assistance/assistanceStack.types'

export interface BasicInfoState {
  name: string
  birthDate: string
  cpf: string
  cns: string
  civilState: string
  dum: string
  dpp: string
  ig: string
}

interface BasicInfoAction {
  type: 'SET_NAME'
  | 'SET_BIRTH_DATE'
  | 'SET_CPF'
  | 'SET_CNS'
  | 'SET_CIVIL_STATE'
  | 'SET_DUM'
  | 'SET_DPP'
  | 'SET_IG'
  payload: any
}

export function BasicInfo ({ navigation }: AssistanceStackScreenProps<'BasicInfo'>): JSX.Element {
  const [state, dispatch] = useReducer((state: BasicInfoState, action: BasicInfoAction) => {
    switch (action.type) {
      case 'SET_NAME':
        return { ...state, name: action.payload }
      case 'SET_BIRTH_DATE':
        return { ...state, birthDate: action.payload }
      case 'SET_CPF':
        return { ...state, cpf: action.payload }
      case 'SET_CNS':
        return { ...state, cns: action.payload }
      case 'SET_CIVIL_STATE':
        return { ...state, civilState: action.payload }
      case 'SET_DUM':
        return { ...state, dum: action.payload }
      case 'SET_DPP':
        return { ...state, dpp: action.payload }
      case 'SET_IG':
        return { ...state, ig: action.payload }
      default:
        return state
    }
  }, {
    name: '',
    birthDate: '',
    cpf: '',
    cns: '',
    civilState: '',
    dum: '',
    dpp: '',
    ig: ''
  })

  const civilStateOptions = [
    { label: 'Solteira', value: 'solteira' },
    { label: 'Casada', value: 'casada' },
    { label: 'Viúva', value: 'viuva' },
    { label: 'Divorciada', value: 'divorciada' },
    { label: 'União estável', value: 'uniao_estavel' }
  ]

  const navigateToHistory = (): void => {
    navigation.navigate('History', {
      data: state
    })
  }

  return (
    <Background
      contentContainerStyle={{ paddingTop: 36, paddingBottom: 150 }}
      bottom={
        <Button
          text='Continuar →'
          onPress={navigateToHistory}
          style={{ marginHorizontal: 20 }}
        />
      }
    >
      <Title text='Dados básicos' style={{ paddingTop: 0 }} />
      <TextInput
        label="Nome"
        value={state.name}
        onChangeText={(text) => { dispatch({ type: 'SET_NAME', payload: text }) }}
      />
      <DateInput
        label="Data de nascimento"
        value={state.birthDate}
        onChangeText={(text) => { dispatch({ type: 'SET_BIRTH_DATE', payload: text }) }}
      />
      <TextInput
        label="CPF"
        value={state.cpf}
        onChangeText={(text) => { dispatch({ type: 'SET_CPF', payload: text }) }}
        keyboardType='numeric'
      />
      <DateInput
        label="CNS"
        value={state.cns}
        onChangeText={(text) => { dispatch({ type: 'SET_CNS', payload: text }) }}
      />
      <Dropdown
        items={civilStateOptions}
        label="Estado Civil"
        value={civilStateOptions.find((civilState) => civilState.value === state.civilState) ?? { label: '', value: '' }}
        onChangeText={(item) => { dispatch({ type: 'SET_CIVIL_STATE', payload: item.value }) }}
        hideFilter
      />
      <View style={styles.inputsLine}>
        <DateInput
          label="DUM"
          value={state.dum}
          onChangeText={(text) => { dispatch({ type: 'SET_DUM', payload: text }) }}
        />
        <DateInput
          label="DPP"
          value={state.dpp}
          onChangeText={(text) => { dispatch({ type: 'SET_DPP', payload: text }) }}
        />
      </View>
      <TextInput
        label="IG"
        value={state.ig}
        onChangeText={(text) => { dispatch({ type: 'SET_IG', payload: text }) }}
        keyboardType='numeric'
      />
    </Background>
  )
}

const styles = StyleSheet.create({
  inputsLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16
  }
})