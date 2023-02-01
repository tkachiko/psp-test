import React, {FC, memo, useState} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import CheckBox from 'expo-checkbox'

interface ICheckBoxConsent {
  textConsent: string
  text?: string
}

export const CheckBoxConsent: FC<ICheckBoxConsent> = memo(({textConsent, text}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  return (
    <View style={styles.inputContainer}>
      <CheckBox
        color={toggleCheckBox ? '#00C56D' : undefined}
        disabled={false}
        value={toggleCheckBox}
        onValueChange={(newValue) => setToggleCheckBox(newValue)}
        style={styles.checkbox}
      />
      <View style={styles.textContainer}>
      <Text style={styles.textConsent}>{textConsent}</Text>
      <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  )
})

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 343,
    paddingVertical: 8,
  },
  textContainer: {
    flexDirection: 'column',
  },
  textConsent: {
    paddingHorizontal: 16,
    fontSize: 13,
    fontWeight: '600',
    flexWrap: 'wrap',
    color: '#1E63EE',
    textDecorationLine: 'underline',
  },
  text: {
    paddingHorizontal: 16,
  },
  checkbox: {
    borderColor: '#BCC3D080',
    borderRadius: 4,
  },
})