import React, {FC, memo} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import RNPickerSelect from 'react-native-picker-select'

interface IPickerSelect {
  textName?: string
  controllerName: string
  placeholder: {label: string, value: string | null}
  items: {label: string, value: string}[]
}

export const PickerSelect: FC<IPickerSelect> = memo(({textName, controllerName, placeholder, items}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.text}>{textName}</Text>
      <RNPickerSelect onValueChange={(value) => console.log(value)}
                      items={items}
                      placeholder={placeholder}
                      style={customPickerStyles}
      />
    </View>
  )
})

const customPickerStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 15,
    paddingVertical: 12,
    paddingHorizontal: 12,
    width: 263,
    borderWidth: 1,
    borderColor: '#CACACC',
    borderRadius: 8,
    color: '#000',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 15,
    paddingHorizontal: 12,
    paddingVertical: 12,
    width: 263,
    borderWidth: 1,
    borderColor: '#CACACC',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
})


const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 343,
    paddingVertical: 8,
  },
  text: {
    fontSize: 12,
    fontWeight: '600',
    flexWrap: 'wrap',
  },
})



