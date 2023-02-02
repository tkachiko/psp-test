import React, {FC} from 'react'
import {KeyboardTypeOptions, ScrollView, StyleSheet, Text, View} from 'react-native'
import {FormProvider, useForm} from 'react-hook-form'
import {CustomButton} from '../../components/CustomButton'
import {InputRegister} from '../../components/InputRegister'
import {AddFile} from '../../components/AddFile'
import {PickerSelect} from '../../components/PickerSelect/PickerSelect'
import {CheckBoxConsent} from '../../components/CheckBoxConsent'
import {CustomHeader} from '../../components/CustomHeader'
import {
  pickerSelectCityItems,
  pickerSelectCityPlaceHolder,
} from '../../components/PickerSelect/PickerSelectDataCity/DataCity'
import {
  pickerSelectProfessionalItems,
  pickerSelectProfessionalPlaceHolder,
} from '../../components/PickerSelect/PickerSelectDataProfessional/DataProfessional'
import {PATH} from '../../route/Routes'
import {Logo} from '../../components/Logo'

type FormType = {
  lastName: string
  firstName: string
  middleName: string
  phone: string
  email: string
}

export const RegisterScreen: FC<any> = ({navigation}) => {
  const form = useForm<FormType>({
    mode: 'onSubmit',
  })
  const onSubmit = (data: FormType) => {
    navigation.navigate(PATH.CONFIRM)
    console.log('data', data)
  }

  const inputsRegisterArr = [
    {
      textName: 'Фамилия',
      placeHolderName: 'Фамилия',
      controllerName: 'lastName',
      required: true,
    },
    {
      textName: 'Имя',
      placeHolderName: 'Имя',
      controllerName: 'firstName',
      required: true,
    },
    {
      textName: 'Отчество',
      placeHolderName: 'Отчество',
      controllerName: 'middleName',
      required: true,
    },
    {
      textName: 'Телефон',
      placeHolderName: '+7 (___) ___-__-__',
      placeholderTextColor: '#000',
      controllerName: 'phone',
      keyboardType: 'phone-pad' as KeyboardTypeOptions,
      required: true,
    },
    {
      textName: 'Email',
      placeHolderName: 'Email',
      controllerName: 'email',
      keyboardType: 'email-address' as KeyboardTypeOptions,
      required: true,
    },
  ]
  const checkBoxConsentArr = [
    {textConsent: 'Согласие на обработку персональных данных'},
    {textConsent: 'Согласие на участие в акциях', text: 'по продвижению приложения'},
    {textConsent: 'Согласие на обработку персональных данных', text: 'рекомендованных врачей'},
  ]

  return (
    <View style={styles.container}>
      <CustomHeader name={PATH.ENTER} navigation={navigation} />
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
                  contentContainerStyle={{alignSelf: 'center'}}
      >
        <FormProvider {...form}>
          {inputsRegisterArr.map((el, index) => <InputRegister key={index} {...el} />)}
          <PickerSelect controllerName={'city'}
                        textName={'Город'}
                        placeholder={pickerSelectCityPlaceHolder}
                        items={pickerSelectCityItems} />
          <AddFile textName={'Диплом'}
                   placeHolderName={'Прикрепить файл'}
                   placeholderTextColor={'#1E63EE'}
                   controllerName={'addFile'}
          />
          <PickerSelect textName={'Специали-\nзация'}
                        controllerName={'specialization'}
                        placeholder={pickerSelectProfessionalPlaceHolder}
                        items={pickerSelectProfessionalItems} />
          {checkBoxConsentArr.map((el, index) => <CheckBoxConsent key={index} {...el} />)}
          <InputRegister
            textName={'Введите \n' +
              'промокод'}
            placeHolderName={'Промокод'}
            controllerName={'promoCode'}
          />
        </FormProvider>
        <CustomButton onPress={form.handleSubmit(onSubmit)}
                      color={'#fff'}
                      borderColor={'#1E63EE'}
                      backgroundColor={'#1E63EE'}
                      fontSize={17}
                      paddingHorizontal={119}
                      paddingVertical={15}
                      textAlign={'center'}
                      title={'Продолжить'}
                      marginTop={17}
        />
        <View>
          <Text>Yo hello</Text>
          <Text>Yo hello</Text>
          <Text>Yo hello</Text>
          <Text>Yo hello</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    width: '100%',
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
})