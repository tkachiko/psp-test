import React, {FC} from 'react'
import {StyleSheet, Text, TextInput, View} from 'react-native'
import {Control, Controller} from 'react-hook-form'


interface InputRegisterType {
  textName: string
  placeHolderName: string
  controllerName: string
  placeholderTextColor?: string
  errors: any
  control: Control
}

export const InputRegister: FC<InputRegisterType> = ({
                                                       placeHolderName,
                                                       controllerName,
                                                       textName,
                                                       placeholderTextColor,
                                                       control,
                                                       errors
                                                     }) => {

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.text}>{textName}</Text>
      <Controller
        name={controllerName}
        rules={{
          required: {
            value: true,
            message: 'Field is required!',
          },
        }}
        control={control}
        render={({field}) => <TextInput {...field} style={styles.input}
                                        placeholderTextColor={placeholderTextColor}
                                        placeholder={placeHolderName} />}
      />
      {errors.controllerName && <Text>{errors.controllerName.message}</Text>}
    </View>
  )
}

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
  input: {
    borderWidth: 1,
    borderRadius: 8,
    width: 263,
    height: 48,
    borderColor: '#1E63EE',
    padding: 14,
  },
})
