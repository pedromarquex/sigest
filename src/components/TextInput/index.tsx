import React from 'react'
import { StyleSheet, View, type ViewStyle } from 'react-native'
import { HelperText, TextInput as PaperInput } from 'react-native-paper'

import { colors } from '../../@theme/colors'
import { fonts } from '../../@theme/fonts'

export interface TextInputProps extends React.ComponentProps<typeof PaperInput> {
  leftHint?: string
  containerStyle?: ViewStyle
}

export function TextInput ({ style, containerStyle, ...props }: TextInputProps): JSX.Element {
  return <View
    style={[styles.container, containerStyle]}
  >
    <PaperInput
      {...props}
      mode='outlined'
      theme={{
        colors: {
          background: props.disabled === true
            ? colors.gray4
            : '#fff'
        },
        fonts: {
          regular: {
            fontFamily: fonts.regular
          }
        }
      }}
      outlineColor={colors.gray4}
      activeOutlineColor={colors.mainGreen}
      autoCorrect={false}
      style={[styles.input, style]}
      placeholderTextColor={colors.gray4}
      textColor={colors.blackGreen}
      outlineStyle={{ borderRadius: 10 }}
    />
    {(props.leftHint != null) && <HelperText type='info' visible={!(props.leftHint.length === 0)}>
      {props.leftHint}
    </HelperText>}
  </View>
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 50,
    borderRadius: 10
  },
  container: {
    marginBottom: 16,
    flexGrow: 1
  }
})
