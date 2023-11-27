import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { Background } from "../../../components/Background";
import { BodyContainer } from "../../../components/BodyContainer";
import { BodyText } from "../../../components/BodyText";
import { MenuButton } from "../../../components/MenuButton";

export function Diagnosis() {
  const navigation = useNavigation();

  const contentText = [
    "Os testes utilizados para o diagnóstico de sífilis são divididos em duas categorias: exames diretos e testes imunológicos.",
  ];

  return (
    <Background style={styles.container}>
      <BodyContainer>
        {contentText.map((text, index) => (
          <BodyText key={index} text={text} />
        ))}
      </BodyContainer>
      <MenuButton
        title="Exames diretos"
        icon="microscope"
        onPress={() => navigation.navigate("DirectExams")}
      />
      <MenuButton
        title="Testes imunológicos"
        icon="microscope"
        onPress={() => navigation.navigate("ImmunologicalTests")}
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
