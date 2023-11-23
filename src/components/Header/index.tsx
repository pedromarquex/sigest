import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "../../@theme/colors";
import { fonts } from "../../@theme/fonts";

interface Props {
  title: string;
}

function Header({ title }: Props) {

  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
      <View style={{
        ...styles.container,
        paddingTop: insets.top + 16
      }}>
        <TouchableOpacity 
          style={styles.backContainer}
          onPress={() => navigation.goBack()}
        >
          <Feather name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.empty} />
      </View>
    );
}

export { Header };

const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      paddingBottom: 8,
      paddingHorizontal: 16,
    },
    backContainer: {
      backgroundColor: '#fff',
      borderRadius: 10,
      height: 32,
      width: 32,
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 16,
      fontFamily: fonts.semibold,
      color: colors.blackGreen2
    },
    empty: {},
  });
