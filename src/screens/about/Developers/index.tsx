import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Background } from '../../../components/Background'
import { BodyContainer } from '../../../components/BodyContainer'
import { BodyText } from '../../../components/BodyText'
import { Title } from '../../../components/Title'

export function Developers (): JSX.Element {
  const contentText = [
    'Graduada em Enfermagem pelo Centro de Ensino Unificado de Teresina (CEUT), Especialização em  em Saúde da Mulher, Cuidados Paliativos e Enfermagem em Oncologia pela Faveni, Mestranda em Saúde da Mulher, pela Universidade Federal do Piauí- UFPI. Tem experiência em Saúde da mulher, Clínica médica e Oncologia',
    'Graduação em Enfermagem pela UFPI/Campus Senador Helvídio Nunes de Barros (2013), Especialização em Gestão em Saúde (UFPI), Especialista em Enfermagem em Cuidado Pré-Natal pela Universidade Federal de São Paulo (UNIFESP), Especialista em Enfermagem Obstétrica pela UFMG/UFPI - Rede Cegonha, em Urgência e Emergência em Enfermagem pela Faculdade Futura. Especialização em Enfermagem do Trabalho, Especialização em Auditoria em Saúde e  Especialização  em Estratégia Saúde da Família pela DNA PÓS-GRADUAÇÃO. Mestranda em Saúde da Mulher pela Universidade Federal do Piauí (UFPI). Tem experiência em Saúde da Mulher e do Recém-nascido e Urgência e Emergência.'
  ]

  const titles = [
    'Dra. Malvina Thais Pacheco Rodrigues',
    'M.a Alane da Silva Tôrres'
  ]

  return (
    <Background style={styles.container}>
      <BodyContainer>
        {contentText.map((text, index) => (
          <View key={index}>
            <Title text={titles[index]} />
            <BodyText text={text} withDivider = {index !== contentText.length - 1} />
          </View>
        ))}
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
