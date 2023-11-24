import React from "react";
import { StyleSheet } from "react-native";
import { Background } from "../../../components/Background";
import { BodyContainer } from "../../../components/BodyContainer";
import { BodyText } from "../../../components/BodyText";
import { Title } from "../../../components/Title";

export function Primary() {
  const contentText = [
    "O tempo de incubação é de 10 a 90 dias (média de três semanas). A primeira manifestação é caracterizada por uma úlcera rica em treponemas, geralmente única e indolor, com borda bem definida e regular, base endurecida e fundo limpo, que surge no local de entrada da bactéria (pênis, vulva, vagina, colo uterino, ânus, boca ou outros locais do tegumento), sendo denominada “cancro duro”.",
    "A lesão primária é acompanhada de linfadenopatia regional (que acomete linfonodos localizados próximos ao cancro duro). Sua duração costuma variar muito, em geral de 03 a 08 semanas, e seu desaparecimento independe de tratamento. Pode não ser notada ou não ser valorizada pelo paciente. Em alguns casos, embora menos frequente, a lesão primária pode ser múltipla.",
  ];

  return (
    <Background style={styles.container}>
      <BodyContainer>
        <Title text="Primária" />
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
