import React from "react";
import { StyleSheet } from "react-native";
import { Background } from "../../../components/Background";
import { BodyContainer } from "../../../components/BodyContainer";
import { BodyText } from "../../../components/BodyText";
import { Title } from "../../../components/Title";

export function Tertiary() {
  const contentText = [
    "Ocorre em aproximadamente 15% a 25% das infecções não tratadas, após um período variável de latência, podendo surgir entre um e 40 anos depois do início da infecção. A inflamação causada pela sífilis nesse estágio provoca destruição tecidual. É comum o acometimento dos sistemas nervoso e cardiovascular.",
    "Além disso, verifica-se a formação de gomas sifilíticas (tumorações com tendência a liquefação) na pele, mucosas, ossos ou qualquer tecido. As lesões podem causar desfiguração, incapacidade e até morte.",
  ];

  return (
    <Background style={styles.container}>
      <BodyContainer>
        <Title text="Terciária" />
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
