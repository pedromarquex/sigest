import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Background } from "../../../components/Background";
import { BodyContainer } from "../../../components/BodyContainer";
import { BodyText } from "../../../components/BodyText";
import { Button } from "../../../components/Button";
import { Dialog } from "../../../components/Dialog/dialog";
import { Title } from "../../../components/Title";
import { AssistanceStackScreenProps } from "../../../routes/assistance/assistanceStack.types";
import { BasicInfoState } from "../BasicData";
import { HistoryState } from "../History";

interface ResultState extends BasicInfoState, HistoryState {}

enum ResultTests {
  POSITIVE_AND_POSITIVE = "POSITIVE_AND_POSITIVE",
  POSITIVE_AND_NEGATIVE = "POSITIVE_AND_NEGATIVE",
  NEGATIVE_AND_POSITIVE = "NEGATIVE_AND_POSITIVE",
  NEGATIVE_AND_NEGATIVE = "NEGATIVE_AND_NEGATIVE",
}

enum ResultTitle {
  POSITIVE_AND_POSITIVE = "POSITIVE_AND_POSITIVE",
  POSITIVE_AND_NEGATIVE = "POSITIVE_AND_NEGATIVE",
  NEGATIVE_AND_POSITIVE = "NEGATIVE_AND_POSITIVE",
  NEGATIVE_AND_NEGATIVE = "NEGATIVE_AND_NEGATIVE",
  POSITIVE_AND_BLANK = "POSITIVE_AND_BLANK",
  NEGATIVE_AND_BLANK = "NEGATIVE_AND_BLANK",
  BLANK_AND_POSITIVE = "BLANK_AND_POSITIVE",
  BLANK_AND_NEGATIVE = "BLANK_AND_NEGATIVE",
}

enum ResultMapper {
  POSITIVE_AND_POSITIVE = "TESTE TREPONÊMICO REAGENTE E TESTE NÃO TREPONÊMICO REAGENTE",
  POSITIVE_AND_NEGATIVE = "TESTE TREPONÊMICO REAGENTE E TESTE NÃO TREPONÊMICO NÃO REAGENTE",
  NEGATIVE_AND_POSITIVE = "TESTE NÃO TREPONÊMICO REAGENTE E TESTE TREPONÊMICO NÃO REAGENTE",
  NEGATIVE_AND_NEGATIVE = "TESTE TREPONÊMICO NÃO REAGENTE OU TESTE NÃO TREPONÊMICO NÃO REAGENTE",
  POSITIVE_AND_BLANK = "TESTE TREPONÊMICO REAGENTE",
  NEGATIVE_AND_BLANK = "TESTE TREPONÊMICO NÃO REAGENTE",
  BLANK_AND_POSITIVE = "TESTE NÃO TREPONÊMICO REAGENTE",
  BLANK_AND_NEGATIVE = "TESTE NÃO TREPONÊMICO NÃO REAGENTE",
}

export function Result({
  navigation,
  route,
}: AssistanceStackScreenProps<"Result">): JSX.Element {
  const data = route.params.data as unknown as ResultState;

  const [open, setOpen] = React.useState(true);
  const [resultTests, setResultTests] = React.useState<ResultTests>(null);
  const [title, setTitle] = React.useState<ResultTitle>(null);

  console.log(title);

  useEffect(() => {
    if (data) {
      if (
        (data.treponeumTestResult === "REAGENTE" &&
          data.nonTreponeumTestResult === "REAGENTE") ||
        (data.treponeumTestResult === "REAGENTE" &&
          !data.hasNonTreponeumTest) ||
        (data.nonTreponeumTestResult === "REAGENTE" && !data.hasTreponeumTest)
      ) {
        setResultTests(ResultTests.POSITIVE_AND_POSITIVE);
      } else if (
        data.treponeumTestResult === "NAO_REAGENTE" &&
        data.nonTreponeumTestResult === "NAO_REAGENTE"
      ) {
        setResultTests(ResultTests.NEGATIVE_AND_NEGATIVE);
      } else if (
        data.treponeumTestResult === "REAGENTE" &&
        data.nonTreponeumTestResult === "NAO_REAGENTE"
      ) {
        setResultTests(ResultTests.POSITIVE_AND_NEGATIVE);
      } else {
        setResultTests(ResultTests.NEGATIVE_AND_POSITIVE);
      }
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      if (
        data.treponeumTestResult === "REAGENTE" &&
        data.nonTreponeumTestResult === "REAGENTE"
      ) {
        setTitle(ResultTitle.POSITIVE_AND_POSITIVE);
      } else if (
        data.treponeumTestResult === "NAO_REAGENTE" &&
        data.nonTreponeumTestResult === "NAO_REAGENTE"
      ) {
        setTitle(ResultTitle.NEGATIVE_AND_NEGATIVE);
      } else if (
        data.treponeumTestResult === "REAGENTE" &&
        data.nonTreponeumTestResult === "NAO_REAGENTE"
      ) {
        setTitle(ResultTitle.POSITIVE_AND_NEGATIVE);
      } else if (
        data.treponeumTestResult === "NAO_REAGENTE" &&
        data.nonTreponeumTestResult === "REAGENTE"
      ) {
        setTitle(ResultTitle.NEGATIVE_AND_POSITIVE);
      } else if (
        data.treponeumTestResult === "REAGENTE" &&
        !data.hasNonTreponeumTest
      ) {
        setTitle(ResultTitle.POSITIVE_AND_BLANK);
      } else if (
        data.treponeumTestResult === "NAO_REAGENTE" &&
        !data.hasNonTreponeumTest
      ) {
        setTitle(ResultTitle.NEGATIVE_AND_BLANK);
      } else if (
        data.nonTreponeumTestResult === "REAGENTE" &&
        !data.hasTreponeumTest
      ) {
        setTitle(ResultTitle.BLANK_AND_POSITIVE);
      } else if (
        data.nonTreponeumTestResult === "NAO_REAGENTE" &&
        !data.hasTreponeumTest
      ) {
        setTitle(ResultTitle.BLANK_AND_NEGATIVE);
      }
    }
  }, [data]);

  const modalText = {
    POSITIVE_AND_POSITIVE: "Diagnóstico de sífilis",
    POSITIVE_AND_NEGATIVE: "Realizar um terceiro teste",
    NEGATIVE_AND_POSITIVE: "Realizar um terceiro teste",
    NEGATIVE_AND_NEGATIVE: "Ausência de infecção ou período de incubação",
    POSITIVE_AND_BLANK:
      "Realizar teste não treponêmico (VDRL), e independente da presença de sinais e sintomas de sífilis, recomenda-se o tratamento imediato com a Benzilpenicilina Benzatina após somente um teste reagente para sífilis (teste treponêmico ou teste não treponêmico).",
    NEGATIVE_AND_BLANK:
      "Realizar teste não treponêmico (VDRL).\nCaso reagente, realizar tratamento para sífilis, independente do teste treponêmico ter sido não reagente.\nCaso não reagente: ausência de sífilis.",
    BLANK_AND_POSITIVE:
      "Realizar teste treponêmico (teste rápido) e independente da presença de sinais e sintomas de sífilis, recomenda-se o tratamento de sífilis após somente um teste reagente.",
    BLANK_AND_NEGATIVE:
      "Realizar teste treponêmico (teste rápido).\nCaso não reagente: ausência de sífilis.\nCaso reagente: Realizar tratamento para sífilis, independentemente dos sinais e sintomas de sífilis, recomenda-se o tratamento de sífilis com apenas um dos testes reagente.",
  };

  const contentText = {
    POSITIVE_AND_POSITIVE: {
      INTERPRETATION: "Diagnóstico de sífilis",
      RECOMENDATION:
        "Sífilis, tratar, realizar monitoramento com teste não treponêmico (VDRL) mensal e notificar. Realizar também sorologias para HIV, Hepatite B e C. Caso a gestante informe que tem parceiro realizar teste e, caso reagente tratar a infecção.",
      INDICATED_TREATMENT:
        "Será conforme a Classificação do estágio clínico a ser definida de acordo com o tempo de infecção e o histórico de tratamento.",
      CLINICAL_CONDUCT: [
        {
          STAGING:
            "Sífilis recente: sífilis primária, secundária e latente recente (com até um 01 de evolução).",
          THERAPEUTIC_SCHEME:
            "Benzilpenicilina benzatina 2,4 milhões UI, IM, dose única (1,2 milhão UI em cada glúteo).",
        },
        {
          STAGING:
            "Sífilis tardia: sífilis latente tardia ou latente com duração ignorada e sífilis terciaria (com mais de 01 ano de evolução).",
          THERAPEUTIC_SCHEME:
            "2,4 milhões UI, 1x/semana (1,2 milhão UI em cada glúteo) por 3 semanas.\nDose total: 7,2 milhões UI.",
        },
        {
          ALTERNATIVE:
            "Doxiciclina 100 mg, VO, 2x ao dia, por 15 dias (exceto gestantes)\nOU\nCeftriaxona 1 g, IV ou IM, 1x ao dia, por 8 a 10 dias para gestantes e não gestantes.",
        },
      ],
      FOLLOW_UP:
        "Após o tratamento adequado, o controle deve ser feito mensalmente nas gestantes até o parto e após o parto, o seguimento é trimestral até o 12º mês de acompanhamento (3, 6, 9 e 12 meses). Considera-se sucesso de tratamento para sífilis em gestante, após a última dose de penicilina:\n" +
        "- Diminuição da titulação do teste não treponêmico em duas diluições (ex.: 1:64 para 1:16) em até três meses e quatro diluições (ex.: 1:64 para 1:4) em até seis meses, com evolução até a sororreversão (teste não treponêmico não reagente);\n" +
        "- Diminuição na titulação em duas diluições em até seis meses para sífilis recente e queda na titulação em duas diluições em até 12 meses para sífilis tardia.\n\n" +
        "Será necessário o retratamento da gestante e parcerias, caso haja a possibilidade de falha terapêutica ou reinfecção, sendo os critérios:\n" +
        "- Aumento da titulação em duas diluições (Exemplo: 1:16 para 1:64 ou 1:4 para 1:16 em qualquer momento do seguimento;\n" +
        "- Não redução da titulação no intervalo de seis meses (sífilis primário, secundária e latente recente ou 12 meses (sífilis latente tardia ou terciária) após o tratamento adequado (Exemplo: de 1:32 para 1:8 ou de 1:128 para 1:32);\n" +
        "- Persistência ou recorrência de sinais e sintomas clínicos.",
      INTERPRETATION_2: "Cicatriz sorológica ",
      RECOMENDATION_2:
        "Caso seja Cicatriz sorológica: ver se tratamento anterior está documentado com queda da titulação em pelo menos duas diluições. Se confirmado caso de cicatriz sorológica, está descartada a possibilidade de reinfecção no período analisado.",
      CLINICAL_CONDUCT_2:
        "Descartada a infecção ou possibilidade de reinfecção, apenas orientar quanto às medidas de prevenção e fazer o rastreio da sífilis novamente no terceiro trimestre de gravidez.",
      ATTENTION:
        "Caso a gestante tenha parceiro, solicitar para que o mesmo compareça a USB para realizar tratamento.",
    },
    POSITIVE_AND_NEGATIVE: {
      INTERPRETATION:
        "Iniciar tratamento por ser gestante e realizar um terceiro teste treponêmico com metodologia diferente do primeiro, podendo ser um FTA-ABS.",
      RECOMENDATION:
        "Sífilis, tratar, realizar monitoramento com teste não treponêmico (VDRL) mensal e notificar. Realizar também sorologias para HIV, Hepatite B e C. Caso a gestante informe que tem parceiro realizar teste e, caso reagente tratar a infecção.",
      INDICATED_TREATMENT:
        "Será conforme a Classificação do estágio clínico a ser definida de acordo com o tempo de infecção e o histórico de tratamento.",
      CLINICAL_CONDUCT: [
        {
          STAGING:
            "Sífilis recente: sífilis primária, secundária e latente recente (com até um 01 de evolução).",
          THERAPEUTIC_SCHEME:
            "Benzilpenicilina benzatina 2,4 milhões UI, IM, dose única (1,2 milhão UI em cada glúteo).",
        },
        {
          STAGING:
            "Sífilis tardia: sífilis latente tardia ou latente com duração ignorada e sífilis terciaria (com mais de 01 ano de evolução).",
          THERAPEUTIC_SCHEME:
            "2,4 milhões UI, 1x/semana (1,2 milhão UI em cada glúteo) por 3 semanas.\nDose total: 7,2 milhões UI.",
        },
        {
          ALTERNATIVE:
            "Doxiciclina 100mg, VO, 2x ao dia, por 15 dias (exceto gestantes)\nOU\nCeftriaxona 1g, IV ou IM, 1x ao dia, por 8 a 10 dias para gestantes e não gestantes.",
        },
      ],
      FOLLOW_UP:
        "Após o tratamento adequado, o controle deve ser feito mensalmente nas gestantes até o parto e após o parto, o seguimento é trimestral até o 12º mês de acompanhamento (3, 6, 9 e 12 meses). Considera-se sucesso de tratamento para sífilis em gestante, após a última dose de penicilina:\n" +
        "- Diminuição da titulação do teste não treponêmico em duas diluições (ex.: 1:64 para 1:16) em até três meses e quatro diluições (ex.: 1:64 para 1:4) em até seis meses, com evolução até a sororreversão (teste não treponêmico não reagente);\n" +
        "- Diminuição na titulação em duas diluições em até seis meses para sífilis recente e queda na titulação em duas diluições em até 12 meses para sífilis tardia.\n\n" +
        "Será necessário o retratamento da gestante e parcerias, caso haja a possibilidade de falha terapêutica ou reinfecção, sendo os critérios:\n" +
        "- Aumento da titulação em duas diluições (Exemplo: 1:16 para 1:64 ou 1:4 para 1:16 em qualquer momento do seguimento;\n" +
        "- Não redução da titulação no intervalo de seis meses (sífilis primário, secundária e latente recente ou 12 meses (sífilis latente tardia ou terciária) após o tratamento adequado (Exemplo: de 1:32 para 1:8 ou de 1:128 para 1:32);\n" +
        "- Persistência ou recorrência de sinais e sintomas clínicos.",
      INTERPRETATION_2: "Cicatriz sorológica ",
      RECOMENDATION_2:
        "Ver se o tratamento anterior está documentado com queda da titulação em pelo menos duas diluições. E se confirmado caso de cicatriz sorológica, está descartada a possibilidade de reinfecção no período analisado, apenas orientar sobre as medidas de prevenção. Se o terceiro teste treponêmico não estiver disponível, avaliar exposição de risco, sinais e sintomas e histórico de tratamento.",
      CLINICAL_CONDUCT_2:
        "Confirmado caso de cicatriz sorológica, apenas orientar. Para os casos concluídos como ausência de sífilis, apenas orientar sobre as medidas de prevenção. Na ausência da infecção, o profissional durante o pré-natal, deve fazer o rastreio da sífilis novamente no terceiro trimestre.",
      ATTENTION:
        "Caso a gestante tenha parceiro, solicitar para que o mesmo compareça a USB para realizar tratamento.",
    },
    NEGATIVE_AND_POSITIVE: {
      INTERPRETATION:
        "Iniciar tratamento por ser gestante e realizar um terceiro teste treponêmico com metodologia diferente do primeiro, podendo ser um FTA-ABS.",
      RECOMENDATION:
        "Sífilis, tratar, realizar monitoramento com teste não treponêmico (VDRL) mensal e notificar. Realizar também sorologias para HIV, Hepatite B e C. Caso a gestante informe que tem parceiro realizar teste e, caso reagente tratar a infecção.",
      INDICATED_TREATMENT:
        "Será conforme a Classificação do estágio clínico a ser definida de acordo com o tempo de infecção e o histórico de tratamento.",
      CLINICAL_CONDUCT: [
        {
          STAGING:
            "Sífilis recente: sífilis primária, secundária e latente recente (com até um 01 de evolução).",
          THERAPEUTIC_SCHEME:
            "Benzilpenicilina benzatina 2,4 milhões UI, IM, dose única (1,2 milhão UI em cada glúteo).",
        },
        {
          STAGING:
            "Sífilis tardia: sífilis latente tardia ou latente com duração ignorada e sífilis terciaria (com mais de 01 ano de evolução).",
          THERAPEUTIC_SCHEME:
            "2,4 milhões UI, 1x/semana (1,2 milhão UI em cada glúteo) por 3 semanas.\nDose total: 7,2 milhões UI.",
        },
        {
          ALTERNATIVE:
            "Doxiciclina 100mg, VO, 2x ao dia, por 15 dias (exceto gestantes)\nOU\nCeftriaxona 1g, IV ou IM, 1x ao dia, por 8 a 10 dias para gestantes e não gestantes.",
        },
      ],
      FOLLOW_UP:
        "Após o tratamento adequado, o controle deve ser feito mensalmente nas gestantes até o parto e após o parto, o seguimento é trimestral até o 12º mês de acompanhamento (3, 6, 9 e 12 meses). Considera-se sucesso de tratamento para sífilis em gestante, após a última dose de penicilina:\n" +
        "- Diminuição da titulação do teste não treponêmico em duas diluições (ex.: 1:64 para 1:16) em até três meses e quatro diluições (ex.: 1:64 para 1:4) em até seis meses, com evolução até a sororreversão (teste não treponêmico não reagente);\n" +
        "- Diminuição na titulação em duas diluições em até seis meses para sífilis recente e queda na titulação em duas diluições em até 12 meses para sífilis tardia.\n\n" +
        "Será necessário o retratamento da gestante e parcerias, caso haja a possibilidade de falha terapêutica ou reinfecção, sendo os critérios:\n" +
        "- Aumento da titulação em duas diluições (Exemplo: 1:16 para 1:64 ou 1:4 para 1:16 em qualquer momento do seguimento;\n" +
        "- Não redução da titulação no intervalo de seis meses (sífilis primário, secundária e latente recente ou 12 meses (sífilis latente tardia ou terciária) após o tratamento adequado (Exemplo: de 1:32 para 1:8 ou de 1:128 para 1:32);\n" +
        "- Persistência ou recorrência de sinais e sintomas clínicos.",
      INTERPRETATION_2: "Cicatriz sorológica ",
      RECOMENDATION_2:
        "Ver se o tratamento anterior está documentado com queda da titulação em pelo menos duas diluições. E se confirmado caso de cicatriz sorológica, está descartada a possibilidade de reinfecção no período analisado, apenas orientar sobre as medidas de prevenção. Se o terceiro teste treponêmico não estiver disponível, avaliar exposição de risco, sinais e sintomas e histórico de tratamento.",
      CLINICAL_CONDUCT_2:
        "Confirmado caso de cicatriz sorológica, apenas orientar. Para os casos concluídos como ausência de sífilis, apenas orientar sobre as medidas de prevenção. Na ausência da infecção, o profissional durante o pré-natal, deve fazer o rastreio da sífilis novamente no terceiro trimestre.",
      ATTENTION:
        "Caso a gestante tenha parceiro, solicitar para que o mesmo compareça a USB para realizar tratamento.",
    },
    NEGATIVE_AND_NEGATIVE: {
      INTERPRETATION:
        "Ausência de infecção ou período de incubação (janela imunológica) de sífilis recente.",
      RECOMENDATION:
        "Não realizar teste complementar se o primeiro teste for não reagente e se não houver suspeita clínica de sífilis primária. Em caso de suspeita clínica e/ou epidemiológica, solicitar nova amostra em 30 dias. Não retardar o tratamento caso o diagnóstico de sífilis seja o mais provável (ex.: visualização de úlcera anogenital) ou o retorno ao serviço de saúde não possa ser garantido.",
      INDICATED_TREATMENT: "",
      CLINICAL_CONDUCT: [
        {
          STAGING:
            "Sífilis recente: sífilis primária, secundária e latente recente (com até um 01 de evolução).",
          THERAPEUTIC_SCHEME:
            "Benzilpenicilina benzatina 2,4 milhões UI, IM, dose única (1,2 milhão UI em cada glúteo).",
        },
        {
          STAGING:
            "Sífilis tardia: sífilis latente tardia ou latente com duração ignorada e sífilis terciaria (com mais de 01 ano de evolução).",
          THERAPEUTIC_SCHEME:
            "2,4 milhões UI, 1x/semana (1,2 milhão UI em cada glúteo) por 3 semanas.\nDose total: 7,2 milhões UI.",
        },
        {
          ALTERNATIVE:
            "Doxiciclina 100mg, VO, 2x ao dia, por 15 dias (exceto gestantes)\nOU\nCeftriaxona 1g, IV ou IM, 1x ao dia, por 8 a 10 dias para gestantes e não gestantes.",
        },
      ],
      FOLLOW_UP:
        "Após o tratamento adequado, o controle deve ser feito mensalmente nas gestantes até o parto e após o parto, o seguimento é trimestral até o 12º mês de acompanhamento (3, 6, 9 e 12 meses). Considera-se sucesso de tratamento para sífilis em gestante, após a última dose de penicilina:\n" +
        "- Diminuição da titulação do teste não treponêmico em duas diluições (ex.: 1:64 para 1:16) em até três meses e quatro diluições (ex.: 1:64 para 1:4) em até seis meses, com evolução até a sororreversão (teste não treponêmico não reagente);\n" +
        "Diminuição na titulação em duas diluições em até seis meses para sífilis recente e queda na titulação em duas diluições em até 12 meses para sífilis tardia.\n\n" +
        "Será necessário o retratamento da gestante e parcerias, caso haja a possibilidade de falha terapêutica ou reinfecção, sendo os critérios:\n" +
        "- Aumento da titulação em duas diluições (Exemplo: 1:16 para 1:64 ou 1:4 para 1:16 em qualquer momento do seguimento;\n" +
        "- Não redução da titulação no intervalo de seis meses (sífilis primário, secundária e latente recente ou 12 meses (sífilis latente tardia ou terciária) após o tratamento adequado (Exemplo: de 1:32 para 1:8 ou de 1:128 para 1:32);\n" +
        "- Persistência ou recorrência de sinais e sintomas clínicos.",
      INTERPRETATION_2:
        "Ausência de infecção ou período de incubação (janela imunológica) de sífilis recente.",
      RECOMENDATION_2:
        "Não realizar teste complementar se o primeiro teste for não reagente e se não houver suspeita clínica de sífilis primária, nesse caso gestante sem sífilis. Em caso de suspeita clínica e/ou epidemiológica, solicitar nova amostra em 30 dias. Não retardar o tratamento caso o diagnóstico de sífilis seja o mais provável (ex.: visualização de úlcera anogenital) ou o retorno ao serviço de saúde não possa ser garantido.",
      CLINICAL_CONDUCT_2:
        "Se preciso, iniciar tratamento conforme o estadiamento da doença. Na ausência da infecção, o profissional durante o pré-natal, deve fazer o rastreio da sífilis novamente no terceiro trimestre.",
      ATTENTION:
        "Caso a gestante tenha parceiro, solicitar para que o mesmo compareça a USB para realizar tratamento.",
    },
  };

  if (!resultTests) {
    return <></>;
  }

  return (
    <Background style={styles.container}>
      <BodyContainer>
        <Title text={ResultMapper[title]} style={{ textAlign: "center" }} />
        <Title text="Interpretação:" />
        <BodyText text={contentText[resultTests].INTERPRETATION} withDivider />
        <Title text="Recomendações:" />
        <BodyText text={contentText[resultTests].RECOMENDATION} withDivider />
        {(resultTests === ResultTests.POSITIVE_AND_NEGATIVE ||
          resultTests === ResultTests.POSITIVE_AND_POSITIVE ||
          resultTests === ResultTests.NEGATIVE_AND_POSITIVE) && (
          <>
            <Title text="Tratamento indicado:" />
            <BodyText
              text={contentText[resultTests].INDICATED_TREATMENT}
              withDivider
            />
          </>
        )}
        <Title text="Conduta clínica:" />
        {resultTests === ResultTests.NEGATIVE_AND_NEGATIVE && (
          <BodyText text="Se preciso, iniciar tratamento conforme o estadiamento da doença. Na ausência da infecção, o profissional durante o pré-natal, deve fazer o rastreio da sífilis novamente no terceiro trimestre." />
        )}
        <Title text="Estadiamento:" />
        <BodyText
          text={contentText[resultTests].CLINICAL_CONDUCT[0].STAGING as string}
        />
        <Title text="Esquema terapêutico:" />
        <BodyText
          text={
            contentText[resultTests].CLINICAL_CONDUCT[0]
              .THERAPEUTIC_SCHEME as string
          }
          withDivider
        />
        <Title text="Estadiamento:" />
        <BodyText
          text={contentText[resultTests].CLINICAL_CONDUCT[1].STAGING as string}
        />
        <Title text="Esquema terapêutico:" />
        <BodyText
          text={
            contentText[resultTests].CLINICAL_CONDUCT[1]
              .THERAPEUTIC_SCHEME as string
          }
          withDivider
        />
        <Title text="Alternativa:" />
        <BodyText
          text={
            contentText[resultTests].CLINICAL_CONDUCT[2].ALTERNATIVE as string
          }
          withDivider
        />
        <Title text="Seguimento (teste não treponêmico):" />
        <BodyText text={contentText[resultTests].FOLLOW_UP} withDivider />
        <Title text="Interpretação:" />
        <BodyText
          text={contentText[resultTests].INTERPRETATION_2}
          withDivider
        />
        <Title text="Recomendações:" />
        <BodyText text={contentText[resultTests].RECOMENDATION_2} withDivider />
        <Title text="Tratamento indicado:" />
        <BodyText
          text={contentText[resultTests].CLINICAL_CONDUCT_2}
          withDivider
        />
        <Title text="Atenção" style={{ textAlign: "center" }} />
        <BodyText text={contentText[resultTests].ATTENTION} />
      </BodyContainer>

      <Dialog open={open} setOpen={setOpen}>
        <View>
          <Title text={ResultMapper[title]} style={{ textAlign: "center" }} />
          <BodyText text={modalText[title]} style={{ textAlign: "center" }} />
        </View>
        <Button
          text={
            title === ResultTitle.BLANK_AND_NEGATIVE ||
            title === ResultTitle.NEGATIVE_AND_BLANK
              ? "Fechar"
              : "Ver recomendações"
          }
          onPress={() => {
            if (
              title === ResultTitle.BLANK_AND_NEGATIVE ||
              title === ResultTitle.NEGATIVE_AND_BLANK
            ) {
              navigation.goBack();
            } else {
              setOpen(false);
            }
          }}
          style={{ width: 300 }}
        />
      </Dialog>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
