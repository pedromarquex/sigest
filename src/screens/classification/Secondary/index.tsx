import React from "react";
import { StyleSheet } from "react-native";
import { Background } from "../../../components/Background";
import { BodyContainer } from "../../../components/BodyContainer";
import { BodyText } from "../../../components/BodyText";
import { Title } from "../../../components/Title";

export function Secondary() {
  const contentText = [
    "Ocorre em média entre seis semanas e seis meses após a cicatrização do cancro, ainda que manifestações iniciais, recorrentes ou subentrantes do secundarismo possam surgir em um período de até um ano. Excepcionalmente, as lesões podem ocorrer em concomitância com a manifestação primária. As manifestações são muito variáveis, mas tendem a seguir uma cronologia própria. Inicialmente, apresenta-se uma erupção macular eritematosa pouco visível (roséola), principalmente no tronco e raiz dos membros. Nessa fase, são comuns as placas em mucosas, assim como lesões acinzentadas e pouco visíveis nas mucosas.",
    "As lesões cutâneas progridem para lesões mais evidentes, papulosas e eritemato acastanhadas que podem atingir todo o tegumento, sendo frequentes nos genitais. A lesão primária é acompanhada de linfadenopatia regional (que acomete linfonodos localizados próximos ao cancro duro). Sua duração costuma variar muito, em geral de 03 a 08 semanas, e seu desaparecimento independe de tratamento. Pode não ser notada ou não ser valorizada pelo paciente. Em alguns casos, embora menos frequente, a lesão primária pode ser múltipla.",
  ];

  return (
    <Background style={styles.container}>
      <BodyContainer>
        <Title text="Secundária" />
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
