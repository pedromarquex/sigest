import React from 'react'
import {
  Dimensions,
  Modal,
  Pressable,
  StyleSheet,
  View
} from 'react-native'
import { colors } from '../../@theme/colors'

interface DialogProps {
  open: boolean
  setOpen: (open: boolean) => void
  children: React.ReactNode
}

function Dialog ({
  open,
  setOpen,
  children
}: DialogProps): JSX.Element | null {
  if (!open) return null
  return (
        <View>
            <Modal animationType="slide" transparent visible={open}>
                <Pressable
                    style={[
                      styles.overlay,
                      {
                        backgroundColor: colors.secondaryGreen,
                        opacity: 0.97
                      }
                    ]}
                    onPress={() => {
                      setOpen(false)
                    }}
                >
                    <View style={styles.dialog}>
                        {children}
                    </View>
                </Pressable>
            </Modal>
        </View>
  )
}

const styles = StyleSheet.create({
  overlay: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  dialog: {
    zIndex: 999,
    padding: 16,
    minHeight: 300,
    width: '90%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 16
  }
})

export { Dialog }
