import React from "react";
import { StyleSheet } from "react-native";
import { Background } from "../../../../../components/Background";
import { BodyContainer } from "../../../../../components/BodyContainer";
import { Title } from "../../../../../components/Title";
import { BodyText } from "../../../../../components/BodyText";


export function EnzymeImmunoassays() {
  const contentText = [
    "Os testes ELISA, do inglês EnzymeLinked Immunosorbent Assay) e suas variações, como os ensaios de quimiluminescência (CMIA, do inglês Chemiluminescent Microparticle Immunoassay). A vantagem desses ensaios é sua elevada sensibilidade e capacidade de automação.",
    "Detectam anticorpos anticardiolipina não específicos para os antígenos do T. pallidum. Permitem uma análise qualitativa e quantitativa.",
    "O resultado final dos testes reagentes, portanto, deve ser expresso em títulos Quantificáveis (ex.: 1:2, 1:4, 1:8).\n\nImportantes para o diagnóstico (como primeiro teste ou teste complementar) e também para o monitoramento da resposta ao tratamento e controle de cura.",
    "Tornam-se reagentes em cerca de uma a três semanas após o aparecimento do cancro duro.",
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
