import { StackScreenProps } from '@react-navigation/stack';

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
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
    StackScreenProps<RootStackParamList, Screen>;