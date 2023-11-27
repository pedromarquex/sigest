import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { Background } from "../../../components/Background";
import { MenuButton } from "../../../components/MenuButton";

export function Transmission() {
  const navigation = useNavigation();

  return (
    <Background style={styles.container}>
      <MenuButton
        title="Sexual"
        icon="microscope"
        onPress={() => navigation.navigate("Sexual")}
      />
      <MenuButton
        title="Vertical"
        icon="microscope"
        onPress={() => navigation.navigate("Vertical")}
      />
      <MenuButton
        title="Sanguínea"
        icon="microscope"
        onPress={() => navigation.navigate("BloodTransmission")}
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
