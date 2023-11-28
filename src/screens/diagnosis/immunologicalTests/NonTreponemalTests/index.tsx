import React from "react";
import { StyleSheet } from "react-native";
import { Background } from "../../../../components/Background";
import { BodyContainer } from "../../../../components/BodyContainer";
import { Title } from "../../../../components/Title";
import { BodyText } from "../../../../components/BodyText";



export function NonTreponemalTests() {
  const contentText = [
    "Títulos baixos (≤ 1:4) podem persistir por meses ou anos.\nPessoas com títulos baixos em testes não treponêmicos, sem registro de tratamento e sem data de infecção conhecida, são consideradas como portadoras de sífilis latente tardia, devendo ser tratadas.",
    "- VDRL\n- RPR\n- TRUST\n- USR",
  ];

  return (
    <Background style={styles.container}>
      <BodyContainer>
        <BodyText text={contentText[0]} withDivider />
        <Title text="Testes não treponêmicos:" />
        <BodyText text={contentText[1]} />
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
