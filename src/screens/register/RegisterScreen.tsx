import React, {useState} from 'react'
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native'
import {Logo} from '../../components/Logo'
import {useNavigation} from '@react-navigation/native'
import {Controller, useForm} from 'react-hook-form'
import {CustomButton} from '../../components/CustomButton'
import {Picker} from '@react-native-picker/picker'

export const RegisterScreen = () => {
  const [city, setCity] = useState('Выберите')
  const navigation = useNavigation()

  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({mode: 'onBlur'})

  const onSubmit = (data: any) => console.log(data)

  return (
    <SafeAreaView style={styles.container}>
      <Logo width={60} height={60} marginBottom={16} />
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Фамилия</Text>
        <Controller
          name={'lastName'}
          control={control}
          render={({field}) => <TextInput {...field} style={styles.input} placeholder={'Фамилия'} />}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Имя</Text>
        <Controller
          name={'name'}
          control={control}
          render={({field}) => <TextInput {...field} style={styles.input} placeholder={'Имя'} />}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Отчество</Text>
        <Controller
          name={'middleName'}
          control={control}
          render={({field}) => <TextInput {...field} style={styles.input} placeholder={'Отчество'} />}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Телефон</Text>
        <Controller
          name={'phone'}
          control={control}
          render={({field}) => <TextInput {...field} style={styles.input} placeholder={'Телефон'} />}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Email</Text>
        <Controller
          name={'email'}
          control={control}
          rules={{
            required: {
              value: true,
              message: 'Field is required!',
            },
            pattern: {
              value: (/^(?!.*@[^,]*,)/),
              message: 'Invalid email',
            },
          }}
          render={({field}) => <TextInput {...field} style={styles.input} placeholder={'Email'} />}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Город</Text>
        <Controller
          name={'city'}
          control={control}
          render={({field}) => <Picker {...field} style={styles.input} selectedValue={city} onValueChange={setCity}>
            <Picker.Item label="Москва" value="moscow" />
            <Picker.Item label="Санкт-Петербург" value="moscow" />
          </Picker>
          }
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Диплом</Text>
        <Controller
          name={'diploma'}
          control={control}
          render={({field}) => <TextInput {...field} style={styles.input} placeholder={'Диплом'} />}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Специализация</Text>
        <Controller
          name={'spec'}
          control={control}
          render={({field}) => <TextInput {...field} style={styles.input} placeholder={'Специализация'} />}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Checkbox</Text>
        <Controller
          name={'check'}
          control={control}
          render={({field}) => <TextInput {...field} style={styles.input}  />}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Checkbox</Text>
        <Controller
          name={'check'}
          control={control}
          render={({field}) => <TextInput {...field} style={styles.input}  />}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Checkbox</Text>
        <Controller
          name={'check'}
          control={control}
          render={({field}) => <TextInput {...field} style={styles.input}  />}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Promocode</Text>
        <Controller
          name={'promocode'}
          control={control}
          render={({field}) => <TextInput {...field} style={styles.input}  />}
        />
      </View>
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
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 343,
  },
  text: {
    fontSize: 12,
    fontWeight: '600',
    flexWrap: 'wrap'
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