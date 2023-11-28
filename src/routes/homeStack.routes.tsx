import { createStackNavigator } from "@react-navigation/stack";
import { Header } from "../components/Header";
import { Definition } from "../screens/Definition";
import { Home } from "../screens/Home";
import { Classification } from "../screens/classification/Classification";
import { Primary } from "../screens/classification/Primary";
import { RootStackParamList } from "./homeStack.types";
import { Secondary } from "../screens/classification/Secondary";
import { Latent } from "../screens/classification/Latent";
import { Tertiary } from "../screens/classification/Tertiary";
import { Transmission } from "../screens/transmission/Transmission";
import { Sexual } from "../screens/transmission/Sexual";
import { Vertical } from "../screens/transmission/Vertical";
import { BloodTransmission } from "../screens/transmission/BloodTransmission";
import { Diagnosis } from "../screens/diagnosis/Diagnosis";
import { DirectExams } from "../screens/diagnosis/directExams/DirectExams";
import { ImmunologicalTests } from "../screens/diagnosis/immunologicalTests/ImmunologicalTests";
import { TreponemalTests } from "../screens/diagnosis/immunologicalTests/treponemalTests/TreponemalTests";
import { QuickTests } from "../screens/diagnosis/immunologicalTests/treponemalTests/QuickTests";
import { HemagglutinationTests } from "../screens/diagnosis/immunologicalTests/treponemalTests/HemagglutinationTests";
import { IndirectImmunofluorescenceTest } from "../screens/diagnosis/immunologicalTests/treponemalTests/IndirectImmunofluorescenceTest";
import { EnzymeImmunoassays } from "../screens/diagnosis/immunologicalTests/treponemalTests/EnzymeImmunoassays";

const Stack = createStackNavigator<RootStackParamList>();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Definition"
        component={Definition}
        options={{
          header: () => <Header title="Definição e etiologia da sífilis" />,
        }}
      />
      <Stack.Screen
        name="Classification"
        component={Classification}
        options={{
          header: () => <Header title="Classificação clínica da sífilis" />,
        }}
      />
      <Stack.Screen
        name="Primary"
        component={Primary}
        options={{
          header: () => <Header title="Classificação clínica da sífilis" />,
        }}
      />
      <Stack.Screen
        name="Secondary"
        component={Secondary}
        options={{
          header: () => <Header title="Classificação clínica da sífilis" />,
        }}
      />
      <Stack.Screen
        name="Latent"
        component={Latent}
        options={{
          header: () => <Header title="Classificação clínica da sífilis" />,
        }}
      />
      <Stack.Screen
        name="Terciary"
        component={Tertiary}
        options={{
          header: () => <Header title="Classificação clínica da sífilis" />,
        }}
      />
      <Stack.Screen
        name="Transmission"
        component={Transmission}
        options={{
          header: () => <Header title="Transmissão" />,
        }}
      />
      <Stack.Screen
        name="Sexual"
        component={Sexual}
        options={{
          header: () => <Header title="Transmissão" />,
        }}
      />
      <Stack.Screen
        name="Vertical"
        component={Vertical}
        options={{
          header: () => <Header title="Transmissão" />,
        }}
      />
      <Stack.Screen
        name="BloodTransmission"
        component={BloodTransmission}
        options={{
          header: () => <Header title="Transmissão" />,
        }}
      />
      <Stack.Screen
        name="Diagnosis"
        component={Diagnosis}
        options={{
          header: () => <Header title="Diagnóstico" />,
        }}
      />
      <Stack.Screen
        name="DirectExams"
        component={DirectExams}
        options={{
          header: () => <Header title="Exames diretos" />,
        }}
      />
      <Stack.Screen
        name="ImmunologicalTests"
        component={ImmunologicalTests}
        options={{
          header: () => <Header title="Testes imunológicos" />,
        }}
      />
      <Stack.Screen
        name="TreponemalTests"
        component={TreponemalTests}
        options={{
          header: () => <Header title="Testes treponêmicos " />,
        }}
      />
      <Stack.Screen
        name="QuickTests"
        component={QuickTests}
        options={{
          header: () => <Header title="Testes treponêmicos " />,
        }}
      />
      <Stack.Screen
        name="HemagglutinationTests"
        component={HemagglutinationTests}
        options={{
          header: () => <Header title="Testes treponêmicos " />,
        }}
      />
      <Stack.Screen
        name="IndirectImmunofluorescenceTest"
        component={IndirectImmunofluorescenceTest}
        options={{
          header: () => <Header title="Testes treponêmicos " />,
        }}
      />
      <Stack.Screen
        name="EnzymeImmunoassays"
        component={EnzymeImmunoassays}
        options={{
          header: () => <Header title="Testes treponêmicos " />,
        }}
      />
    </Stack.Navigator>
  );
}

export { MyStack };
