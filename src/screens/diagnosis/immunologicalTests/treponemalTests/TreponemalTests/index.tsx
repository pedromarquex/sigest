import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { MenuButton } from "../../../../../components/MenuButton";
import { Background } from "../../../../../components/Background";


export function TreponemalTests() {
  const navigation = useNavigation();

  return (
    <Background style={styles.container}>
      <MenuButton
        title="Testes rápidos"
        icon="microscope"
        onPress={() => navigation.navigate("QuickTests")}
      />
      <MenuButton
        title="Testes de hemaglutinação"
        icon="microscope"
        onPress={() => navigation.navigate("HemagglutinationTests")}
      />
      <MenuButton
        title="Teste de imunofluorescência indireta"
        icon="microscope"
        onPress={() => navigation.navigate("IndirectImmunofluorescenceTest")
      }
      />
      <MenuButton
        title="Ensaios imunoenzimáticos "
        icon="microscope"
        onPress={() => navigation.navigate("EnzymeImmunoassays")}
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
