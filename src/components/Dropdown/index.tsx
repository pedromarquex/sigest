import React, { useEffect, useRef, useState } from 'react'
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  type ListRenderItemInfo
} from 'react-native'
import { type Modalize as RNModalize } from 'react-native-modalize'

import { colors } from '../../@theme/colors'
import { fonts } from '../../@theme/fonts'
import { Modalize } from '../Modalize'
import { TextInput, type TextInputProps } from '../TextInput'
import { Title } from '../Title'

export interface DropdownItemType<Extras = undefined, Value = string> {
  label: string
  value: Value
  disabled?: boolean
  extras?: Extras
}

interface NADropdownProps<Extras = undefined, Value = string>
  extends Omit<TextInputProps, 'value' | 'onChangeText'> {
  searchLabel?: string
  items: Array<DropdownItemType<Extras, Value>>
  hideFilter?: boolean
  onChangeText: (i: DropdownItemType<Extras, Value>) => void
  value: DropdownItemType<Extras, Value>
  adjustModalToContentHeight?: boolean
}

const Dropdown = <Extras, Value>({
  label,
  searchLabel,
  onChangeText,
  items = [],
  disabled,
  hideFilter,
  value = {
    label: '',
    value: '' as Value
  },
  adjustModalToContentHeight = false,
  ...rest
}: NADropdownProps<Extras, Value>): JSX.Element => {
  const [query, setQuery] = useState('')
  const [filteredItems, setFilteredItems] =
        useState<Array<DropdownItemType<Extras, Value>>>(items)
  const modalizeRef = useRef<RNModalize>(null)

  useEffect(() => {
    const filter = items.filter((i) =>
      i.label.toLowerCase().includes(query.toLowerCase().trim())
    )
    setFilteredItems(filter)
  }, [query, items])

  const onPressItem = (item: DropdownItemType<Extras, Value>): void => {
    onChangeText?.(item)
    onClose()
  }

  const onOpen = (): void => {
    modalizeRef.current?.open()
  }
  const onClose = (): void => {
    setQuery('')
    modalizeRef.current?.close()
  }

  const renderItem = ({
    item
  }: ListRenderItemInfo<DropdownItemType<Extras, Value>>): JSX.Element => {
    if (item.disabled ?? false) {
      return (
                <View style={styles.itemContainer}>
                    <Text style={[styles.itemText, styles.itemTextDisabled]}>
                        {item.label}
                    </Text>
                </View>
      )
    }
    return (
            <TouchableOpacity
                onPress={() => { onPressItem(item) }}
                style={styles.itemContainer}
            >
                <Text style={styles.itemText}>{item.label}</Text>
            </TouchableOpacity>
    )
  }

  const HeaderComponent = (): JSX.Element =>
    (hideFilter ?? false)
      ? (
            <Title text={searchLabel ?? ''} />
        )
      : (
            <TextInput
                containerStyle={{ marginHorizontal: 20 }}
                // leftIcon={{
                //   name: 'chevron-left',
                //   color: 'white',
                //   onPress: onClose
                // }}
                label={searchLabel ?? label}
                value={query}
                onChangeText={setQuery}
            />
        )

  const ListEmptyComponent = (): JSX.Element => {
    return (
            <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 24
                }}
            >
                <Text
                    style={{
                      color: colors.gray4,
                      fontSize: 16,
                      fontFamily: fonts.regular
                    }}
                >
                    Nenhum resultado
                </Text>
            </View>
    )
  }
  return (
        <>
            <TouchableOpacity disabled={disabled} onPress={onOpen}>
                <View pointerEvents="none">
                    <TextInput
                        // rightIcon={{ name: 'chevron-down' }}
                        // readOnly
                        label={label}
                        disabled={disabled}
                        value={value?.label ?? ''}
                        {...rest}
                    />
                </View>
            </TouchableOpacity>

            <Modalize
                adjustToContentHeight={adjustModalToContentHeight}
                modalHeight={
                    !adjustModalToContentHeight
                      ? Dimensions.get('screen').height * 0.7
                      : undefined
                }
                handleStyle={styles.modalHandleStyle}
                modalStyle={styles.modal}
                handlePosition="inside"
                ref={modalizeRef}
                flatListProps={{
                  data: filteredItems,
                  ListEmptyComponent,
                  renderItem,
                  style: { marginHorizontal: 20, marginBottom: 36 },
                  showsVerticalScrollIndicator: false,
                  keyboardShouldPersistTaps: 'handled'
                }}
                HeaderComponent={HeaderComponent}
            />
        </>
  )
}

export { Dropdown }

const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray4
  },
  itemText: {
    color: colors.blackGreen,
    fontSize: 16,
    fontFamily: fonts.regular,
    marginLeft: 16
  },
  itemTextDisabled: {
    color: colors.gray4
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16
  },
  titleText: {
    textAlign: 'center',
    fontSize: 20,
    color: colors.blackGreen
  },
  modal: {
    backgroundColor: '#fff',
    paddingTop: 36
  },
  modalHandleStyle: {
    width: 85,
    backgroundColor: colors.gray4,
    height: 4
  }
})
