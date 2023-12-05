import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Background } from '../../../components/Background'
import { BodyContainer } from '../../../components/BodyContainer'
import { BodyText } from '../../../components/BodyText'
import { Button } from '../../../components/Button'
import { Dialog } from '../../../components/Dialog/dialog'
import { Title } from '../../../components/Title'
import { type AssistanceStackScreenProps } from '../../../routes/assistance/assistanceStack.types'

export function Result ({ navigation, route }: AssistanceStackScreenProps<'Result'>): JSX.Element {
  const [open, setOpen] = React.useState(true)

  const contentText = [
    'Prescrever suplementação de cálcio (carbonato de cálcio)- 1,0 a 2,0g/dia, por via oral, preferencialmente antes do almoço e jantar, para mulheres com dieta pobre em cálcio.'
  ]

  const titles = [
    'Intervenções'
  ]

  const finalText = 'Prescrever aspirina em baixa dose (50-150 mg/dia), por via oral, a noite, antes de dormir- Iniciar entre 12 e 16 semanas de gestação e suspender após 36ª semana de gestação;'

  return (
    <Background style={styles.container}>
      <BodyContainer>
        <Title text="ALTO RISCO" style={{ textAlign: 'center' }} />
        {contentText.map((text, index) => (
          <View key={index}>
            <Title text={titles[index]} />
            <BodyText text={text} withDivider />
          </View>
        ))}
        <BodyText text={finalText} />
      </BodyContainer>
      <Dialog
        open={open}
        setOpen={setOpen}
      >
        <View>
          <Title text="ALTO RISCO" style={{ textAlign: 'center' }} />
          <BodyText
            text={`PACIENTE DE ALTO RISCO${'\n'}Fique atento às intervenções recomendadas`}
            style={{ textAlign: 'center' }}
          />
        </View>
        <Button
          text="Ver intervenções"
          onPress={() => {
            setOpen(false)
          }}
          style={{ width: 300 }}
        />
      </Dialog>
    </Background>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})
