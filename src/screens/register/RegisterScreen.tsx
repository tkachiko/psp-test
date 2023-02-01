import React, {FC} from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'
import {FormProvider, useForm} from 'react-hook-form'
import {CustomButton} from '../../components/CustomButton'
import {InputRegister} from '../../components/InputRegister'
import {AddFile} from '../../components/AddFile'
import {PickerSelect} from '../../components/PickerSelect'
import {CheckBoxConsent} from '../../components/CheckBoxConsent'
import {CustomHeader} from '../../components/CustomHeader'

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
    navigation.navigate('Confirm')
    console.log('data', data)
  }

  return (
    <View style={styles.container}>
      <CustomHeader name={'Enter'} navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  style={styles.scrollContainer}>
        <FormProvider {...form}>
          <InputRegister textName={'Фамилия'}
                         placeHolderName={'Фамилия'}
                         controllerName={'lastName'}
                         required={true}
          />
          <InputRegister textName={'Имя'}
                         placeHolderName={'Имя'}
                         controllerName={'firstName'}
                         required={true}
          />
          <InputRegister textName={'Отчество'}
                         placeHolderName={'Отчество'}
                         controllerName={'middleName'}
                         required={true}
          />
          <InputRegister textName={'Телефон'}
                         placeHolderName={'+7 (___) ___-__-__'}
                         placeholderTextColor={'#000'}
                         controllerName={'phone'}
                         keyboardType={'phone-pad'}
                         required={true}
          />
          <InputRegister textName={'Email'}
                         placeHolderName={'Email'}
                         controllerName={'email'}
                         keyboardType={'email-address'}
                         required={true}
          />
          <PickerSelect controllerName={'city'}
                        textName={'Город'}
                        placeholder={{label: 'Выберите', value: null}}
                        items={[{label: 'Москва', value: 'moscow'},
                          {label: 'Санкт-Петербург', value: 'piter'},
                          {label: 'Мурманск', value: 'murmansk'}]} />
          <AddFile textName={'Диплом'}
                   placeHolderName={'Прикрепить файл'}
                   placeholderTextColor={'#1E63EE'}
                   controllerName={'addFile'}
          />
          <PickerSelect textName={'Специали-\nзация'}
                        controllerName={'specialization'}
                        placeholder={{label: 'Специализация', value: null}}
                        items={[{label: 'Терапевт', value: 'therapist'},
                          {label: 'Хирург', value: 'surgeon'}]} />
          <CheckBoxConsent textConsent={'Согласие на обработку персональных данных'} />
          <CheckBoxConsent textConsent={'Согласие на участие в акциях'}
                           text={'по продвижению приложения'} />
          <CheckBoxConsent textConsent={'Согласие на участие в галерее'} text={'рекомендованных врачей'} />
          <InputRegister textName={'Введите \n' +
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
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100,
  },
  scrollContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
})