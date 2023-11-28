import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { Background } from "../../../components/Background";
import { BodyContainer } from "../../../components/BodyContainer";
import { BodyText } from "../../../components/BodyText";
import { MenuButton } from "../../../components/MenuButton";

export function Treatment() {
  const navigation = useNavigation();

  return (
    <Background style={styles.container}>
      
      <MenuButton
        title="Benzilpenicilina benzatina"
        icon="pill"
        onPress={() => navigation.navigate("BenzathineBenzylpenicillin")}
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
