import React from "react";
import { Image, StyleSheet } from "react-native";
import { Background } from "../../../components/Background";
import { BodyContainer } from "../../../components/BodyContainer";
import { BodyText } from "../../../components/BodyText";
import { Button } from "../../../components/Button";
import { ButtonGhost } from "../../../components/ButtonGhost";
import { Dialog } from "../../../components/Dialog/dialog";
import { ReferenceText } from "../../../components/ReferenceText";
import { Title } from "../../../components/Title";

import SecondaryImage from "../../../assets/img/secondary.png";

export function Secondary() {
  const contentText = [
    "Ocorre em média entre seis semanas e seis meses após a cicatrização do cancro, ainda que manifestações iniciais, recorrentes ou subentrantes do secundarismo possam surgir em um período de até um ano. Excepcionalmente, as lesões podem ocorrer em concomitância com a manifestação primária. As manifestações são muito variáveis, mas tendem a seguir uma cronologia própria. Inicialmente, apresenta-se uma erupção macular eritematosa pouco visível (roséola), principalmente no tronco e raiz dos membros. Nessa fase, são comuns as placas em mucosas, assim como lesões acinzentadas e pouco visíveis nas mucosas.",
    "As lesões cutâneas progridem para lesões mais evidentes, papulosas e eritemato acastanhadas que podem atingir todo o tegumento, sendo frequentes nos genitais.",
  ];

  const [open, setOpen] = React.useState(false)

  return (
    <Background style={styles.container}>
      <BodyContainer>
        <Title text="Secundária" />
        {contentText.map((text, index) => (
          <BodyText key={index} text={text} />
        ))}
        <ButtonGhost
          text="Ver Imagem"
          onPress={() => setOpen(true)}
        />
        <Dialog
          open={open}
          setOpen={setOpen}
          >
            <Image
              source={SecondaryImage}
              width={200}
              height={200}
              resizeMode="contain"
            />
            <ReferenceText 
              text="Fonte: (Pinheiro, 2018)."
              style={{
                marginTop: 10
              }}
            />
            <Button
              text="Fechar"
              onPress={() => setOpen(false)}
              style={{
                width: 300,
                marginTop: 20
              }}
            />
          </Dialog>
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
