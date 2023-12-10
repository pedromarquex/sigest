import React from "react";
import { Image, StyleSheet } from "react-native";
import { Background } from "../../../components/Background";
import { BodyContainer } from "../../../components/BodyContainer";
import { BodyText } from "../../../components/BodyText";
import { Button } from "../../../components/Button";
import { ButtonGhost } from "../../../components/ButtonGhost";
import { Dialog } from "../../../components/Dialog/dialog";
import { ReferenceText } from "../../../components/ReferenceText";
import { Title } from "../../../components/Title";

import SecondaryImage from "../../../assets/img/secondary.png";

export function DiagnosisContent() {
  const contentText = [
    "O diagnóstico de sífilis exige uma correlação entre dados clínicos, resultados de testes laboratoriais, histórico de infecções passadas e investigação de exposição recente. Apenas o conjunto de todas essas informações permitirá a correta avaliação diagnóstica de cada caso e, consequentemente, o tratamento adequado.",
    "A partir do diagnóstico de sífilis deverá ser feito a classificação do estágio clínico da doença de acordo com o tempo de infecção e mediante o estadiamento será dado o direcionamento assistencial com o tratamento adequado."
  ];

  return (
    <Background style={styles.container}>
      <BodyContainer>
        {contentText.map((text, index) => (
          <BodyText key={index} text={text} />
        ))}
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
