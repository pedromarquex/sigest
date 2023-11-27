import React from "react";
import { StyleSheet } from "react-native";
import { Background } from "../../../../../components/Background";
import { BodyContainer } from "../../../../../components/BodyContainer";
import { Title } from "../../../../../components/Title";
import { BodyText } from "../../../../../components/BodyText";


export function QuickTests() {
  const contentText = [
    "A sífilis pode ser transmitida da mãe para o feto, em gestantes não tratadas ou tratadas inadequadamente, principalmente intraútero, com taxa de 80%. No entanto, também pode ser transmitida na passagem do feto pelo canal de parto.",
    "A sífilis pode ser transmitida da mãe para o feto, em gestantes não tratadas ou tratadas inadequadamente, principalmente intraútero, com taxa de 80%. No entanto, também pode ser transmitida na passagem do feto pelo canal de parto.",
    "A sífilis pode ser transmitida da mãe para o feto, em gestantes não tratadas ou tratadas inadequadamente, principalmente intraútero, com taxa de 80%. No entanto, também pode ser transmitida na passagem do feto pelo canal de parto.",
    "A sífilis pode ser transmitida da mãe para o feto, em gestantes não tratadas ou tratadas inadequadamente, principalmente intraútero, com taxa de 80%. No entanto, também pode ser transmitida na passagem do feto pelo canal de parto.",
  ];

  return (
    <Background style={styles.container}>
      <BodyContainer>
        <Title text="Testes rápidos" />
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
