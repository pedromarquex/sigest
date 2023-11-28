import React from "react";
import { StyleSheet } from "react-native";
import { Background } from "../../../../components/Background";
import { BodyContainer } from "../../../../components/BodyContainer";
import { BodyText } from "../../../../components/BodyText";
import { Title } from "../../../../components/Title";

export function SafetyAndEffectiveness() {
  const contentText = [
    "É rara a probabilidade de reação adversa, em especial as reações graves.",
    "A possibilidade de reação anafilática é de 0,002%.",
    "A adrenalina é a droga de escolha para o tratamento da reação de anafilaxia e o atendimento deverá ser conforme preconizado pelo Caderno da Atenção Básica nº 28, v. II, Acolhimento à Demanda Espontânea: Queixas mais comuns na Atenção Básica, capítulo 2: Queixas comuns no atendimento à demanda espontânea e urgências/emergências, p. 25.",
    "Destaca-se a Decisão nº 0094/2015, do Conselho Federal de Enfermagem – Cofen, que reforça a importância da administração da benzilpenicilina benzatina pelos profissionais de enfermagem na Atenção Básica, além da Nota Técnica Cofen/CTLN nº 03/2017, que reafirma esse compromisso de cuidado à saúde.",
  ];

  return (
    <Background style={styles.container}>
      <BodyContainer>
        <Title text="Segurança e eficácia" />
        {contentText.map((text, index) => (
          <BodyText key={index} text={text} withDivider={index != contentText.length - 1} />
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
