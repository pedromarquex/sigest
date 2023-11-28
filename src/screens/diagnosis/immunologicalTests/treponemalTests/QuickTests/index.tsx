import React from "react";
import { StyleSheet } from "react-native";
import { Background } from "../../../../../components/Background";
import { BodyContainer } from "../../../../../components/BodyContainer";
import { Title } from "../../../../../components/Title";
import { BodyText } from "../../../../../components/BodyText";


export function QuickTests() {
  const contentText = [
    "São os primeiros a se tornarem reagentes. Na maioria das vezes, permanecem reagentes por toda a vida, mesmo após o tratamento. São importantes para o diagnóstico, mas não estão indicados para monitoramento da resposta ao tratamento.",
    "Utilizam principalmente a metodologia de imunocromatografia de fluxo lateral ou de plataforma de duplo percurso – DPP. São os mais indicados para início de diagnóstico.",
    "Os testes rápidos são práticos e de fácil execução, com leitura do resultado em, no máximo, 30 minutos. Utilizam amostras de sangue total colhidas por punção digital ou venosa. Têm a vantagem de ser realizados no momento da consulta, possibilitando tratamento imediato.",
  ];

  return (
    <Background style={styles.container}>
      <BodyContainer>
        <Title text="Testes rápidos" />
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
