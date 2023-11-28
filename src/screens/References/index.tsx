import React from "react";
import { StyleSheet } from "react-native";
import { Background } from "../../components/Background";
import { BodyContainer } from "../../components/BodyContainer";
import { BodyText } from "../../components/BodyText";

export function References() {
  const contentText = [
    "ARAÚJO, Maria Alix Leite; ESTEVES, Ana Beatriz Barbosa; ROCHA, Ana Fátima Braga; JÚNIOR, Geraldo Bezerra da Silva; MIRANDA, Angelica Espinosa. Fatores associados à prematuridade em casos notificados de sífilis congênita. Revista de Saúde Pública, v. 55, n. 28, p. 1-10, 2021.",
    "BRASIL. Ministério da Saúde. Secretaria de Vigilância em Saúde. Departamento de Doenças de Condições Crônicas e Infecções Sexualmente Transmissíveis. Protocolo Clínico e Diretrizes Terapêuticas para Atenção Integral às Pessoas com Infecções Sexualmente Transmissíveis (IST) – Brasília: Ministério da Saúde, 2020.",
    "BRASIL. Ministério da Saúde. Secretaria de Ciência, Tecnologia, Inovação e Insumos Estratégicos em Saúde. Secretaria de Vigilância em Saúde. Protocolo Clínico e Diretrizes Terapêuticas para Prevenção da Transmissão Vertical do HIV, Sífilis e Hepatites Virais – Brasília: Ministério da Saúde, 2022a.",
    "BRASIL. Ministério da Saúde. Secretaria de Ciência, Tecnologia, Inovação e Insumos Estratégicos em Saúde. Secretaria de Vigilância em Saúde. Protocolo Clínico e Diretrizes Terapêuticas para Prevenção da Transmissão Vertical do HIV, Sífilis e Hepatites Virais – Brasília: Ministério da Saúde, 2022b.",
    "BRASIL. Ministério da Saúde. Secretaria de Atenção Primária à Saúde. Departamento de Ações Programáticas. Manual de gestação de alto risco [recurso eletrônico] / Ministério da Saúde, Secretaria de Atenção Primária à Saúde. Departamento de Ações Programáticas. – Brasília: Ministério da Saúde, 2022c.",
    "DOMINGUES, Carmen Silvia Bruniera; PASSOS, Mauro Romero Leal; SZTAJNBOK, Denise Cardoso das Neves; MENEZES, Maria Luiza Bezerra. Protocolo Brasileiro para Infecções Sexualmente Transmissíveis 2020: sífilis congênita e criança exposta à sífilis. Epidemiol. Serv. Saúde, v. 30, n. 1, p.1-13, 2021.",
    "FREITAS, Francisca Lidiane Sampaio; BENZAKEN, Adele Schwartz; PASSOS, Mauro Romero Leal de; COELHO, Ivo Castelo Branco; MIRANDA, Angélica Espinosa. Protocolo Brasileiro para Infecções Sexualmente Transmissíveis 2020: sífilis adquirida. Epidemiol. Serv. Saúde, v. 30, n. Esp.1, p. 1-15, 2021.",
    "JIMÉNEZ, Oscar Carvajal. Sífilis. Dr. Óscar Carvajal Jiménez: Medicina General, 16 out. 2017. Disponível em:http://droscarcarvajal.com/blog/sfilis. Acesso em:08 de março de 2023.",
    "PINHEIRO, Pedro. Sífilis. Fases precoce e avançada. MD. SAÚDE. 27 fev. 2018. Disponível em: https://www.mdsaude.com/doençasinfecciosas/dst/sifilisfotos/. Acesso em: 08 de março 2023.",
    "QUIRINO, K. H. B. S.; OLIVEIRA, I. S.; NETO, B. M. Sífilis gestacional: um estudo epidemiológico no Nordeste do Brasil. Research, Society and Development, v. 10, n. 6, p. 1-9, 2021.",
    "WORLD HEALTH ORGANIZATION. Guidelines for the treatment of treponema pallidum (syphilis). Geneva: WHO, 2016.",
  ];

  return (
    <Background style={styles.container}>
      <BodyContainer>
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
