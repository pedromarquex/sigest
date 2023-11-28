import React from "react";
import { StyleSheet } from "react-native";
import { Background } from "../../../../components/Background";
import { BodyContainer } from "../../../../components/BodyContainer";
import { BodyText } from "../../../../components/BodyText";
import { Title } from "../../../../components/Title";

export function SensitivityTest() {
  const contentText = [
    "As manifestações clínicas que justificam encaminhar a gestante para descartar o diagnóstico de alergia à penicilina incluem reação anafilática prévia e lesões cutâneas graves, como síndrome de Stevens-Johnson. Gestantes comprovadamente alérgicas à penicilina devem ser dessensibilizadas em ambiente hospitalar.",
    "Em casos suspeitos de alergia, precisa-se fazer anamnese criteriosa para qualificar a alteração, que poderá será realizada através de algumas perguntas, visando obter informações mais específicas sobre o passado de alergia à penicilina:\n" +
      "1. Você se lembra dos detalhes da reação?\n" +
      "2. Há quantos anos a reação ocorreu?\n" +
      "3. Como foi o tratamento?\n" +
      "4. Qual foi o resultado?\n" +
      "5. Por que você recebeu penicilina?\n" +
      "6. Você já fez algum tratamento com antibióticos depois desse evento?\n" +
      "7. Quais foram esses medicamentos? (lembrar que medicamentos como a ampicilina, a amoxicilina e as cefalosporinas são exemplos de drogas derivadas da penicilina)\n" +
      "8. Você já fez uso de penicilina ou de seus derivados após esse evento que você acha que foi alergia à penicilina?",
    "Dor e reação local, rash maculopapular, náusea, prurido, malestar, cefaleia, história de algum evento suspeito há mais de dez anos ou história familiar, entre outras manifestações, isoladamente não configuram alergia à penicilina.",  
  ];

  return (
    <Background style={styles.container}>
      <BodyContainer>
        <Title text="Teste de sensibilidade" />
          <BodyText  text={contentText[0]} withDivider />
          <BodyText  text={contentText[1]} withDivider />
        <Title text="Importante!" />
        <BodyText text={contentText[2]} withDivider />
      </BodyContainer>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
