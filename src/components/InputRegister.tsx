import React, {FC} from 'react'
import {Image, KeyboardTypeOptions, StyleSheet, Text, TextInput, View} from 'react-native'
import {Controller, useFormContext} from 'react-hook-form'


interface InputRegisterType {
  textName?: string
  placeHolderName?: string
  controllerName: string
  placeholderTextColor?: string
  keyboardType?: KeyboardTypeOptions | undefined
  required?: boolean
}

export const InputRegister: FC<InputRegisterType> = ({
                                                       placeHolderName,
                                                       controllerName,
                                                       textName,
                                                       placeholderTextColor,
                                                       keyboardType,
                                                       required
                                                     }) => {

  const {control, formState: {errors, isSubmitted}} = useFormContext()

  const errorMessage = 'Заполните поле'
  const inputSuccess = isSubmitted && styles.inputSuccess
  const inputFinalClass = errors[controllerName] ? [styles.input, styles.inputError] : [styles.input, inputSuccess]

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.text}>{textName}</Text>
      <View>
        <Controller
          rules={{
            required: required,
            minLength: { value: 3, message: ''}
          }}
          name={controllerName}
          control={control}
          render={({field}) => <TextInput
            value={field.value}
            onChangeText={(value) => field.onChange(value)}
            onBlur={field.onBlur}
            keyboardType={keyboardType}
            style={inputFinalClass}
            placeholderTextColor={placeholderTextColor}
            placeholder={placeHolderName}
          />}
        />
        {!!errors[controllerName] && <Text style={styles.error}>{errors[controllerName] ? errorMessage : ''}</Text>}
        {(isSubmitted && !errors[controllerName]) && <Image style={styles.img} source={require('../res/images/greenArrow.png')} />}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 343,
    paddingVertical: 4,
  },
  text: {
    fontSize: 12,
    fontWeight: '600',
    flexWrap: 'wrap',
  },
  input: {
    position: 'relative',
    borderWidth: 1,
    borderRadius: 8,
    width: 263,
    height: 48,
    borderColor: '#1E63EE',
    padding: 14,
  },
  error: {
    position: 'absolute',
    top: 16,
    right: 10,
    color: '#FA4D23',
  },
  inputError: {
    borderColor: '#FA4D23',
  },
  inputSuccess: {
    position: 'relative',
    borderColor: '#00C56D',
  },
  img: {
    position: 'absolute',
    width: 9,
    height: 6,
    top: 21,
    right: 8
  },
})
