import React from "react";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Background } from "../../../../components/Background";
import { MenuButton } from "../../../../components/MenuButton";

export function ImmunologicalTests() {
  const navigation = useNavigation();

  return (
    <Background style={styles.container}>
      <MenuButton
        title="Testes treponêmicos "
        icon="microscope"
        onPress={() => navigation.navigate("TreponemalTests")}
      />
      <MenuButton
        title="Testes não treponêmicos "
        icon="microscope"
        onPress={() => 1}
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
