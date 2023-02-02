import React, {FC, memo} from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'
import RNPickerSelect from 'react-native-picker-select'
import {Controller, useFormContext} from 'react-hook-form'

interface IPickerSelect {
  textName?: string
  controllerName: string
  placeholder: { label: string, value: string | null }
  items: { label: string, value: string }[]
}

export const PickerSelect: FC<IPickerSelect> = memo(({textName, controllerName, placeholder, items}) => {
  const {control} = useFormContext()

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.text}>{textName}</Text>
      <Controller
        name={controllerName}
        control={control}
        render={({field: {onChange, value}}) =>
          <RNPickerSelect onValueChange={onChange}
                          items={items}
                          placeholder={placeholder}
                          style={customPickerStyles}
                          value={value}
          />}
      />
      <Image style={styles.img} source={require('../../res/images/arrow.png')}/>
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
    position: 'relative',
  },
  text: {
    fontSize: 12,
    fontWeight: '600',
    flexWrap: 'wrap',
  },
  img: {
    position: 'absolute',
    width: 8,
    height: 4,
    right: 18,
    top: 28,
  }
})



