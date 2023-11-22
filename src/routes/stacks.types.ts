import { StackScreenProps } from '@react-navigation/stack';

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}

export type RootStackParamList = {
    Home: undefined;
    Details: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
    StackScreenProps<RootStackParamList, Screen>;