import React from "react";
import { StyleSheet } from "react-native";
import { Background } from "../../../components/Background";
import { BodyContainer } from "../../../components/BodyContainer";
import { BodyText } from "../../../components/BodyText";
import { Title } from "../../../components/Title";

export function Sexual() {
  const contentText = [
    "É a principal via de transmissão, sendo maior nos estágios iniciais da doença (primária e secundária), diminuindo gradualmente com o passar do tempo (sífilis latente recente/tardia). Essa maior transmissibilidade explica- se pela intensa multiplicação e grande quantidade de treponemas nas lesões, as quais são raras ou inexistentes por volta do segundo ano de infecção.",
  ];

  return (
    <Background style={styles.container}>
      <BodyContainer>
        <Title text="Sexual" />
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
