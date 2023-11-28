import { StackScreenProps } from "@react-navigation/stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Home: undefined;
  Definition: undefined;
  Classification: undefined;
  Primary: undefined;
  Secondary: undefined;
  Latent: undefined;
  Terciary: undefined;
  Transmission: undefined;
  Sexual: undefined;
  Vertical: undefined;
  BloodTransmission: undefined;
  Diagnosis: undefined;
  DirectExams: undefined;
  ImmunologicalTests: undefined;
  TreponemalTests: undefined;
  QuickTests: undefined;
  HemagglutinationTests: undefined;
  IndirectImmunofluorescenceTest: undefined;
  EnzymeImmunoassays: undefined;
  NonTreponemalTests: undefined;
  DarkFieldExams: undefined;
  DirectSearchWithStainedMaterial: undefined;
  Treatment: undefined;
  BenzathineBenzylpenicillin: undefined;
  GeneralInformation: undefined;
  Application: undefined;
  JarischHerxheimerReaction: undefined;
  SafetyAndEffectiveness: undefined;
  SensitivityTest: undefined;
  PostTreatmentFollowUp: undefined; 
  CompulsoryNotification: undefined;
  References: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, Screen>;
