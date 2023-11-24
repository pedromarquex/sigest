import React from "react";
import { StyleSheet } from "react-native";
import { Background } from "../../../components/Background";
import { BodyContainer } from "../../../components/BodyContainer";
import { BodyText } from "../../../components/BodyText";
import { Title } from "../../../components/Title";

export function Latent() {
  const contentText = [
    "Período em que não se observa nenhum sinal ou sintoma. O diagnóstico faz-se exclusivamente pela reatividade dos testes treponêmicos e não treponêmicos. A maioria dos diagnósticos ocorre nesse estágio. A sífilis latente é dividida em latente recente (até um ano de infecção) e latente tardia (mais de um ano de infecção). Aproximadamente 25% dos pacientes não tratados intercalam lesões de secundarismo com períodos de latência.",
  ];

  return (
    <Background style={styles.container}>
      <BodyContainer>
        <Title text="Latente" />
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
