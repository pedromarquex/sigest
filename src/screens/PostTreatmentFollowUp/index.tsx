import React from "react";
import { StyleSheet } from "react-native";
import { Background } from "../../components/Background";
import { BodyContainer } from "../../components/BodyContainer";
import { BodyText } from "../../components/BodyText";

function PostTreatmentFollowUp() {

  const contentText = [
    "Controle mensal com teste não treponêmico – VDRL;",
    "Cura: redução de dois ou mais títulos do VDRL ou a negativação após seis meses a 12 meses do tratamento;",
    "Completa negativação do teste não treponêmico é diretamente proporcional à precocidade do início do tratamento;",
    "Diagnóstico após o secundarismo permanecem com resultados reagentes nesses testes, com títulos baixos e estáveis, pelo resto da vida;",
    "Deve-se retratar a gestante diante do aumento de duas diluições nos títulos de VDRL e investigar ativamente a possibilidade de reinfecção, além de investigação adequada do(s) parceiros(s).",
  ]

  return (
    <Background style={styles.container}>
      <BodyContainer>
        {contentText.map((text, index) => (
          <BodyText key={index} text={text} withDivider={index != contentText.length - 1}/>
        ))}
      </BodyContainer>
    </Background>
  );
}

export { PostTreatmentFollowUp };

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});