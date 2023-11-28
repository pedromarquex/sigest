import React from "react";
import { StyleSheet } from "react-native";
import { Background } from "../../components/Background";
import { BodyContainer } from "../../components/BodyContainer";
import { BodyText } from "../../components/BodyText";

export function CompulsoryNotification() {

  const contentText = [
    "A Sífilis é uma doença de notificação compulsória devendo ser notificado os casos de sífilis adquirida, sífilis em gestante e sífilis congênita. A notificação da doença é essencial para que se tenha conhecimento da evolução da doença, como também a implantação de medidas de controle e erradicação nas áreas mais afetadas."
  ]

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
    alignItems: 'center',
    justifyContent: 'center',
  },
});