import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Background } from "../../components/Background";
import { MenuButton } from "../../components/MenuButton";

function Home() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const paddingTop = Platform.OS === "android" ? 20 + insets.top : 20;

  const menuItems = [
    {
      title: "Definição e etiologia da sífilis",
      icon: "pill" as "pill",
      onPress: () => navigation.navigate("Definition"),
    },
    {
      title: "Classificação clínica da sífilis",
      icon: "pill" as "pill",
      onPress: () => navigation.navigate("Classification"),
    },
    {
      title: "Transmissão",
      icon: "pill" as "pill",
      onPress: () => navigation.navigate("Transmission"),
    },
    {
      title: "Diagnóstico",
      icon: "pill" as "pill",
      onPress: () => navigation.navigate("Diagnosis"),
    },
    {
      title: "Tratamento",
      icon: "pill" as "pill",
      onPress: () => navigation.navigate("Treatment"),
    },
    {
      title: "Seguimento pós-tratamento",
      icon: "pill" as "pill",
      onPress: () => navigation.navigate("PostTreatmentFollowUp"),
    },
    {
      title: "Notificação compulsória",
      icon: "pill" as "pill",
      onPress: () => navigation.navigate("CompulsoryNotification"),
    },
    {
      title: "Referências",
      icon: "pill" as "pill",
      onPress: () => navigation.navigate("References"),
    },
  ];

  return (
    <Background
      contentContainerStyle={{
        paddingTop,
      }}
    >
      {menuItems.map((item, index) => (
        <MenuButton
          key={index}
          title={item.title}
          icon={item.icon}
          onPress={item.onPress}
        />
      ))}
    </Background>
  );
}

export { Home };
