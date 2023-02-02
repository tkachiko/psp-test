import React, {FC, memo, useState} from 'react'
import {Image, StyleSheet, Text, TextInput, View} from 'react-native'
import * as DocumentPicker from 'expo-document-picker'
import {Controller, useFormContext} from 'react-hook-form'

interface AddFileType {
  textName: string
  placeHolderName?: string
  controllerName: string
  placeholderTextColor?: string
}

export const AddFile: FC<AddFileType> = memo(({placeHolderName, textName, controllerName, placeholderTextColor}) => {
  const {control} = useFormContext()
  const [resName, setRes] = useState<string>('')

  const selectDoc = async () => {
    try {
      const res = await DocumentPicker.getDocumentAsync({})
      res.type === 'success' && setRes(res.name)
    } catch (err) {
      console.warn('error: ', err)
    }
  }

  const finalTextStyle = resName ? [styles.text, styles.empty] : styles.text

  return (
    <View style={styles.inputContainer}>
      <Text style={finalTextStyle}>{textName}</Text>
      <View>
        <Controller
          name={controllerName}
          control={control}
          render={({field}) =>
            <TextInput
              onPressIn={selectDoc}
              value={field.value}
              onChangeText={(value) => field.onChange(value)}
              onBlur={field.onBlur}
              style={styles.input}
              placeholderTextColor={placeholderTextColor}
              placeholder={placeHolderName}
            />
          }
        />
        <Text style={styles.clipContainer}>
          <Image style={styles.clip} source={require('../res/images/clip.png')} />
        </Text>
        {resName && <View style={styles.resContainer}>
          <Text onPress={() => {
            setRes('')
          }} style={styles.resName}>{resName}
          </Text>
          <Image style={styles.img} source={require('../res/images/blueCross.png')} />
        </View>}
      </View>
    </View>
  )
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
    justifyContent: 'center'
  },
  empty: {
    alignSelf: 'flex-start',
    paddingTop: 18
  },
  clipContainer: {
    position: 'absolute',
    top: 16,
    left: 16
  },
  clip: {
    width: 10,
    height: 18,
  },
  input: {
    position: 'relative',
    borderWidth: 1,
    borderRadius: 8,
    width: 263,
    height: 48,
    borderColor: '#1E63EE',
    borderStyle: 'dashed',
    paddingHorizontal: 34
  },
  resName: {
    color: '#1E63EE',
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 12,
  },
  resContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#E9F0FE',
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#E9F0FE',
    borderRadius: 18,
  },
  img: {
    position: 'absolute',
    top: 10,
    right: 12,
    width: 8,
    height: 8,
  },
})
