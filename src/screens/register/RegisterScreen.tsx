import React, {FC} from 'react'
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native'
import {Logo} from '../../components/Logo'
import {useNavigation} from '@react-navigation/native'
import {useForm} from 'react-hook-form'
import {CustomButton} from '../../components/CustomButton'
import {InputRegister} from '../../components/InputRegister'
import {PickerSelect} from '../../components/PickerSelect'
import {CheckBoxConsent} from '../../components/CheckBoxConsent'
import {AddFile} from '../../components/AddFile'

export const RegisterScreen: FC<any> = ({navigation}) => {
  const {
    control,
    handleSubmit,
    register,
    formState: {errors, isValid},
  } = useForm({mode: 'onBlur'})

  const onSubmit = (data: any) => {
    navigation.navigate('Confirm')
    console.log(data)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Logo position={'relative'}
            width={60}
            height={60}
            marginBottom={16} />
      <ScrollView style={styles.scrollContainer}>
        <InputRegister textName={'Фамилия'}
                       placeHolderName={'Фамилия'}
                       controllerName={'lastName'}
                       control={control}
                       errors={errors}
        />
        <InputRegister textName={'Имя'}
                       placeHolderName={'Имя'}
                       controllerName={'firstName'}
                       control={control}
                       errors={errors} />
        <InputRegister textName={'Отчество'}
                       placeHolderName={'Отчество'}
                       controllerName={'middleName'}
                       control={control}
                       errors={errors} />
        <InputRegister textName={'Телефон'}
                       placeHolderName={'+7 (___) ___-__-__'}
                       placeholderTextColor={'#000'}
                       controllerName={'middleName'}
                       control={control}
                       errors={errors} />
        <InputRegister textName={'Email'}
                       placeHolderName={'Email'}
                       controllerName={'email'}
                       control={control}
                       errors={errors} />
        <PickerSelect controllerName={'city'}
                      textName={'Город'}
                      placeholder={{label: 'Выберите', value: null}}
                      items={[{label: 'Москва', value: 'moscow'},
                        {label: 'Санкт-Петербург', value: 'piter'},
                        {label: 'Мурманск', value: 'murmansk'}]} />
        <AddFile textName={'Диплом'}
                 placeHolderName={'Прикрепить файл'}
                 placeholderTextColor={'#1E63EE'} />
        <PickerSelect textName={'Специали-\nзация'}
                      controllerName={'specialization'}
                      placeholder={{label: 'Специализация', value: null}}
                      items={[{label: 'Терапевт', value: 'therapist'},
                        {label: 'Хирург', value: 'surgeon'}]} />
        <CheckBoxConsent textConsent={'Согласие на обработку персональных данных'} />
        <CheckBoxConsent textConsent={'Согласие на участие в акциях \n' +
          'по продвижению приложения'} />
        <CheckBoxConsent textConsent={'Согласие на участие в галерее \n' +
          'рекомендованных врачей'} />
        <InputRegister textName={'Введите \n' +
          'промокод'}
                       placeHolderName={'Промокод'}
                       controllerName={'promoCode'}
                       control={control}
                       errors={errors} />
        <CustomButton onPress={() => navigation.navigate('Confirm')}
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

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100,
  },
  scrollContainer: {
    minHeight: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
})