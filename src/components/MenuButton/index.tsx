import { Feather } from '@expo/vector-icons';
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { colors } from "../../@theme/colors";
import { fonts } from '../../@theme/fonts';
import PillIcon from '../../assets/icons/pill-icon.svg';

interface Props {
    title: string;
    onPress: () => void;
    icon: 'pill' | 'microscope';
}

function MenuButton({ title, onPress, icon }: Props) {

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.4}
    >
      <PillIcon width={32} height={32} />
      <Text style={styles.title}>{title}</Text>

      <Feather
          name='chevron-right'
          size={24}
          color={colors.blackGreen}
          style={{ marginLeft: 'auto' }}
      />
    </TouchableOpacity>
  )
}

export { MenuButton };

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 16,
  },
  title: {
    marginLeft: 20,
    fontSize: 14,
    color: colors.blackGreen,
    fontFamily: fonts.regular
  },
})