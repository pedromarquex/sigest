import React from "react";
import { StyleSheet } from "react-native";
import { Background } from "../../../../components/Background";
import { BodyContainer } from "../../../../components/BodyContainer";
import { BodyText } from "../../../../components/BodyText";
import { Title } from "../../../../components/Title";

export function GeneralInformation() {
  const contentText = [
    "A sífilis gestacional é tratada como uma sífilis terciária ou latente tardia;",
    "A benzilpenicilina benzatina é o medicamento de escolha para o tratamento de sífilis, sendo a única droga com eficácia documentada durante a gestação;",
    "Qualquer outro tratamento realizado durante a gestação, para fins de definição de caso e abordagem terapêutica de sífilis congênita, é considerado tratamento não adequado da mãe; por conseguinte, o RN será notificado como sífilis congênita e submetido a avaliação clínica e laboratorial;",
    "Independentemente da presença de sinais e sintomas de sífilis, recomenda-se tratamento imediato com benzilpenicilina benzatina após somente um teste reagente para sífilis (teste treponêmico ou teste não treponêmico) em gestantes;",
    "A realização do tratamento com apenas um teste reagente para sífilis não exclui a necessidade de realização do segundo teste, de monitoramento laboratorial e de tratamento das parcerias sexuais.",
    "Para pacientes sintomáticos com suspeita de sífilis primária e secundária e impossibilidade de realização de qualquer teste diagnóstico, recomenda-se tratamento empírico imediato para sífilis recente, assim como para as respectivas parcerias sexuais.",
  ];

  return (
    <Background style={styles.container}>
      <BodyContainer>
        <Title text="Informações gerais" />
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
