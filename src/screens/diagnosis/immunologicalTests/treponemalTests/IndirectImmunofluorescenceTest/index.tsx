import React from "react";
import { StyleSheet } from "react-native";
import { Background } from "../../../../../components/Background";
import { BodyContainer } from "../../../../../components/BodyContainer";
import { Title } from "../../../../../components/Title";
import { BodyText } from "../../../../../components/BodyText";


export function IndirectImmunofluorescenceTest() {
  const contentText = [
    "(FTA-Abs, do inglês Fluorescent Treponemal Antibody-Absorption).",
  ];

  return (
    <Background style={styles.container}>
      <BodyContainer>
        <Title text="Testes de hemaglutinação" />
        {contentText.map((text, index) => (
          <BodyText key={index} text={text} withDivider={index != contentText.length - 1} />
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
