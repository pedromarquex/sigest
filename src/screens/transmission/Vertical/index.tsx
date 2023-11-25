import React from "react";
import { StyleSheet } from "react-native";
import { Background } from "../../../components/Background";
import { BodyContainer } from "../../../components/BodyContainer";
import { BodyText } from "../../../components/BodyText";
import { Title } from "../../../components/Title";

export function Vertical() {
  const contentText = [
    "A sífilis pode ser transmitida da mãe para o feto, em gestantes não tratadas ou tratadas inadequadamente, principalmente intraútero, com taxa de 80%. No entanto, também pode ser transmitida na passagem do feto pelo canal de parto.",
  ];

  return (
    <Background style={styles.container}>
      <BodyContainer>
        <Title text="Vertical" />
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
