import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { Background } from "../../../../components/Background";
import { MenuButton } from "../../../../components/MenuButton";


export function BenzathineBenzylpenicillin() {
  const navigation = useNavigation();

  return (
    <Background style={styles.container}>
      <MenuButton
        title="Informações gerais"
        icon="pill"
        onPress={() => navigation.navigate("GeneralInformation")}
      />
      <MenuButton
        title="Aplicação"
        icon="pill"
        onPress={() => navigation.navigate("Application")}
      />
      <MenuButton
        title="Reação de Jarisch-Herxheimer"
        icon="pill"
        onPress={() => navigation.navigate("JarischHerxheimerReaction")}
      />
      <MenuButton
        title="Segurança e eficácia"
        icon="pill"
        onPress={() => navigation.navigate("SafetyAndEffectiveness")}
      />
      <MenuButton
        title="Teste de sensibilidade"
        icon="pill"
        onPress={() => navigation.navigate("SensitivityTest")}
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
