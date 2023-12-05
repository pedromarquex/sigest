import React from 'react'
import { StyleSheet } from 'react-native'
import { Modalize as RNModalize, type ModalizeProps } from 'react-native-modalize'
import { Portal } from 'react-native-paper'
import { colors } from '../../@theme/colors'

export const Modalize = React.forwardRef<RNModalize, ModalizeProps>(
  ({ children, ...props }, ref) => {
    return (
      <Portal>
        <RNModalize
          ref={ref}
          {...props}
          modalStyle={[globalStyles.modalStyle, props.modalStyle]}
          overlayStyle={[globalStyles.overlayStyle, props.overlayStyle]}
        >
          {children}
        </RNModalize>
      </Portal>
    )
  }
)

Modalize.displayName = 'Modalize'

const globalStyles = StyleSheet.create({
  overlayStyle: {
    backgroundColor: colors.secondaryPurple
  },
  modalStyle: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24
  }
})
