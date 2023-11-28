import React from "react";
import { StyleSheet } from "react-native";
import { Background } from "../../../../components/Background";
import { MenuButton } from "../../../../components/MenuButton";
import { useNavigation } from "@react-navigation/native";

export function DirectExams() {
  const navigation = useNavigation();

  return (
    <Background style={styles.container}>
      <MenuButton
        title="Exames em campo escuro"
        icon="microscope"
        onPress={() => navigation.navigate("DarkFieldExams")}
      />
      <MenuButton
        title="Pesquisa direta com material corado"
        icon="microscope"
        onPress={() => navigation.navigate("DirectSearchWithStainedMaterial")}
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
