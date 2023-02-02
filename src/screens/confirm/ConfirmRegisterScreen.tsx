import React, {FC, useState} from 'react'
import {ScrollView, StyleSheet, Text, View} from 'react-native'
import {CustomButton} from '../../components/CustomButton'
import {CustomHeader} from '../../components/CustomHeader'
import {PATH} from '../../route/Routes'
import {CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell} from 'react-native-confirmation-code-field'
import {Logo} from '../../components/Logo'

const CELL_COUNT = 6

export const ConfirmRegisterScreen: FC<any> = ({navigation}) => {
  const [value, setValue] = useState('')
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT})
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  })

  return (
    <View style={styles.container}>
      <CustomHeader name={PATH.REGISTER} navigation={navigation} />
      <View style={styles.logoContainer}>
        <Logo position={'relative'}
              width={60}
              height={60}
              marginBottom={16}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  style={styles.scrollContainer}
      >
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
        <CustomButton onPress={() => {
        }}
                      color={'#fff'}
                      borderColor={'#1E63EE'}
                      backgroundColor={'#1E63EE'}
                      fontSize={17}
                      paddingHorizontal={119}
                      paddingVertical={15}
                      textAlign={'center'}
                      title={'Продолжить'}
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  scrollContainer: {
    width: '100%',
    height: '100%',
    paddingVertical: 50,
    paddingHorizontal: 20,
    margin: -60,
    zIndex: 100,
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  logoContainer: {
    position: 'absolute',
    top: 94,
    zIndex: 1000,
  },
  title: {
    textAlign: 'center',
    fontSize: 21,
    fontWeight: '600',
  },
  codeFieldRoot: {
    marginTop: 14,
    alignSelf: 'center',
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
    marginHorizontal: 6,
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
    alignSelf: 'center'
  },
})