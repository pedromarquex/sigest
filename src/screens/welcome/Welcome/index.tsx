import React from "react";
import { Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../../../components/Button";

import LogoSigest from '../../../assets/img/logo-sigest.png';

interface Props {
  onPress: () => void;
}

export function Welcome({ onPress }: Props) {
  return (
    <SafeAreaView
      style={styles.container}
    >
      <Image
        source={LogoSigest}
        style={styles.logo}
      />
      <Button 
        text="Iniciar"
        onPress={onPress}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9E2B7',
    justifyContent: 'center',
    paddingHorizontal: 60
  },
  logo: {
    width: 400,
    height: 400,
    alignSelf: 'center',
    marginBottom: 50,
  }
});
