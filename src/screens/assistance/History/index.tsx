import React, { useEffect, useReducer } from 'react'
import { View } from 'react-native'
import { Background } from '../../../components/Background'
import { BodyText } from '../../../components/BodyText'
import { Button } from '../../../components/Button'
import { Dialog } from '../../../components/Dialog/dialog'
import { Dropdown } from '../../../components/Dropdown'
import { Switch } from '../../../components/Switch'
import { Title } from '../../../components/Title'
import { type AssistanceStackScreenProps } from '../../../routes/assistance/assistanceStack.types'

export interface HistoryState {
  hasSifilisHistory: boolean
  lastOcurrenceYear: string
  dosisAmount: string

  hasTreponeumTest: boolean
  wichTreponeumTest: string
  pregnancyPeriod: string
  treponeumTestResult: string

  hasNonTreponeumTest: boolean
  wichNonTreponeumTest: string
  nonTreponeumPregnancyPeriod: string
  nonTreponeumTestResult: string
  titulation: string
}

interface HistoryAction {
  type: 'SET_SIFILIS_HISTORY'
  | 'SET_LAST_OCURRENCE_YEAR'
  | 'SET_DOSIS_AMOUNT'
  | 'SET_TREPONEUM_TEST'
  | 'SET_WICH_TREPONEUM_TEST'
  | 'SET_PREGNANCY_PERIOD'
  | 'SET_TREPONEUM_TEST_RESULT'
  | 'SET_NON_TREPONEUM_TEST'
  | 'SET_WICH_NON_TREPONEUM_TEST'
  | 'SET_NON_TREPONEUM_PREGNANCY_PERIOD'
  | 'SET_NON_TREPONEUM_TEST_RESULT'
  | 'SET_TITULATION'
  
  payload: any
}

export function History ({ navigation, route }: AssistanceStackScreenProps<'BasicInfo'>): JSX.Element {
  const [state, dispatch] = useReducer((state: HistoryState, action: HistoryAction) => {
    switch (action.type) {
      case 'SET_SIFILIS_HISTORY':
        return { ...state, hasSifilisHistory: action.payload }
      case 'SET_LAST_OCURRENCE_YEAR':
        return { ...state, lastOcurrenceYear: action.payload }
      case 'SET_DOSIS_AMOUNT':
        return { ...state, dosisAmount: action.payload }
      case 'SET_TREPONEUM_TEST':
        return { ...state, hasTreponeumTest: action.payload }
      case 'SET_WICH_TREPONEUM_TEST':
        return { ...state, wichTreponeumTest: action.payload }
      case 'SET_PREGNANCY_PERIOD':
        return { ...state, pregnancyPeriod: action.payload }
      case 'SET_TREPONEUM_TEST_RESULT':
        return { ...state, treponeumTestResult: action.payload }
      case 'SET_NON_TREPONEUM_TEST':
        return { ...state, hasNonTreponeumTest: action.payload }
      case 'SET_WICH_NON_TREPONEUM_TEST':
        return { ...state, wichNonTreponeumTest: action.payload }
      case 'SET_NON_TREPONEUM_PREGNANCY_PERIOD':
        return { ...state, nonTreponeumPregnancyPeriod: action.payload }
      case 'SET_NON_TREPONEUM_TEST_RESULT':
        return { ...state, nonTreponeumTestResult: action.payload }
      case 'SET_TITULATION':
        return { ...state, titulation: action.payload }
      default:
        return state
    }
  }, {
    hasSifilisHistory: false,
    lastOcurrenceYear: '',
    dosisAmount: '',
    hasTreponeumTest: false,
    wichTreponeumTest: '',
    pregnancyPeriod: '',
    treponeumTestResult: '',
    hasNonTreponeumTest: false,
    wichNonTreponeumTest: '',
    nonTreponeumPregnancyPeriod: '',
    nonTreponeumTestResult: '',
    titulation: ''
  })

  const [open, setOpen] = React.useState(false)

  // years from 1900 to 2023
  const years = Array.from(Array(124), (_, i) => i + 1900).map((year) => ({ label: year.toString(), value: year.toString() })).reverse()

  const dosisAmountOptions = [
    { label: 'Uma dose', value: 'UMA_DOSE' },
    { label: 'Duas doses', value: 'DUAS_DOSES' },
    { label: 'Três doses', value: 'TRES_DOSES' }
  ]

  // Testes treponêmicos: Teste rápido, Testes de hemaglutinação, Teste de imunofluorescência indireta, Ensaios imunoenzimáticos
  const treponeumTestOptions = [
    { label: 'Teste rápido', value: 'TESTE_RAPIDO' },
    { label: 'Testes de hemaglutinação', value: 'TESTES_DE_HEMAGLUTINACAO' },
    { label: 'Teste de imunofluorescência indireta', value: 'TESTE_DE_IMUNOFLUORESCENCIA_INDIRETA' },
    { label: 'Ensaios imunoenzimáticos', value: 'ENSAIOS_IMUNOENZIMATICOS' }
  ]

  // Testes não treponêmicos: VDRL, RPR, TRUST, USR
  const nonTreponeumTestOptions = [
    { label: 'VDRL', value: 'VDRL' },
    { label: 'RPR', value: 'RPR' },
    { label: 'TRUST', value: 'TRUST' },
    { label: 'USR', value: 'USR' }
  ]

  // Período da gravidez: Primeiro trimestre, Segundo trimestre, Terceiro Trimestre
  const pregnancyPeriodOptions = [
    { label: 'Primeiro trimestre', value: 'PRIMEIRO_TRIMESTRE' },
    { label: 'Segundo trimestre', value: 'SEGUNDO_TRIMESTRE' },
    { label: 'Terceiro Trimestre', value: 'TERCEIRO_TRIMESTRE' }
  ]

  // Resultado do teste: Reagente, Não reagente
  const testResultOptions = [
    { label: 'Reagente', value: 'REAGENTE' },
    { label: 'Não reagente', value: 'NAO_REAGENTE' }
  ]

  // Titulação: 1:2; 1:4; 1:8; 1:16; 1:32; 1:64; 1:128; 1:256
  const titulationOptions = [
    { label: '1:2', value: '1:2' },
    { label: '1:4', value: '1:4' },
    { label: '1:8', value: '1:8' },
    { label: '1:16', value: '1:16' },
    { label: '1:32', value: '1:32' },
    { label: '1:64', value: '1:64' },
    { label: '1:128', value: '1:128' },
    { label: '1:256', value: '1:256' }
  ]

  const navigateToResult = (): void => {
    if (!state.hasTreponeumTest && !state.hasNonTreponeumTest) {
      setOpen(true)
    } else {
      navigation.navigate('Result', {
        data: {
          ...route.params?.data,
          ...state
        }
      })
    }
  }

  function toggleHasTreponeumTest (): void {
    if (state.hasTreponeumTest) {
      dispatch({ type: 'SET_TREPONEUM_TEST', payload: false })
      dispatch({ type: 'SET_WICH_TREPONEUM_TEST', payload: '' })
      dispatch({ type: 'SET_PREGNANCY_PERIOD', payload: '' })
      dispatch({ type: 'SET_TREPONEUM_TEST_RESULT', payload: '' })
    } else {
      dispatch({ type: 'SET_TREPONEUM_TEST', payload: true })
    }
  }

  function toggleHasNonTreponeumTest (): void {
    if (state.hasNonTreponeumTest) {
      dispatch({ type: 'SET_NON_TREPONEUM_TEST', payload: false })
      dispatch({ type: 'SET_WICH_NON_TREPONEUM_TEST', payload: '' })
      dispatch({ type: 'SET_NON_TREPONEUM_PREGNANCY_PERIOD', payload: '' })
      dispatch({ type: 'SET_NON_TREPONEUM_TEST_RESULT', payload: '' })
      dispatch({ type: 'SET_TITULATION', payload: '' })
    } else {
      dispatch({ type: 'SET_NON_TREPONEUM_TEST', payload: true })
    }
  }

  return (
    <Background
      contentContainerStyle={{ paddingTop: 36, paddingBottom: 150 }}
      bottom={
        <Button
          text='Ver resultado'
          onPress={navigateToResult}
          style={{ marginHorizontal: 20 }}
        />
      }
    >
      <Title text='Histórico' style={{ paddingTop: 0 }} />
      <Switch
        value={state.hasSifilisHistory}
        onToggle={() => { dispatch({ type: 'SET_SIFILIS_HISTORY', payload: !(state.hasSifilisHistory as boolean) }) }}
        text="Paciente com histórico de Sífilis?"
      />

      {state.hasSifilisHistory && (
        <>
          <Dropdown
            items={years}
            label="Ano da última ocorrência"
            value={years.find((year) => year.value === state.lastOcurrenceYear) ?? { label: '', value: '' }}
            onChangeText={(item) => { dispatch({ type: 'SET_LAST_OCURRENCE_YEAR', payload: item.value }) }}
            hideFilter
          />
          <Dropdown
            items={dosisAmountOptions}
            label="Quantidade de doses"
            value={dosisAmountOptions.find((dosisAmount) => dosisAmount.value === state.dosisAmount) ?? { label: '', value: '' }}
            onChangeText={(item) => { dispatch({ type: 'SET_DOSIS_AMOUNT', payload: item.value }) }}
            hideFilter
          />
        </>
      )}

      <Switch
        value={state.hasTreponeumTest}
        onToggle={() => { toggleHasTreponeumTest() }}
        text="Realizou teste treponêmico durante a gestação?"
      />
      {state.hasTreponeumTest && (
        <>
          <Dropdown
            items={treponeumTestOptions}
            label="Qual teste?"
            value={treponeumTestOptions.find((treponeumTest) => treponeumTest.value === state.wichTreponeumTest) ?? { label: '', value: '' }}
            onChangeText={(item) => { dispatch({ type: 'SET_WICH_TREPONEUM_TEST', payload: item.value }) }}
            hideFilter
          />
          <Dropdown
            items={pregnancyPeriodOptions}
            label="Período da gravidez"
            value={pregnancyPeriodOptions.find((pregnancyPeriod) => pregnancyPeriod.value === state.pregnancyPeriod) ?? { label: '', value: '' }}
            onChangeText={(item) => { dispatch({ type: 'SET_PREGNANCY_PERIOD', payload: item.value }) }}
            hideFilter
          />
          <Dropdown
            items={testResultOptions}
            label="Resultado do teste"
            value={testResultOptions.find((treponeumTestResult) => treponeumTestResult.value === state.treponeumTestResult) ?? { label: '', value: '' }}
            onChangeText={(item) => { dispatch({ type: 'SET_TREPONEUM_TEST_RESULT', payload: item.value }) }}
            hideFilter
          />
        </>
      )}

      <Switch
        value={state.hasNonTreponeumTest}
        onToggle={() => { toggleHasNonTreponeumTest() }}
        text="Realizou teste não treponêmico durante a gestação?"
      />

      {state.hasNonTreponeumTest && (
        <>
          <Dropdown
            items={nonTreponeumTestOptions}
            label="Qual teste?"
            value={nonTreponeumTestOptions.find((nonTreponeumTest) => nonTreponeumTest.value === state.wichNonTreponeumTest) ?? { label: '', value: '' }}
            onChangeText={(item) => { dispatch({ type: 'SET_WICH_NON_TREPONEUM_TEST', payload: item.value }) }}
            hideFilter
          />
          <Dropdown
            items={pregnancyPeriodOptions}
            label="Período da gravidez"
            value={pregnancyPeriodOptions.find((pregnancyPeriod) => pregnancyPeriod.value === state.nonTreponeumPregnancyPeriod) ?? { label: '', value: '' }}
            onChangeText={(item) => { dispatch({ type: 'SET_NON_TREPONEUM_PREGNANCY_PERIOD', payload: item.value }) }}
            hideFilter
          />
          <Dropdown
            items={testResultOptions}
            label="Resultado do teste"
            value={testResultOptions.find((nonTreponeumTestResult) => nonTreponeumTestResult.value === state.nonTreponeumTestResult) ?? { label: '', value: '' }}
            onChangeText={(item) => { dispatch({ type: 'SET_NON_TREPONEUM_TEST_RESULT', payload: item.value }) }}
            hideFilter
          />
          <Dropdown
            items={titulationOptions}
            label="Titulação"
            value={titulationOptions.find((titulation) => titulation.value === state.titulation) ?? { label: '', value: '' }}
            onChangeText={(item) => { dispatch({ type: 'SET_TITULATION', payload: item.value }) }}
            hideFilter
          />
        </>
      )}

      <Dialog
        open={open}
        setOpen={setOpen}
      >
        <View>
          <Title
            text="Conduta quando não há testes realizados"
            style={{ textAlign: 'center' }}
          />
          <BodyText
            text="Realizar teste treponêmico (teste rápido), bem como o teste não treponêmico (VDRL)  no pré-natal para rastreio da sífilis na gravidez."
            style={{ textAlign: 'center' }}
          />
        </View>
        <Button
          text="Fechar"
          onPress={() => {
            setOpen(false)
          }}
          style={{ width: 300 }}
        />
      </Dialog>

    </Background>
  )
}
