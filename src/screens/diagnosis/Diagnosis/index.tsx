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
    "O diagnóstico de sífilis exige uma correlação entre dados clínicos, resultados de testes laboratoriais, histórico de infecções passadas e investigação de exposição recente. Apenas o conjunto de todas essas informações permitirá a correta avaliação diagnóstica de cada caso e, consequentemente, o tratamento adequado.",
    "A partir do diagnóstico de sífilis deverá ser feito a classificação do estágio clínico da doença de acordo com o tempo de infecção e mediante o estadiamento será dado o direcionamento assistencial com o tratamento adequado."
  ];

  return (
    <Background style={styles.container}>
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
    alignItems: "center",
    justifyContent: "center",
  },
});
