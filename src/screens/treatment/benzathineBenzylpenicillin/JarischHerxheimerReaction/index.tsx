import React from "react";
import { StyleSheet } from "react-native";
import { Background } from "../../../../components/Background";
import { BodyContainer } from "../../../../components/BodyContainer";
import { Title } from "../../../../components/Title";
import { BodyText } from "../../../../components/BodyText";



export function JarischHerxheimerReaction() {
  const contentText = [
    "É um evento que pode ocorrer durante as 24 horas após a primeira dose de penicilina, em especial nas fases primária ou secundária.",
    "Exacerbação das lesões cutâneas, mal-estar geral, febre, cefaleia e artralgia, que regridem espontaneamente após 12 a 24 horas.",
    "Uso de analgésicos simples, conforme a necessidade, sem ser preciso descontinuar o tratamento.",
    "As pessoas com prescrição de tratamento devem ser alertadas quanto à possibilidade de ocorrência dessa reação, em especial para que se faça distinção em relação aos quadros de alergia à penicilina (apresentam-se frequentemente na forma de urticária e exantema pruriginoso).\n" +
    "Gestantes que apresentam essa reação podem ter risco de trabalho de parto prematuro em razão da liberação de prostaglandinas em altas doses. Porém, o risco de abortamento ou morte fetal é maior que os riscos potenciais da reação, em caso de tratamento inadequado para sífilis."
  ];

  return (
    <Background style={styles.container}>
      <BodyContainer>
        <Title text="Reação de Jarisch-Herxheimer" />
        <Title text="Definição:" />
        <BodyText text={contentText[0]} withDivider />
        <Title text="Manifestações clínicas:" />
        <BodyText text={contentText[1]} withDivider />
        <Title text="Controle:" />
        <BodyText text={contentText[2]} withDivider />
        <Title text="Importante!" style={{textAlign:"center"}}/>
        <BodyText text={contentText[3]} />
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
