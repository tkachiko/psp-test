import React from 'react'
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native'
import {Logo} from '../../components/Logo'
import {useNavigation} from '@react-navigation/native'
import {useForm} from 'react-hook-form'
import {CustomButton} from '../../components/CustomButton'
import {InputRegister} from '../../components/InputRegister'
import {InputCity} from '../../components/InputCity'
import {CheckBoxConsent} from '../../components/CheckBoxConsent'
import {AddFile} from '../../components/AddFile'

export const RegisterScreen = () => {
  const navigation = useNavigation()

  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({mode: 'onBlur'})

  const onSubmit = (data: any) => console.log(data)


  return (
    <SafeAreaView style={styles.container}>
      <Logo position={'relative'}
            width={60}
            height={60}
            marginBottom={16} />
      <ScrollView style={styles.scrollContainer}>
        <InputRegister textName={'Фамилия'}
                       placeHolderName={'Фамилия'}
                       controllerName={'lastName'} />
        <InputRegister textName={'Имя'}
                       placeHolderName={'Имя'}
                       controllerName={'firstName'} />
        <InputRegister textName={'Отчество'}
                       placeHolderName={'Отчество'}
                       controllerName={'middleName'} />
        <InputRegister textName={'Телефон'}
                       placeHolderName={'+7 (___) ___-__-__'}
                       placeholderTextColor={'black'}
                       controllerName={'middleName'} />
        <InputRegister textName={'Email'}
                       placeHolderName={'Email'}
                       controllerName={'email'} />
        <InputCity controllerName={'city'} />
        <AddFile textName={'Диплом'}
                 placeHolderName={'Прикрепить файл'}
                 placeholderTextColor={'#1E63EE'} />
        <InputRegister textName={'Специали-\nзация'}
                       placeHolderName={'Специализация'}
                       controllerName={'specialization'} />
        <CheckBoxConsent textConsent={'Согласие на обработку персональных данных'} />
        <CheckBoxConsent textConsent={'Согласие на участие в акциях \n' +
          'по продвижению приложения'} />
        <CheckBoxConsent textConsent={'Согласие на участие в галерее рекомендованных врачей'} />
        <InputRegister textName={'Введите\nпромокод'}
                       placeHolderName={'Промокод'}
                       controllerName={'promoCode'} />
        <CustomButton onPress={handleSubmit(onSubmit)}
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
    </SafeAreaView>
  )
}

export const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    minHeight: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
})