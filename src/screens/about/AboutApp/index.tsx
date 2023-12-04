import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Background } from '../../../components/Background'
import { BodyContainer } from '../../../components/BodyContainer'
import { BodyText } from '../../../components/BodyText'

export function AboutApp (): JSX.Element {
  const contentText = 
    'Este aplicativo foi desenvolvido com base em evidências científicas atualizadas por estas pesquisadoras e tem como finalidade principal ofertar informações confiáveis para os profissionais da Estratégia de Saúde da Família na assistência a gestante com sífilis acerca do adequado manejo clínico.\n' +
    'Acreditamos, que este servirá como ferramenta de investigação na área da saúde para a tomada de decisão durante a prática clínica em tempo oportuno, favorecendo a otimização de medidas interventivas corretas a fim de prevenir e evitar desfechos que acarretem riscos à saúde materno-fetal. Esperamos, com essas informações contribuir ainda mais para o seu conhecimento e melhoria da assistência.'
  

  return (
    <Background style={styles.container}>
      <BodyContainer>
          <View>
            <BodyText text={contentText} withDivider />
          </View>
      </BodyContainer>
    </Background>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})
