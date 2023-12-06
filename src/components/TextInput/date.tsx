import React from 'react'
import { Masks, useMaskedInputProps } from 'react-native-mask-input'

import { TextInput, type TextInputProps } from '.'

function DateInput ({
  value,
  onChangeText,
  ...rest
}: TextInputProps): JSX.Element {
  const { onChangeText: onChangeMaskedText, value: maskedValue } =
            useMaskedInputProps({
              value,
              onChangeText,
              mask: Masks.DATE_DDMMYYYY
            })

  return (
          <TextInput
              value={maskedValue}
              keyboardType="numeric"
              onChangeText={onChangeMaskedText}
              {...rest}
          />
  )
}

export { DateInput }
