import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { Background } from "../../../components/Background";
import { BodyContainer } from "../../../components/BodyContainer";
import { BodyText } from "../../../components/BodyText";
import { MenuButton } from "../../../components/MenuButton";

export function Classification() {
  const navigation = useNavigation();

  const contentText = [
    "A sífilis é dividida em estágios que orientam tratamento e monitoramento da infecção:" +
      "\n - Sífilis recente (primária, secundária e latente recente): até um ano de evolução;" +
      "\n - Sífilis tardia (latente tardia e terciária): mais de um ano de evolução.",
  ];

  return (
    <Background style={styles.container}>
      <BodyContainer>
        {contentText.map((text, index) => (
          <BodyText key={index} text={text} />
        ))}
      </BodyContainer>
      <MenuButton
        title="Primária"
        icon="microscope"
        onPress={() => navigation.navigate("Primary")}
      />
      <MenuButton
        title="Secundária"
        icon="microscope"
        onPress={() => navigation.navigate("Secondary")}
      />
      <MenuButton
        title="Latente"
        icon="microscope"
        onPress={() => navigation.navigate("Latent")}
      />
      <MenuButton
        title="Terciária"
        icon="microscope"
        onPress={() => navigation.navigate("Terciary")}
      />
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
