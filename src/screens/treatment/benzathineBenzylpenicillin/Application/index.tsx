import React from "react";
import { StyleSheet } from "react-native";
import { Background } from "../../../../components/Background";
import { BodyContainer } from "../../../../components/BodyContainer";
import { BodyText } from "../../../../components/BodyText";
import { Title } from "../../../../components/Title";

export function Application() {
  const contentText = [
   "Administrar exclusivamente por via intramuscular.\nA região preferencial: ventro-glútea (livre de vasos e nervos importantes, sendo tecido subcutâneo de menor espessura, o que resulta em poucos efeitos adversos e dor local).\nOutros locais alternativos para aplicação: região do vasto lateral da coxa e o dorso glúteo.",
   "O intervalo preconizado de administração é de uma semana entre as doses. Em gestantes, o esquema deve ser reiniciado se o intervalo ultrapassar os sete dias entre as doses.\nEm pessoas não gestantes, reiniciar o esquema se transcorrerem mais de 14 dias entre as doses.",
   "O monitoramento pós-tratamento com teste não treponêmico é recomendado a todos os pacientes para determinar se ocorreu resposta imunológica adequada.",
  ];

  return (
    <Background style={styles.container}>
      <BodyContainer>
        <Title text="Aplicação" />
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
