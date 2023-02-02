import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {Logo} from '../../components/Logo'
import {CustomButton} from '../../components/CustomButton'
import {FC} from 'react'
import {PATH} from "../../route/Routes";

export const EnterScreen: FC<any> = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Logo
                width={112}
                height={112}
                marginBottom={16}/>
            <Text style={styles.heading}>{'Программа\nподдержки пациентов\nи врачей'}</Text>
            <TouchableOpacity>
                <Text style={styles.text}>
                    Регистрация
                </Text>
            </TouchableOpacity>
            <CustomButton borderWidth={2}
                          borderRadius={12}
                          paddingVertical={15}
                          paddingHorizontal={151}
                          borderColor={'#fff'}
                          fontSize={17}
                          color={'#fff'}
                          textAlign={'center'}
                          title={'Врач'}
                          onPress={() =>
                              navigation.navigate(PATH.REGISTER)
                          }
            />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E63EE',
    alignItems: 'center',
    justifyContent: 'center',
  },
    heading: {
        color: '#fff',
        fontSize: 30,
        display: 'flex',
        textAlign: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 21,
        lineHeight: 28,
        textAlign: 'center',
        marginTop: 136,
        marginBottom: 16,
    },
})