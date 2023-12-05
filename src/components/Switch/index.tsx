import React from 'react'
import { StyleSheet, Text, View, type ViewStyle } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { colors } from '../../@theme/colors'
import { fonts } from '../../@theme/fonts'

interface Props {
  value: boolean
  onToggle: () => void
  text: string
  containerStyle?: ViewStyle
}

export function Switch ({
  value,
  onToggle,
  text,
  containerStyle
}: Props): JSX.Element {
  return (
        <View style={[createStyles(value).switchContainer, containerStyle]}>
          <Text style={createStyles(value).switchText}>{text}</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPressIn={onToggle}
          >
            <View style={createStyles(value).buttonsContainer}>
              <View
                style={createStyles(value).yesContainer}
              >
                <Text
                  style={createStyles(value).yesText}
                >Sim</Text>
              </View>
              <View
                style={createStyles(value).noContainer}
              >
                <Text
                  style={createStyles(value).noText}
                >Não</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
  )
}

const createStyles = (value: boolean) => StyleSheet.create({
  switchContainer: {
    flexDirection: 'column',
    marginBottom: 16,
    width: '100%'
  },
  switchText: {
    fontSize: 14,
    lineHeight: 21,
    color: colors.blackBlue,
    fontFamily: fonts.regular
  },
  buttonsContainer: {
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    borderColor: colors.inputPlaceholder,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff'
  },
  yesContainer: {
    flex: 1,
    width: '100%',
    height: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: value ? colors.mainPurple : '#fff',
    marginLeft: 16,
    marginVertical: 5,
    marginRight: 5,
    borderRadius: 10
  },
  yesText: {
    color: value ? '#fff' : colors.gray2
  },
  noContainer: {
    flex: 1,
    width: '100%',
    height: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: value ? '#fff' : colors.mainPurple,
    marginLeft: 5,
    marginVertical: 5,
    marginRight: 16,
    borderRadius: 10
  },
  noText: {
    color: value ? colors.gray2 : '#fff'
  }
})
