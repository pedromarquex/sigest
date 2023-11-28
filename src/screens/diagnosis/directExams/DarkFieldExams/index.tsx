import React from "react";
import { StyleSheet } from "react-native";
import { Background } from "../../../../components/Background";
import { BodyContainer } from "../../../../components/BodyContainer";
import { Title } from "../../../../components/Title";
import { BodyText } from "../../../../components/BodyText";



export function DarkFieldExams() {
  const contentText = [
    "Lesões primárias e secundárias.",
    "Exsudato seroso das lesões ativas para observação dos treponemas viáveis em amostras frescas.",
    "Alta sensibilidade e especificidade Depende da experiência do técnico Teste eficiente e de baixo custo para diagnóstico direto de sífilis",
    "Infecção ativa. Considerar diagnóstico diferencial com treponemas não patogênicos e outros organismos espiralados.",
    "   Considerar as possibilidades:\n   1. O número T. pallidum na amostra não foi suficiente para sua detecção;\n   2. A lesão está próxima à cura natural;\n   3. A pessoa recebeu tratamento sistêmico ou tópico.",
    "Positividade em pessoas com cancro primário pode ser anterior à soroconversão (positividade nos testes imunológicos) Não é recomendado para lesões de cavidade oral.",
  ];

  return (
    <Background style={styles.container}>
      <BodyContainer>
        <Title text="Exames em campo escuro" />
        <Title text="Manifestações clínicas de sífilis:" />
        <BodyText text={contentText[0]} withDivider />
        <Title text="Material:" />
        <BodyText text={contentText[1]} withDivider />
        <Title text="Sensibilidade/especificidade:" />
        <BodyText text={contentText[2]} withDivider />
        <Title text="Significado clínico:" />
        <Title text="Positivo" />
        <BodyText text={contentText[3]} />
        <Title text="Negativo" />
        <BodyText text={contentText[4]} withDivider /> 
        <Title text="Observações" />
        <BodyText text={contentText[5]} />
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
