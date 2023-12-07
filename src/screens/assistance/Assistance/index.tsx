import React from "react";
import { StyleSheet } from "react-native";
import { Background } from "../../../components/Background";
import { BodyContainer } from "../../../components/BodyContainer";
import { BodyText } from "../../../components/BodyText";
import { MenuButton } from "../../../components/MenuButton";
import { AssistanceStackScreenProps } from "../../../routes/assistance/assistanceStack.types";

export function Assistance({ navigation}: AssistanceStackScreenProps<"Assistance">) {

  const contentText = [
    "Durante o pré-natal, a gestante dever ser testada para sífilis. Recomenda-se o rastreamento na primeira consulta, preferencialmente no primeiro trimestre, no terceiro trimestre e na admissão para o parto. Aquelas que apresentam perdas fetais precoces e tardias devem ser testadas no momento da admissão na maternidade, independente do trimestre de gravidez, sendo testadas ainda, aquelas expostas a risco e violência sexual.",
    "Para a testagem da gestante, deverá ser utilizado o teste treponêmico e teste não treponêmico. Entretanto, somente um teste reagente para sífilis, já confirma o diagnóstico da doença, devendo a gestante ser tratada imediatamente, sem aguarda o resultado do segundo teste.",
    "A benzilpenicilina benzatina é o medicamento de escolha para o tratamento de sífilis, sendo a única droga com eficácia documentada durante a gestação. Outras opções para não gestantes, como a doxiciclina e a ceftriaxona, devem ser usadas somente em conjunto com um acompanhamento clínico e laboratorial rigoroso, para garantir resposta clínica e cura sorológica.",
    "Recomenda-se o tratamento imediato com benzilpenicilina benzatina após somente um teste reagente para sífilis (teste treponêmico ou teste não treponêmico) nas seguintes situações (independentemente da presença de sinais e sintomas de sífilis):\n- Gestantes;\n- Vítimas de violência sexual;\n- Pessoas com chance de perda de seguimento (que não retornarão ao serviço);\n- Pessoas com sinais/sintomas de sífilis primária ou secundária;\n- Pessoas sem diagnóstico prévio de sífilis."
  ];

  return (
    <Background style={styles.container}>
      <MenuButton
        title="Interpretação dos Testes"
        icon="microscope"
        onPress={() => navigation.navigate("BasicInfo")}
      />
      <BodyContainer>
        {contentText.map((text, index) => (
          <BodyText key={index} text={text} withDivider />
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
