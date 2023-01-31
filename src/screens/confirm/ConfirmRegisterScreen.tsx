import React, {useState} from 'react'
import {SafeAreaView, StyleSheet, Text} from 'react-native'
import {CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell} from 'react-native-confirmation-code-field'
import {Logo} from '../../components/Logo'
import {CustomButton} from '../../components/CustomButton'

const CELL_COUNT = 6

export const ConfirmRegisterScreen = () => {
  const [value, setValue] = useState('')
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT})
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  })

  return (
    <SafeAreaView style={styles.container}>
      <Logo position={'relative'}
            width={60}
            height={60}
            marginBottom={16} />
      <Text style={styles.title}>Введите код авторизации</Text>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      <Text style={styles.askCode}>Запросить код авторизации</Text>
      <CustomButton onPress={() => {}}
                    color={'#fff'}
                    borderColor={'#1E63EE'}
                    backgroundColor={'#1E63EE'}
                    fontSize={17}
                    paddingHorizontal={119}
                    paddingVertical={15}
                    textAlign={'center'}
                    title={'Продолжить'}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 100,
  },
  title: {
    textAlign: 'center',
    fontSize: 21,
    fontWeight: '600',
  },
  codeFieldRoot: {
    marginTop: 14,
    justifyContent: 'space-between',
  },
  cell: {
    width: 40,
    height: 48,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    backgroundColor: '#F7F7F7',
    borderColor: '#CACACC',
    borderRadius: 8,
    textAlign: 'center',
    marginHorizontal: 6
  },
  focusCell: {
    borderColor: '#000',
  },
  askCode: {
    color: '#1E63EE',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 18,
    margin: 16,
  }
})