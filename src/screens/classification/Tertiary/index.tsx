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

import TertiaryImage from "../../../assets/img/tertiary.png";

export function Tertiary() {
  const contentText = [
    "Ocorre em aproximadamente 15% a 25% das infecções não tratadas, após um período variável de latência, podendo surgir entre um e 40 anos depois do início da infecção. A inflamação causada pela sífilis nesse estágio provoca destruição tecidual. É comum o acometimento dos sistemas nervoso e cardiovascular.",
    "Além disso, verifica-se a formação de gomas sifilíticas (tumorações com tendência a liquefação) na pele, mucosas, ossos ou qualquer tecido. As lesões podem causar desfiguração, incapacidade e até morte.",
  ];

  const [open, setOpen] = React.useState(false)

  return (
    <Background style={styles.container}>
      <BodyContainer>
        <Title text="Terciária" />
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
              source={TertiaryImage}
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
