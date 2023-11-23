import React from "react";
import { StyleSheet } from "react-native";
import { Background } from "../../components/Background";
import { BodyContainer } from "../../components/BodyContainer";
import { BodyText } from "../../components/BodyText";

function Definition() {

  const contentText = [
    'A sífilis é uma infecção bacteriana de caráter sistêmico, crônica, curável e exclusiva do ser humano. Seu agente etiológico é o Treponema pallidum, subespécie pallidum. Sua transmissão se dá principalmente por contato sexual, contudo, a infecção pode ser transmitida verticalmente para o feto durante a gestação de uma mulher com sífilis não tratada ou tratada de forma inadequadamente.',
    'Quando não tratada, evolui para estágios de gravidade variada, podendo acometer diversos sistemas do corpo. Na gestação, a sífilis pode apresentar consequências severas, como abortamento, prematuridade, natimortalidade, baixo peso ao nascer, má formação do feto, manifestações congênitas precoces ou tardias e/ou morte do recém-nascido.'
  ]

  return (
    <Background style={styles.container}>
      <BodyContainer>
        {contentText.map((text, index) => (
          <BodyText key={index} text={text} />
        ))}
      </BodyContainer>
    </Background>
  );
}

export { Definition };

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});